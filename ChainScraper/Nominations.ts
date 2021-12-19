import { ApiPromise, WsProvider } from '@polkadot/api';//Required for chain interaction
import { EraIndex, BlockHash, SignedBlock } from '@polkadot/types/interfaces';

export class Nominations {

    static async getBlockForEra(desired_era: number, getLast: boolean, api: Promise<ApiPromise>): Promise<BlockHash> {
        
        return api.then(api=>{
            var currentBlock = api.rpc.chain.getBlock();
            var blockNumber = currentBlock.block.header.number.toNumber();

            var blockHash: BlockHash;
            var active_era = api.query.staking.activeEra().then(x => {
                return x.unwrapOrDefault().index.toNumber();
            });

            console.log("Current era:" + active_era);
            console.log("Attempting to find desired era");

            while (desired_era != active_era) {
                blockNumber -= 1000;

                blockHash = api.rpc.chain.getBlockHash(blockNumber).then(bh => {
                    return bh;
                });
                active_era = api.query.staking.activeEra.at(blockHash).then(x => {
                    return x.unwrapOrDefault().index.toNumber();
                });

                console.log("Found era:" + active_era);
            }

            console.log("Success, blockhash: " + blockHash.hash.toHuman());

                return blockHash;
        });
    }

    static async getEra(block_hash: BlockHash, api: Promise<ApiPromise>): Promise<number> {
        
        return api.then(api => { 
            return api.query.staking.activeEra.at(block_hash).then(x => {
                return x.unwrapOrDefault().index.toNumber();
            });
        });
    }

    static async getValidatorCommission(era: number, val_address: string, api: Promise<ApiPromise>): Promise<string> {
        
        return api.then(api => {
            return api.query.staking.erasValidatorPrefs(era, val_address).then(x => {
                return x.toString();
            });
        });

    }

    static async getValidatorPayout(era: number, val_address: string, api: Promise<ApiPromise>): Promise<SignedBlock> {
        
        return api.then(api=>{
            return api.rpc.chain.getBlockHash(8000438).then(blockHash => {
                return api.rpc.chain.getBlock(blockHash).then(x => {
                    return x;
                });
            });
        });
    }
}