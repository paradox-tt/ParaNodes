import express from 'express'; //Required for endpoint
import bodyparser from 'body-parser';
import { ApiPromise, WsProvider } from '@polkadot/api';//Required for chain interaction
import { ResultSet } from './ResultSet';
import { Nominator } from './Nominator';
import { EraIndex, BlockHash, SignedBlock } from '@polkadot/types/interfaces';
import { SessionKeys } from './SessionKeys';
import { Settings } from './Settings';

var wsProvider;
var Results: ResultSet;

// Set up the express app
const app = express(); 

//Establishes endpoint

app.use(bodyparser.json());
//getBlockForEra(360);
app.all('/',  (req, res) => {

    //14hM4oLJCK6wtS7gNfwTDhthRjy5QJ1t3NAcoPjEepo9AH67
    //return output in JSON format
    //console.log(req.headers);
    var address: string = req.query.address;
    var era: number = req.query.era;

    wsProvider = getServer(address);

    console.log("Request received for address:" + address + " era:" + era);

    getBlockForEra(era).then(block_hash => {
        
        loadDormantNominators(address, block_hash).then(x => {
            
            Results = x;

            const names = getNames();
            const balances = getBalances();
            const era = getEra(block_hash).then(era => {
                getValidatorCommission(era, address).then(com => {
                    Results.commission = JSON.parse(com).commission;
                });
            });

            Promise.all([names,balances,era]).then(values => {
                Results.active_era = values[2];

                res.status(200).json(
                    Results
                );

                console.log("Results sent!");
            });

            

        }).catch(e => {
            console.log(e);
        });
    });


});

app.all('/payouts', (req, res) => {

    var address: string = req.query.address;
    var era: number = req.query.era;

    wsProvider = getServer(address);


    const payout = getValidatorPayout(1, '2');

    Promise.all([payout]).then(values => {
        res.status(200).send(
            values[0].block.extrinsics.toHuman()
        );
        console.log("Results posted");
    });

});

app.all('/QueuedKeys', (req, res) => {

    var address: string = req.query.address;
    
    SessionKeys.getQueuedKeys(address).then(value => {

        res.status(200).send(
            value
        );

    });

});


app.all('/NextKeys', (req, res) => {

    var address: string = req.query.address;

    SessionKeys.getNextKeys(address).then(value => {

        res.status(200).send(
            value
        );

    });

});

//Listen for the connection on the specified port
app.listen(Settings.server_port, () => {
    console.log(`Server running on port ${Settings.server_port}`)
});



function printAll() {
    for (var i = 0; i < Results.Nominators.length; i++) {
        console.log(Results.Nominators[i].toString());
    }
}

async function getBlockForEra(desired_era: number): Promise<BlockHash> {
    const api = await ApiPromise.create({ provider: wsProvider });

    var currentBlock = await api.rpc.chain.getBlock();
    var blockNumber = currentBlock.block.header.number.toNumber();

    var blockHash:BlockHash;
    var active_era = await api.query.staking.activeEra().then(x => {
        return x.unwrapOrDefault().index.toNumber();
    });

    console.log("Current era:" + active_era);
    console.log("Attempting to find desired era");

    while (desired_era != active_era) {
        blockNumber -= 1000;

        blockHash = await api.rpc.chain.getBlockHash(blockNumber).then(bh => {
            return bh;
        });
        active_era = await api.query.staking.activeEra.at(blockHash).then(x => {
            return x.unwrapOrDefault().index.toNumber();
        });
        
        console.log("Found era:"+active_era);
    }

    console.log("Success, blockhash: "+blockHash.hash.toHuman());

    return blockHash;
}

async function getEra(block_hash:BlockHash): Promise<number> {
    const api = await ApiPromise.create({ provider: wsProvider });
    var output;

    await api.query.staking.activeEra.at(block_hash).then(x => {
        output = x.unwrapOrDefault().index.toNumber();
    });

    return output;
}

