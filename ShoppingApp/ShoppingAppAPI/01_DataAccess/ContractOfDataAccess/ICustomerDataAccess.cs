using _01_DataAccess.ContractOfDataAccess;
using System;
using System.Collections.Generic;
using System.Text;

namespace _01_DataAccess
{
    public interface ICustomerDataAccess
    {
        /// <summary>
        /// Returns list of existing customers
        /// </summary>
        /// <returns></returns>
        IList<Customer> GetCustomers();

        /// <summary>
        /// Add new customer to database
        /// </summary>
        /// <param name="customer"></param>
        /// <returns></returns>
        int AddCustomer(ICustomer customer);

        /// <summary>
        /// Find customer in database
        /// </summary>
        /// <param name="ID"></param>
        /// <returns></returns>
        ICustomer FindCustomer(int ID);

        /// <summary>
        /// Edit customer details in database.
        /// </summary>
        /// <param name="customer"></param>
        /// <returns></returns>
        int EditCustomer(ICustomer customer);

    }
}
