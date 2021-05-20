using _01_DataAccess.ContractOfDataAccess;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace _01_DataAccess
{
    public partial class Order:IOrder
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Order()
        {
            this.OrderProducts = new HashSet<OrderProduct>();
        }

        [Key]
        public int Order_id { get; set; }
        public Nullable<System.DateTime> Order_date { get; set; }
        public Nullable<int> Order_total { get; set; }
        public Nullable<int> Customer_id { get; set; }
        public string Order_status { get; set; }
        public string Order_address { get; set; }
        public string Order_mobile { get; set; }
        public string Order_pincode { get; set; }
        public virtual Customer Customer { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<OrderProduct> OrderProducts { get; set; }

    }
}
