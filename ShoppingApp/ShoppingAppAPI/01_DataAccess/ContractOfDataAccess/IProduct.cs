using System;
using System.Collections.Generic;
using System.Text;

namespace _01_DataAccess.ContractOfDataAccess
{
    public interface IProduct
    {
        int Product_id { get; set; }
        string Product_name { get; set; }
        string Product_category { get; set; }
        Nullable<int> Product_quantity { get; set; }
        Nullable<double> Product_price { get; set; }
        string Product_Image_Name { get; set; }
        byte[] Product_Image { get; set; }
        string Product_description { get; set; }

         ICollection<OrderProduct> OrderProducts { get; set; }
    }
}
