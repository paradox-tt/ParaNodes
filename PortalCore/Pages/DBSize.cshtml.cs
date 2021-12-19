using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Newtonsoft.Json;
using static System.Net.WebRequestMethods;

namespace PortalCore.Pages
{
    public class DBSizeModel : PageModel
    {
        private DBSizes size_data;
        public void OnGet(){
            using (var client = new WebClient())
            {
                var sizes_string = client.DownloadString("http://api.paranodes.io:5000/DBSizes");

                Data = JsonConvert.DeserializeObject<DBSizes>(sizes_string);
            }

        }

        public DBSizes Data
        {
            get
            {
                if (size_data == null)
                {
                    return new DBSizes();
                }
                else
                {
                    return size_data;
                }
            }
            set
            {
                this.size_data = value;
            }
            
        }


        public string Kusama_Full_Size
        {
            get
            {
                return Data.kusama_full.size+"B";
            }
        }

        public DateTime Kusama_Full_DT
        {
            get
            {
                return Data.kusama_full.created;
            }
        }

        public string Kusama_Pruned_Size
        {
            get
            {
                return Data.kusama_pruned.size+ "B";
            }
        }

        public DateTime Kusama_Pruned_DT
        {
            get
            {
                return Data.kusama_pruned.created;
            }
        }

        public string Kusama_Archive_Size
        {
            get
            {
                return Data.kusama_archive.size + "B";
            }
        }

        public DateTime Kusama_Archive_DT
        {
            get
            {
                return Data.kusama_archive.created;
            }
        }

        public string Polkadot_Full_Size
        {
            get
            {
                return Data.polkadot_full.size + "B";
            }
        }

        public DateTime Polkadot_Full_DT
        {
            get
            {
                return Data.polkadot_full.created;
            }
        }

        public string Polkadot_Pruned_Size
        {
            get
            {
                return Data.polkadot_pruned.size+ "B";
            }
        }

        public DateTime Polkadot_Pruned_DT
        {
            get
            {
                return Data.polkadot_pruned.created;
            }
        }

        public string Polkadot_Archive_Size
        {
            get
            {
                return Data.polkadot_archive.size+ "B";
            }
        }

        public DateTime Polkadot_Archive_DT
        {
            get
            {
                return Data.polkadot_archive.created;
            }
        }
    }
}
