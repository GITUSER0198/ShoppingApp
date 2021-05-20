using _04_Shared.DTO_Classes;
using System;
using System.Collections.Generic;
using System.Text;

namespace _04_Shared.Interfaces.DTO
{
    public interface IOrderDTO
    {
        int Order_id { get; set; }
        Nullable<System.DateTime> Order_date { get; set; }
        Nullable<int> Order_total { get; set; }
        Nullable<int> Customer_id { get; set; }
        string Customer_email { get; set; }
        CustomerDTO CustomerDTO { get; set; }
        string Order_status { get; set; }
        string Order_address { get; set; }
        string Order_mobile { get; set; }
        string Order_pincode { get; set; }
        ICollection<OrderProductDTO> OrderProductsDTO { get; set; }
        //int Product_ID { get; set; }
        // string Product_Name { get; set; }
        // string Product_Price { get; set; }
        // int Product_Quantity { get; set; }
    }
}
