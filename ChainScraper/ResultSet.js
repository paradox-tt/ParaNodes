"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultSet = void 0;
class ResultSet {
    AddNominator(n) {
        if (this.Nominators == undefined) {
            this.Nominators = new Array();
        }
        this.Nominators.push(n);
    }
    GetTotalNominators() {
        return this.Nominators.length;
    }
    GetTotalStake() {
        var output = 0n;
        for (var i = 0; i < this.Nominators.length; i++) {
            output += this.Nominators[i].getActiveAmount();
        }
        return output;
    }
}
exports.ResultSet = ResultSet;
