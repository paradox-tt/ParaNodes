import { WsProvider } from '@polkadot/api';

export class Settings {
    static listen_port:string = '5000';
    static server_url:string = 'api.paranodes.io';

    static polkadot_port:string = '9301';
    static kusama_port: string = '9302';

    static getServer(address: string): WsProvider {
        var wsProvider: WsProvider;

        if (address.charAt(0) == '1') {
            wsProvider = new WsProvider('wss://rpc.polkadot.io');
            console.log("Using Polkadot port:");
        } else {
            wsProvider = new WsProvider('wss://kusama-rpc.polkadot.io');
            console.log("Using Kusama port:");
        }

        return wsProvider;
    }

    static getNetwork(address: string): number {

        if (address.charAt(0) == '1') {
            return 1;
        } else {
            return 0;
        }
    }
}