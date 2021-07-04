import { ApiPromise, WsProvider } from '@polkadot/api';//Required for chain interaction
import { Settings } from './Settings';
      
export class SessionKeys {

    static async getQueuedKeys(validator: string): Promise<string> {
        var wsProvider: WsProvider = Settings.getServer(validator);
        
        const result = await ApiPromise.create({ provider: wsProvider }).then(api => {

            return api.query.session.queuedKeys().then(allKeys => {

                for (var i = 0; i < allKeys.length; i++) {

                    if (validator == allKeys[i][0].toHuman()) {
                        return allKeys[i][1].toHex();
                    }
                }

            }).catch(c => {
                return "Error "+c;
            });

        }).catch(c => {
            return "Error "+c;
        });

        return result;

    };

    static async getNextKeys(validator: string): Promise<string> {
        var wsProvider: WsProvider = Settings.getServer(validator);
 
        var result = await ApiPromise.create({ provider: wsProvider }).then(api => {

            return api.query.session.nextKeys(validator).then(allKeys => {
                return allKeys.toHex();
            }).catch(c=>{
                return "Error "+c;
            });

        }).catch(c => {
            return "Error "+c;
        });

        if (result == "0x") {
            result = "";
        }

        return result;
        
    };


}





