using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace PortalCore.Pages
{
    public class SessionKeysModel : PageModel
    {
        private string _qkey, _nkey, _rpc;
        public async Task OnPostAsync(string validator_id)
        {
            HttpClient Http = new HttpClient();

            var nk = await Http.GetStringAsync("http://api.paranodes.io:5000/NextKeys?address=" + validator_id);
            NextKeys = nk;

            var qk = await Http.GetStringAsync("http://api.paranodes.io:5000/QueuedKeys?address="+validator_id);
            QueuedKeys = qk;

            string rpc_command = "curl -H \"Content - Type: application / json\" -d '{\"id\":1, \"jsonrpc\":\"2.0\", \"method\": \"author_hasSessionKeys\", \"params\":[\""+nk+"\"]}' http://localhost:9933";

            RPCCheck = rpc_command;

        }

        public string QueuedKeys
        {
            get {

                if(_nkey == "")
                {
                    return NextKeys;
                }else if (_qkey == "")
                    {
                    return "A queued key was not retrieived, it is possible that your validator is not in active set or it isn't elected for participation in the next era of validation";
                    }
                else
                {
                    return _qkey;
                }
            }
            set
            {
                _qkey = value;
            }
        }

        public string NextKeys
        {
            get
            {
                if (!string.IsNullOrEmpty(_nkey))
                {
                    if (_nkey == "")
                    {
                        return "A key wasn't retrieved, please ensure that the stash account is in validator mode and a key is applied.";
                    }
                    else
                    {
                        return _nkey;
                    }
                }
                else
                {
                    return "";
                }

            }

            set
            {
                _nkey = value;
                
            }
            
        }

        public string RPCCheck
        {
            get
            {
                if (_nkey == "")
                {
                    return "Sorry there isn't a key to generate the RPC command";
                }
                else
                {
                    return _rpc;
                }
            }
            set
            {
                _rpc = value;
            }
        }
    }
}
