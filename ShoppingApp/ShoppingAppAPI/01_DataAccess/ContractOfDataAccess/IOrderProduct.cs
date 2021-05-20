using System;
using System.Collections.Generic;
using System.Text;

namespace _01_DataAccess.ContractOfDataAccess
{
   public interface IOrderProduct
    {
         int ID { get; set; }
         Nullable<int> OrderID { get; set; }
         Nullable<int> Product_id { get; set; }
         Nullable<int> Product_qty { get; set; }
         string Product_name { get; set; }
         Order Order { get; set; }
    }
}
