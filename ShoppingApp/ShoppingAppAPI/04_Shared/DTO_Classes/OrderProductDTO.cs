using _04_Shared.Interfaces.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace _04_Shared.DTO_Classes
{
    public class OrderProductDTO:IOrderProductDTO
    {
      public int ID { get; set; }
      public Nullable<int> OrderID { get; set; }
      public Nullable<int> Product_id { get; set; }
      public Nullable<int> Product_qty { get; set; }
      public string Product_name { get; set; }  

    }
}
