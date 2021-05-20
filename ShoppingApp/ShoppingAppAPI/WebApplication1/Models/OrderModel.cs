using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Presentation.Models
{
    public class OrderModel
    {
        public int Product_ID { get; set; }
        public string Product_Name { get; set; }
        public string Product_Price { get; set; }
        public int Product_Quantity { get; set; }
    }
}
