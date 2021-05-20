using System;
using System.Collections.Generic;
using System.Text;

namespace _01_DataAccess
{
    public interface IOrder
    {

        int Order_id { get; set; }
        Nullable<System.DateTime> Order_date { get; set; }
        Nullable<int> Order_total { get; set; }
        Nullable<int> Customer_id { get; set; }
        string Order_status { get; set; }
        string Order_address { get; set; }
        string Order_mobile { get; set; }
        string Order_pincode { get; set; }
        Customer Customer { get; set; }
        ICollection<OrderProduct> OrderProducts { get; set; }
    }
}
