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

        public async Task OnPostAsync(string validator_id)
        {
            HttpClient Http = new HttpClient();
            var qk = await Http.GetStringAsync("http://104.238.205.8:5000/QueuedKeys?address="+validator_id);
            QueuedKeys = qk;

            var nk = await Http.GetStringAsync("http://104.238.205.8:5000/NextKeys?address=" + validator_id);
            NextKeys = nk;

            string rpc_command = "curl -H \"Content - Type: application / json\" -d '{\"id\":1, \"jsonrpc\":\"2.0\", \"method\": \"author_hasSessionKeys\", \"params\":[\""+nk+"\"]}' http://localhost:9933";

            RPCCheck = rpc_command;

        }

        public string QueuedKeys
        {
            get;set;
        }

        public string NextKeys
        {
            get;set;
            
        }

        public string RPCCheck
        {
            get; set;
        }
    }
}
