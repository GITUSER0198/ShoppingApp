using _01_DataAccess.ContractOfDataAccess;
using Microsoft.EntityFrameworkCore;



namespace _01_DataAccess
{

    public class ShoppingAppEntities : DbContext
    {
        private const string dataSource = "Data Source = DHRUVGOEL\\SQLEXPRESS;Initial Catalog = ShoppingApp; integrated security = SSPI";
        //private const string dataSource = "Server=tcp:jwatmore-sql.database.windows.net,1433;Initial Catalog=my-sql-db;Persist Security Info=False;User ID=dhruv;Password=microspy!A1;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(dataSource);


        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>().HasData(
                 new Customer
                 {
                     Customer_id = 1,
                     Customer_email = "admin@gmail.com",
                     Customer_firstname = "Admin",
                     Customer_lastname = "Admin",
                     Customer_mobile = "0000000000",
                     Customer_password = "ZxsIB827BbxDIbH1eI9bYA==",
                     Customer_status = true
                 }
              );
            modelBuilder.Entity<Customer>().HasData(
                new Customer
                {
                    Customer_id = 2,
                    Customer_email = "dummyuser1@gmail.com",
                    Customer_firstname = "User",
                    Customer_lastname = "User",
                    Customer_mobile = "0000000000",
                    Customer_password = "Gmg2qL6wsnYTPyj2MyzYhwDQVNgcxwoqGagqw1G1GqQ=",
                    Customer_status = true
                }
             );


            modelBuilder.Entity<Customer>().HasData(
                     new Customer
                     {
                         Customer_id = 3,
                         Customer_email = "dummyuser2@gmail.com",
                         Customer_firstname = "User",
                         Customer_lastname = "User",
                         Customer_mobile = "0000000000",
                         Customer_password = "Gmg2qL6wsnYTPyj2MyzYhwDQVNgcxwoqGagqw1G1GqQ=",
                         Customer_status = true
                     }
                  );
            modelBuilder.Entity<Product>().HasData(
                    new Product
                    {   Product_id=1,
                        Product_name = "Dummy one",
                        Product_category = "Headphones",
                        Product_quantity = 10,
                        Product_price = 499,
                    }

                );
            modelBuilder.Entity<Product>().HasData(
             new Product
             {
                 Product_id=2,
                 Product_name = "Dummy two",
                 Product_category = "Headphones",
                 Product_quantity = 10,
                 Product_price = 899,
             }

         );

            modelBuilder.Entity<Customer>().HasData(
            new Customer
            {
                Customer_id = 4,
                Customer_email = "user1@gmail.com",
                Customer_firstname = "User",
                Customer_lastname = "User",
                Customer_mobile = "0000000000",
                Customer_password = "Gmg2qL6wsnYTPyj2MyzYhwDQVNgcxwoqGagqw1G1GqQ=",
                Customer_status = true
            }

          );

        }



        public virtual DbSet<Customer> Customers { get; set; }
        public virtual DbSet<Order> Orders { get; set; }
        public virtual DbSet<Product> Products { get; set; }
        public virtual DbSet<OrderProduct> OrderProducts { get; set; }
    }
}
