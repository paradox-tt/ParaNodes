import { ApiPromise } from '@polkadot/api';//Required for chain interaction
      
export class SessionKeys {

    static async getQueuedKeys(validator: string, api:Promise<ApiPromise>): Promise<string> {
        //var wsProvider: WsProvider = Settings.getServer(validator);
        
        return api.then(api => {
            return api.query.session.queuedKeys().then(allKeys => {

                for (var i = 0; i < allKeys.length; i++) {

                    if (validator == allKeys[i][0].toHuman()) {
                        return allKeys[i][1].toHex();
                    }
                }

            }).catch(c => {
                return "Error " + c;
            });
        });
    };

    static async getNextKeys(validator: string, api:Promise<ApiPromise>): Promise<string> {  
        return api.then(api => { 
            return api.query.session.nextKeys(validator).then(allKeys => {
                var result = allKeys.toHex();

                if (result == "0x") {
                    result = "";
                }
                return result;
            }).catch(c=>{
                return "Error "+c;
            });
        });
    };

}





