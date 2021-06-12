using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
//using PolkadotCSharp;

namespace PN_Backend
{
    /// <summary>
    /// Summary description for ChainData
    /// </summary>
    public class ChainData : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            context.Response.Write("Hello World");
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