"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nominator = void 0;
class Nominator {
    getActiveAmount() {
        try {
            if (this.address.charAt[0] == '1') {
                return BigInt(this.active_bond) / 100000000n;
            }
            else {
                return BigInt(this.active_bond) / 10000000000n;
            }
        }
        catch (e) {
            return 0n;
        }
    }
    setBond(bond) {
        this.active_bond = bond;
    }
    getName() {
        var output;
        if (this.primary != undefined && this.sub != undefined) {
            output = this.primary + "/" + this.sub;
        }
        else if (this.sub == undefined && this.primary != undefined) {
            output = this.primary;
        }
        else {
            output = this.address;
        }
        return output;
    }
    toString() {
        return this.getName() + ":" + this.address + ":" + this.getActiveAmount();
    }
}
exports.Nominator = Nominator;
