using _01_DataAccess.ContractOfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace _01_DataAccess
{
    public class CustomerDataAccess:ICustomerDataAccess
    {
        #region Constructor
        private ShoppingAppEntities db;
        public CustomerDataAccess()
        {
            db = new ShoppingAppEntities();
        }
        #endregion

        #region GetCustomers
        /// <summary>s
        /// Returns list of existing customers
        /// </summary>
        /// <returns></returns>
        public IList<Customer> GetCustomers()
        {
            return db.Customers.FromSql("GetCustomers").ToList();
        }

        #endregion

        #region AddCustomer
        /// <summary>
        /// Add new customer to database
        /// </summary>
        /// <param name="customer"></param>
        /// <returns></returns>
        public int AddCustomer(ICustomer customer)
        {
           return db.Database.ExecuteSqlCommand("EXEC InsertCustomer @Customer_email," +
           "@Customer_password,@Customer_firstname,@Customer_lastname, @Customer_mobile," +
           "@Customer_status",
           new SqlParameter("@Customer_email", customer.Customer_email),
           new SqlParameter("@Customer_password", customer.Customer_password),
           new SqlParameter("@Customer_firstname", customer.Customer_firstname),
           new SqlParameter("@Customer_lastname", customer.Customer_lastname),
           new SqlParameter("@Customer_mobile", customer.Customer_mobile),
           new SqlParameter("@Customer_status", customer.Customer_status));
                
        }
        #endregion

        #region FindCustomer
        /// <summary>
        /// Find customer in database
        /// </summary>
        /// <param name="ID"></param>
        /// <returns></returns>
        public ICustomer FindCustomer(int ID)
        {
            var customer =db.Customers.FromSql("EXEC GetCustomer {0}",ID).ToList();
            return customer[0];
           // return db.Customers.Find(ID);

        }
        #endregion

        #region EditCustomer
        /// <summary>
        /// Edit customer details in database.
        /// </summary>
        /// <param name="customer"></param>
        /// <returns></returns>
        public int EditCustomer(ICustomer customer)
        {

            var customerObj = db.Customers.Find(customer.Customer_id);

            if (customerObj != null)
            {
                customerObj.Customer_email = customer.Customer_email;
                customerObj.Customer_firstname = customer.Customer_firstname;
                customerObj.Customer_lastname = customer.Customer_lastname;
                customerObj.Customer_mobile = customer.Customer_mobile;
                customerObj.Customer_status = customer.Customer_status;
                customerObj.Orders = customer.Orders;
                db.SaveChanges();

                return 1;
            }
            else
            {
                return 0;

            }
        }
        #endregion
    }

}
