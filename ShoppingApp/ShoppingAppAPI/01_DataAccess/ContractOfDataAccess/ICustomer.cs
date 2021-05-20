using System;
using System.Collections.Generic;
using System.Text;

namespace _01_DataAccess.ContractOfDataAccess
{
    public interface ICustomer
    {
         int Customer_id { get; set; }
         string Customer_email { get; set; }
         string Customer_password { get; set; }
         string Customer_firstname { get; set; }
         string Customer_lastname { get; set; }
         string Customer_mobile { get; set; }
         bool Customer_status { get; set; }
         ICollection<Order> Orders { get; set; }

    }
}
