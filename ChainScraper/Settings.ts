import { WsProvider } from '@polkadot/api';

export class Settings {
    static server_port:string = '80';
    static server_url:string = '104.238.205.8';

    static polkadot_port:string = '9301';
    static kusama_port: string = '9302';

    static getServer(address: string): WsProvider {
        var wsProvider: WsProvider;

        if (address.charAt(0) == '1') {
            wsProvider = new WsProvider('ws://'+ this.server_url + ':'+this.polkadot_port);
            console.log("Using Polkadot port:");
        } else {
            wsProvider = new WsProvider('ws://' +this.server_url + ':' + this.kusama_port);
            console.log("Using Kusama port:");
        }

        return wsProvider;
    }

}