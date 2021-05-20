using _01_DataAccess.ContractOfDataAccess;
using _04_Shared.Interfaces.DTO;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace _01_DataAccess
{
    public partial class Customer:ICustomer
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Customer()
        {
            this.Orders = new HashSet<Order>();
        }
        [Key]
        public int Customer_id { get; set; }

        [Required(ErrorMessage ="Email is required")]
        public string Customer_email { get; set; }
        [Required(ErrorMessage = "Password is required")]
        public string Customer_password { get; set; }
        [Required(ErrorMessage = "First name is required")]
        public string Customer_firstname { get; set; }
        [Required(ErrorMessage = "Last name is required")]
        public string Customer_lastname { get; set; }
        [Required(ErrorMessage = "Mobile is required")]
        [StringLength(10)]
        public string Customer_mobile { get; set; }
        [Required(ErrorMessage = "Status is required")]
        public bool Customer_status { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Order> Orders { get; set; }
    }
}