async function getValidatorCommission(era:number,val_address:string):Promise<string> {
    const api = await ApiPromise.create({ provider: wsProvider });
    var output:string;

    await api.query.staking.erasValidatorPrefs(era,val_address).then(x => {
        output = x.toString();
    });

    return output;
}

async function getValidatorPayout(era: number, val_address: string):Promise<SignedBlock> {
    const api = await ApiPromise.create({ provider: wsProvider });
    var output:SignedBlock;

    const blockHash = await api.rpc.chain.getBlockHash(8000438).then(bh => {
        return bh;
    });

    await api.rpc.chain.getBlock(blockHash).then(x => {
        output = x
    });

  
    return output;
}

async function loadDormantNominators(validator: string, block_hash:BlockHash):Promise<ResultSet> {
    const Results = new ResultSet();
    
    const api = await ApiPromise.create({ provider: wsProvider });
    //Get list of nominators with their associated validators
    //TODO: error handling in the event that the Promise is not fulfilled.

    console.log("Staring nominator->validator retrieval");
    await api.query.staking.nominators.entriesAt(block_hash).then(nominators => {

        //If nominators isn't undefined
        if (nominators != undefined) {

            var count: number = 0;
            //For each nominator and its validator pairing
            for (let [nom_addresses, validators] of nominators) {

                //Extract the nominator address from the key
                var nom_address: string = nom_addresses.toHuman()[0];
                var nom_accountid = nom_addresses.args[0].toU8a();

                validators.unwrapOrDefault().targets.map((v_address) => {
                    //console.log(v_address.toHuman());
                    if (v_address.toHuman() == validator) {
                        var n: Nominator = new Nominator();
                        n.address = nom_address;
                        //n.account_id = nom_accountid;
                        Results.AddNominator(n);                 
                    }
                });
            }
        }
    });

    console.log("Nominators assigned to validator.");
    return Results;
    
};

async function getNames():Promise<string> {

    const api = await ApiPromise.create({ provider: wsProvider });

    for (var i = 0; i < Results.Nominators.length; i++) {
        var n = Results.Nominators[i];

        await api.derive.accounts.info(n.address).then((name) => {
            n.primary = name.identity.displayParent;
            n.sub = name.identity.display;
        });
    }

    console.log("Names loaded");
    return "Names loaded";
}


async function getBalances(): Promise<string> {
    const api = await ApiPromise.create({ provider: wsProvider });

    for (var i = 0; i < Results.Nominators.length; i++) {
        var n = Results.Nominators[i];

        await api.derive.balances.all(n.address).then(bond => {
            n.setBond(bond.lockedBalance.toString());
            //console.log(bond.lockedBalance.toString());
        });
    }

    console.log("Balances loaded");
    return "Balances loaded"
}



//const names = api.derive.accounts.info(n.account_id).then((name) => {
//    n.primary = name.identity.displayParent;
//    n.sub = name.identity.display;

//}).catch((name) => { console.log("Error | Get validator name: ") });


//Promise.all([bonds, names]).then(values => {
//    Results.AddNominator(n);
//    console.log("Total Nominators: " + Results.GetTotalNominators() + " Stash:" + Results.GetTotalStake());
//});


/*  Queued keys
 * 
 *
 */


    //console.log(allKeys.toJSON());
    //const keyring = new Keyring({ type: 'sr25519', ss58Format: 2 });
    //console.log("DECODE " + Buffer.from(keyring.decodeAddress('GaMenw9cpZxNu2wUJHXmBvWqyGFiczzf8dX4kWj8jD47Tcb')).toString('hex'));
    //console.log(allKeys[0].toHuman());

    //console.log(output);

function getServer(address: string):WsProvider {

    var wsProvider;

    if (address.charAt(0) == '1') {
        wsProvider = new WsProvider('ws://104.238.205.8:9301');
        console.log("Using Polkadot port:");
    } else {
        wsProvider = new WsProvider('ws://104.238.205.8:9302');
        console.log("Using Kusama port:");
    }

    return wsProvider;
}
