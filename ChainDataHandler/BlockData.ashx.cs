using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ChainDataHandler
{
    /// <summary>
    /// Summary description for BlockData
    /// </summary>
    public class BlockData : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            //context.Request.Form.b
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}