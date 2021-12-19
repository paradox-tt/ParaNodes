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
    }

    public class DBSizes
    {
        public DBSizes()
        {

        }
        public SizeDetails kusama_archive { get; set; }
        public SizeDetails kusama_full { get; set; }
        public SizeDetails kusama_pruned { get; set; }
        public SizeDetails polkadot_archive { get; set; }
        public SizeDetails polkadot_full { get; set; }
        public SizeDetails polkadot_pruned { get; set; }
    }
}
