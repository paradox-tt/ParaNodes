import express from 'express'; //Required for endpoint
import { ApiPromise, WsProvider } from '@polkadot/api';//Required for chain interaction

const wsProvider = new WsProvider('ws://104.238.205.8:9301');


//const era = await api.query.staking.activeEra();
//const era_number = era.unwrap().index.toBigInt();

loadDormantNominators('14hM4oLJCK6wtS7gNfwTDhthRjy5QJ1t3NAcoPjEepo9AH67');

async function loadDormantNominators(validator:string) {
    const api = await ApiPromise.create({ provider: wsProvider });
    //Get list of nominators with their associated validators
    //TODO: error handling in the event that the Promise is not fulfilled.
    const nominators = await api.query.staking.nominators.entries();

    //If nominators isn't undefined
    if (nominators != undefined) {

        var count: number = 0;
        //For each nominator and its validator pairing
        for (let [nom_addresses, validators] of nominators) {

            //Extract the nominator address from the key
            var nom_address:string = nom_addresses.toHuman()[0];
            

            validators.unwrapOrDefault().targets.map((v_address) => {
                //console.log(v_address.toHuman());
                if (v_address.toHuman() == validator) {
                    console.log(nom_address);
                    const nom_bond = getActiveBond(nom_address);
                    console.log(nom_bond);
                    count++;
                }
            });

            //console.log(validators.toJSON());

        }
        console.log(count);
    }
};

async function getActiveBond(stashAddress) {
    var output;
    var controllerAddress;
    const api = await ApiPromise.create({ provider: wsProvider });

    //Determine controller address
    await api.query.staking.bonded(stashAddress).then(controller => {
        controllerAddress = controller.toHuman();
        console.log(controller.toHuman());
    })

    //Lookup the value of the bond using the controller
    await api.query.staking.ledger(controllerAddress).then(bond => {
        if (bond != undefined && bond.toJSON() != null) {
            try {
                output = bond.toHuman();
            } catch (err) {
                output = undefined;
            }
        }
        else {
            output = undefined;
        }
    }).catch(led_err => {
        output = undefined;
    });

    return output;
}
