using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace PortalCore.Pages
{
    public class LeaderBoardModel : PageModel
    {
        public string TestText{
            get;set;
        }
        public void OnGet()
        {
            TestText = "x2";
        }

        
    }
}
