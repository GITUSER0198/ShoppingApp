using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Presentation.Models
{
    public class OrderModel2
    {
        public string User { get; set; }
        public int CartTotal { get; set; }
        public string Address { get; set; }
        public string Pincode { get; set; }
        public string Mobile { get; set; }
        public OrderModel[] ArrayValue { get; set; }
    }
}
