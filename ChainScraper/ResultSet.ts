import { Nominator } from './Nominator';

export class ResultSet {
    Nominators: Array<Nominator>;
    active_era;
    commission;

    AddNominator(n: Nominator) {
        if (this.Nominators == undefined) {
            this.Nominators = new Array<Nominator>();
        }
        this.Nominators.push(n);
    }

    GetTotalNominators() {
        return this.Nominators.length;
    }

    GetTotalStake() {

        var output=0n;

        for (var i = 0; i < this.Nominators.length; i++) {
            output += this.Nominators[i].getActiveAmount();
        }

        return output;
    }

}