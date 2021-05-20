using _04_Shared.DTO_Classes;
using System;
using System.Collections.Generic;
using System.Text;

namespace _04_Shared.Interfaces.DTO
{
    public interface ICustomerDTO
    {
         int Customer_id { get; set; }
         string Customer_email { get; set; }
         string Customer_password { get; set; }
         string Customer_firstname { get; set; }
         string Customer_lastname { get; set; }
         string Customer_mobile { get; set; }
         bool Customer_status { get; set; }

        ICollection<OrderDTO> OrdersDTO { get; set; }


    }
}
