import { ApiPromise } from "@polkadot/api";
import { Settings } from './Settings';
import { BlockHash } from '@polkadot/types/interfaces';
import * as fs from 'fs';


//const p_api = ApiPromise.create({ provider: Settings.getServer('1d') });
//const k_api = ApiPromise.create({ provider: Settings.getServer('Hd') });

start(0, 14400, '1D');
//start(0,0,2400,'FD');

async function start(start_block_number: number, blocks_per_era: number, address: string) {

    const api = await ApiPromise.create({ provider: Settings.getServer(address) });
    const network = Settings.getNetwork(address);
    var current_era: number = await api.query.staking.activeEra().then(x => {
        return x.unwrapOrDefault().index.toNumber();
    });

    var current_block = start_block_number;
    
    let era: Era = new Era();
    era.block = start_block_number;
    era.network = network;
    era.blockHash = await api.rpc.chain.getBlockHash(start_block_number).then(bh => {
        return bh.toString();
    });

    active_era = await api.query.staking.activeEra.at(blockHash).then(x => {
        return x.unwrapOrDefault().index.toNumber();
    });

    while (block_era < current_era) {


        const blockHash = await api.rpc.chain.getBlockHash(current_block).then(bh => {
            return bh.toString();
        });

        active_era = await api.query.staking.activeEra.at(blockHash).then(x => {
            return x.unwrapOrDefault().index.toNumber();
        });

        console.log(previous_era + ' ' + active_era + ' ' + current_block);
        if (previous_era != active_era) {
            era.end_block = previous_block;
            era.end_blockHash = previous_block_hash;

            fs.appendFile('Eras.txt', JSON.stringify(era) + ';\n', function (err) {
                if (err) throw err;
                console.log('Era ' + era.era + ' Saved!');
            });

            era = new Era();
            era.start_block = current_block;
            era.network = Settings.getNetwork(address);
            era.start_blockHash = blockHash.toString();
            era.era = active_era;

            start_block_number = current_block;
        }


        /* Advance block
         * 
         * */
        previous_era = active_era;
        previous_block = current_block;
        previous_block_hash = blockHash;

        if (current_block == 0 && network == 1) {
            current_block = 328740;
        }
        else if (current_block == start_block_number) {

            if (active_era <= 19) {
                current_block += 2000;
            } else {
                current_block += blocks_per_era - 1000;
            }

        }
        else {
            current_block += 1;
        }


    }
}


class Era {
    network: number;
    block: number;
    blockHash: string;
    era: number;

    constructor() {
        this.network = -1;
        this.block = -1;
        this.blockHash = "";
        this.era = -1;
    }
}
