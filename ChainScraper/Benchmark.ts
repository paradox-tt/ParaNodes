import { ApiPromise, WsProvider } from '@polkadot/api';
import { BlockHash } from '@polkadot/types/interfaces';

async function getEraNominators(requested_era: number) {
    const api = await ApiPromise.create({ provider: wsProvider });

    //let nominators: Array<Nominator> = new Array<Nominator>();
    var current_era: number = await api.query.staking.activeEra().then(x => {
        return x.unwrapOrDefault().index.toNumber();
    });

    const blockHash = await api.rpc.chain.getBlockHash(current_block).then(bh => {
        return bh.toString();
    });

    const bh = await getBlockForEra(current_era).then(era_hash => {
        return era_hash;
    });


    const nominations = await api.query.staking.nominators.entriesAt(bh).then(nominations => {
        return nominations;
    });

    for (let [nom_address, validators] of nominations) {

        console.log('Processing nominator:' + nom_address.toHuman().toString());

        for (var i = 0; i < validators.unwrapOrDefault().targets.length; i++) {
            console.log('Processing validator: ' + validators.unwrapOrDefault().targets[i].toHuman());
        }

    }


}