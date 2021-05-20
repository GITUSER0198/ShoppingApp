using _04_Shared.Interfaces.DTO;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;
using static System.Net.Mime.MediaTypeNames;

namespace _04_Shared.DTO_Classes
{
    public class ProductDTO : IProductDTO
    {
        public int Product_id { get; set; }
        public string Product_name { get; set; }
        public string Product_category { get; set; }
        public Nullable<int> Product_quantity { get; set; }
        public Nullable<double> Product_price { get; set; }
        public string Product_description { get; set; }
        public IFormFile Image { get; set; }
        public string Product_Image_Name { get; set; }
        public byte[] Product_Image { get; set; }
        public virtual ICollection<OrderProductDTO> OrderProductsDTO { get; set; }
    }
}
