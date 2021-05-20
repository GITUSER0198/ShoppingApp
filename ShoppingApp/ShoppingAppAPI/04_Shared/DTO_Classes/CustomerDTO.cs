using _04_Shared.Interfaces.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace _04_Shared.DTO_Classes
{
    public class CustomerDTO : ICustomerDTO
    {
        public int Customer_id { get; set; }
        public string Customer_email { get; set; }
        public string Customer_password { get; set; }
        public string Customer_firstname { get; set; }
        public string Customer_lastname { get; set; }
        public string Customer_mobile { get; set; }
        public virtual ICollection<OrderDTO> OrdersDTO { get; set; }
        public bool Customer_status { get; set; }


    }
}
