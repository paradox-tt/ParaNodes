using System;
using System.Collections.Generic;

namespace PolkadotCSharp
{
    public class Request
    {
        public int? id
        {
            get {
                if (id.HasValue)
                {
                    return id;
                }
                else { return 1; }
            }
            set { id = value; }
        }

        public string jsonrpc
        {
            get
            {
                if (jsonrpc != null)
                {
                    return jsonrpc;
                }
                else
                {
                    return "2.0";
                }
            }
            set { jsonrpc = value; }
        }

        public string method
        {
            get
            {
                if (method == null)
                {
                    return method;
                }
                else
                {
                    return "2.0";
                }
            }
            set { method = value; }
        }

        public string[] dparams{
            get
            {
                if (dparams == null)
                {
                    return dparams;
                }
                else
                {
                    return new string[0];
                }
            }
            set { dparams = value; }
        }
      
        public string toJSON
        {
            get
            {
                return this.jsonrpc;
            }
        }
      
    }
}
