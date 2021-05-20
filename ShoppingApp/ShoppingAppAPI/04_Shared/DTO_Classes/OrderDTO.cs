using _04_Shared.Interfaces.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace _04_Shared.DTO_Classes
{
    public class OrderDTO:IOrderDTO
    {
        public int Order_id { get; set; }
        public Nullable<System.DateTime> Order_date { get; set; }
        public Nullable<int> Order_total { get; set; }
        public Nullable<int> Customer_id { get; set; }
        public virtual CustomerDTO CustomerDTO { get; set; }
        public virtual ICollection<OrderProductDTO> OrderProductsDTO { get; set; }
        public string Customer_email { get; set; }
        public string Order_status { get; set; }
        public string Order_address { get; set; }
        public string Order_mobile { get; set; }
        public string Order_pincode { get; set; }
        //public int Product_ID { get; set; }
        //public string Product_Name { get; set; }
        //public string Product_Price { get; set; }
        //public int Product_Quantity { get; set; }

    }
}
