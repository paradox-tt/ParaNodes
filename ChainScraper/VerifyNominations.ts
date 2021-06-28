import { ApiPromise, WsProvider } from '@polkadot/api';
import { BlockHash} from '@polkadot/types/interfaces';

var wsProvider = new WsProvider('ws://104.238.205.8:9301');

const ce = getCurrentEra().then(current_era => {
    showNominations(['14Ns6kKbCoka3MS4Hn6b7oRw9fFejG8RH5rq5j63cWUfpPDJ', '12RYJb5gG4hfoWPK3owEYtmWoko8G6zwYpvDYTyXFVSfJr8Y','16GMHo9HZv8CcJy4WLoMaU9qusgzx2wxKDLbXStEBvt5274B'], current_era);
    showNominations(['14Ns6kKbCoka3MS4Hn6b7oRw9fFejG8RH5rq5j63cWUfpPDJ', '12RYJb5gG4hfoWPK3owEYtmWoko8G6zwYpvDYTyXFVSfJr8Y', '16GMHo9HZv8CcJy4WLoMaU9qusgzx2wxKDLbXStEBvt5274B'], current_era - 1);
    showNominations(['14Ns6kKbCoka3MS4Hn6b7oRw9fFejG8RH5rq5j63cWUfpPDJ', '12RYJb5gG4hfoWPK3owEYtmWoko8G6zwYpvDYTyXFVSfJr8Y', '16GMHo9HZv8CcJy4WLoMaU9qusgzx2wxKDLbXStEBvt5274B'], current_era - 2);
}); 



async function showNominations(nominator_address:string[], era:number) {
    const api = await ApiPromise.create({ provider: wsProvider });

    let nominators: Array<Nominator> = new Array<Nominator>();

    const eh = await getBlockForEra(era).then(era_hash => {
        return era_hash;
    });

    const nom_results = await api.query.staking.nominators.entriesAt(eh).then(nominations => {

        for (let [nom_address, validators] of nominations) {
            if (nominator_address.includes(nom_address.toHuman()[0])) {
                var nom = new Nominator();

                nom.era = era;
                nom.nominator_address = nom_address.toHuman()[0];
                nom.validators = validators.unwrapOrDefault().targets.toJSON();
                nom.blockhash = eh;
                nominators.push(nom);
            }
        }

    });

    Promise.all([eh,nom_results]).then(values => {
        console.log('Result posted');
        console.log(JSON.stringify(nominators));
    });
    
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

    var active_era = await api.query.staking.activeEra().then(x => {
        return x.unwrapOrDefault().index.toNumber();
    });

    //console.log("Current era:" + active_era);
    //console.log("Attempting to find desired era");

    while (desired_era != active_era) {
        blockNumber -= 1000;

        blockHash = await api.rpc.chain.getBlockHash(blockNumber).then(bh => {
            return bh;
        });
        active_era = await api.query.staking.activeEra.at(blockHash).then(x => {
            return x.unwrapOrDefault().index.toNumber();
        });

        //console.log("Found era:" + active_era);
    }

    //console.log("Success, blockhash: " + blockHash.hash.toHuman());

    return blockHash;
}

class Nominator {
    era: number;
    blockhash: BlockHash;
    nominator_address: string;
    validators;
}