import { ApiPromise, WsProvider } from '@polkadot/api';
import { BlockHash, AccountId} from '@polkadot/types/interfaces';
import { Settings } from './Settings';
import * as fs from 'fs';

var wsProvider = new WsProvider('ws://143.110.145.39:9944');


const ce = getCurrentEra().then(current_era => {

    getEraNominators(430).then(era => {
        console.log(era);
    });
    
});


async function getBondedAmount(stash: string) {
    const api = await ApiPromise.create({ provider: wsProvider });

    const controller = await api.query.staking.bonded(stash);

    const ledger = await api.query.staking.ledger(controller.toString()).then(x => {
        return x.unwrapOrDefault().active.toString();
    });

    return ledger;
};

async function getEraNominators(requested_era: number) {
    const api = await ApiPromise.create({ provider: wsProvider });
    
    //let nominators: Array<Nominator> = new Array<Nominator>();
    let era: Era = new Era();

    const bh = await getBlockForEra(requested_era).then(era_hash => {
        return era_hash;
    });

    era.era = requested_era;
    era.blockhash = bh;
    fs.appendFile(era.era + '.txt', JSON.stringify(era)+';\n', function (err) {
        if (err) throw err;
        console.log('Era Saved!');
    });

    const nominations = await api.query.staking.nominators.entriesAt(bh).then(nominations => {
        return nominations;
    });

    for (let [nom_address, validators] of nominations) {
        let nominator: Nominator = new Nominator();
        nominator.address = nom_address.toHuman().toString();
        nominator.bond = await getBondedAmount(nominator.address);
        console.log('Processing nominator:' + nominator.address);

        for (var i=0; i < validators.unwrapOrDefault().targets.length; i++) {
            let validator: Validator = new Validator();
            validator.address = validators.unwrapOrDefault().targets[i].toHuman();
            nominator.validators.push(validator);
        }

        fs.appendFile(era.era + '.txt', JSON.stringify(nominator) + ';\n', function (err) {
            if (err) throw err;
            console.log('Nominator Saved!');
        });
    }

    
}


async function getCurrentEra():Promise<number> {
    const api = await ApiPromise.create({ provider: wsProvider });

    var active_era = await api.query.staking.activeEra().then(x => {
        return x.unwrapOrDefault().index.toNumber();
    });
 
    return active_era;
}

async function getBlockForEra(desired_era: number): Promise<BlockHash> {
    const api = await ApiPromise.create({ provider: wsProvider });

    var currentBlock = await api.rpc.chain.getBlock();
    var blockNumber = currentBlock.block.header.number.toNumber();

    var blockHash: BlockHash;
    blockHash = await api.rpc.chain.getBlockHash(blockNumber).then(x => {
        return x;
    });

    var active_era:number = await api.query.staking.activeEra().then(x => {
        return x.unwrapOrDefault().index.toNumber();
    });

    console.log("Current era:" + active_era);
    console.log("Attempting to find desired era");

    while (desired_era != active_era) {
        blockNumber -= 1;

        blockHash = await api.rpc.chain.getBlockHash(blockNumber).then(bh => {
            return bh;
        });
        active_era = await api.query.staking.activeEra.at(blockHash).then(x => {
            return x.unwrapOrDefault().index.toNumber();
        });

        console.log("Found era:" + active_era);
    }

    console.log("Success, blockhash: " + blockHash.hash.toHuman());

    return blockHash;
}


class Nominator {
    address: string;
    bond: string;
    validators: Array<Validator>;

    constructor() {
        this.address = "none";
        this.bond = "-1";
        this.validators = new Array<Validator>(); 
    }
}

class Validator {
    address: string;
    bond: string;
    commission: number;

    constructor() {
        this.address = "";
        this.bond = "";
        this.commission = 0;
    }
}

class Era {
    era: number;
    network: number;
    blockhash: BlockHash;

    constructor() {
        this.era = -1;
        this.network = -1;
        this.blockhash = null;
    }
}