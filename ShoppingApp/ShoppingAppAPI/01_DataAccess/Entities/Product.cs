using _01_DataAccess.ContractOfDataAccess;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace _01_DataAccess
{
    public partial class Product:IProduct
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Product()
        {
            this.OrderProducts = new HashSet<OrderProduct>();
        }
        [Key]
        public int Product_id { get; set; }
        public string Product_name { get; set; }
        public string Product_category { get; set; }
        public Nullable<int> Product_quantity { get; set; }
        public Nullable<double> Product_price { get; set; }
        public string Product_Image_Name { get; set; }
        public byte[] Product_Image { get; set; }
        public string Product_description { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<OrderProduct> OrderProducts { get; set; }
    }
}
