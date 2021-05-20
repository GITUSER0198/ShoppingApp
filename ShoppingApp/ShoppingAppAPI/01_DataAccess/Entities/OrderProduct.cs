using _01_DataAccess.ContractOfDataAccess;
using System;
using System.ComponentModel.DataAnnotations;

namespace _01_DataAccess
{


    public partial class OrderProduct:IOrderProduct
    {
        [Key]
        public int ID { get; set; }
        public Nullable<int> OrderID { get; set; }
        public Nullable<int> Product_id { get; set; }
        public Nullable<int> Product_qty { get; set; }
        public string Product_name { get; set; }
        public virtual Order Order { get; set; }
       
    }
}
