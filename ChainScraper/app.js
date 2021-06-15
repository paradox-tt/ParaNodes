"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("@polkadot/api"); //Required for chain interaction
const wsProvider = new api_1.WsProvider('ws://104.238.205.8:9301');
//const era = await api.query.staking.activeEra();
//const era_number = era.unwrap().index.toBigInt();
loadDormantNominators('14hM4oLJCK6wtS7gNfwTDhthRjy5QJ1t3NAcoPjEepo9AH67');
function loadDormantNominators(validator) {
    return __awaiter(this, void 0, void 0, function* () {
        const api = yield api_1.ApiPromise.create({ provider: wsProvider });
        //Get list of nominators with their associated validators
        //TODO: error handling in the event that the Promise is not fulfilled.
        const nominators = yield api.query.staking.nominators.entries();
        //If nominators isn't undefined
        if (nominators != undefined) {
            var count = 0;
            //For each nominator and its validator pairing
            for (let [nom_addresses, validators] of nominators) {
                //Extract the nominator address from the key
                var nom_address = nom_addresses.toHuman()[0];
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
    });
}
;
function getActiveBond(stashAddress) {
    return __awaiter(this, void 0, void 0, function* () {
        var output;
        var controllerAddress;
        const api = yield api_1.ApiPromise.create({ provider: wsProvider });
        //Determine controller address
        yield api.query.staking.bonded(stashAddress).then(controller => {
            controllerAddress = controller.toHuman();
            console.log(controller.toHuman());
        });
        //Lookup the value of the bond using the controller
        yield api.query.staking.ledger(controllerAddress).then(bond => {
            if (bond != undefined && bond.toJSON() != null) {
                try {
                    output = bond.toHuman();
                }
                catch (err) {
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
    });
}
