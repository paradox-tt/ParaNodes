using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PortalCore
{
    public class SizeDetails
    {
        public string size { get; set; }
        public DateTime created { get; set; }

        public SizeDetails()
        {
            size = "0 G";
            created = DateTime.Now;
        }
    }

    public class DBSizes
    {
        public DBSizes()
        {
            kusama_pruned = new SizeDetails();
            kusama_full = new SizeDetails();
            kusama_archive = new SizeDetails();

            polkadot_pruned = new SizeDetails();
            polkadot_full = new SizeDetails();
            polkadot_archive = new SizeDetails();
        }

        public SizeDetails kusama_archive { get; set; }
        public SizeDetails kusama_full { get; set; }
        public SizeDetails kusama_pruned { get; set; }
        public SizeDetails polkadot_archive { get; set; }
        public SizeDetails polkadot_full { get; set; }
        public SizeDetails polkadot_pruned { get; set; }
    }
}
