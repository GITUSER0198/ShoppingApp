using _04_Shared.DTO_Classes;
using System;
using System.Collections.Generic;
using System.Text;

namespace _04_Shared.Interfaces.DTO
{
    public interface IOrderProductDTO
    {
        int ID { get; set; }
        Nullable<int> OrderID { get; set; }
        Nullable<int> Product_id { get; set; }
        Nullable<int> Product_qty { get; set; }
        string Product_name { get; set; }
    }
}