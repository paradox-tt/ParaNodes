using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ChainToSQL
{
    public class Block
    {
        private int _blockid;

        [Key]
        public int BlockID
        {
            get { return _blockid; }
        }
    }
}
