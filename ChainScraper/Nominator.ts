export class Nominator {

    public address: string;
    //public account_id: Uint8Array;
    public active_bond:string;
    public primary: string;
    public sub: string;

    getActiveAmount() {
        try {
            if (this.address.charAt[0] == '1') {
                return BigInt(this.active_bond) / 100000000n;
            } else {
                return BigInt(this.active_bond) / 10000000000n;
            }
        } catch (e) {
            return 0n;
        }
    }

    setBond(bond: string) {
        this.active_bond = bond;
    }

    getName() {
        var output;

        if (this.primary != undefined && this.sub != undefined) {
            output = this.primary + "/" + this.sub;
        } else if (this.sub == undefined && this.primary != undefined) {
            output = this.primary;
        } else {
            output = this.address;
        }

        return output;
    }

    toString(): string {
        return this.getName() + ":" + this.address+":"+this.getActiveAmount();
    }


}