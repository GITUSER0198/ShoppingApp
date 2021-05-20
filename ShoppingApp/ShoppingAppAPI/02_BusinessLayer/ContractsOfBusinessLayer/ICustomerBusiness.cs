using _04_Shared;
using _04_Shared.DTO_Classes;
using _04_Shared.Interfaces.DTO;
using _04_Shared.Interfaces.Others;
using System;
using System.Collections.Generic;
using System.Text;

namespace _02_BusinessLayer
{
    public interface ICustomerBusiness
    {  
        /// <summary>
        /// adds a new customer
        /// </summary>
        /// <param name="customerDTO"></param>
        /// <returns></returns>
        ICustomMessage RegisterCustomer(ICustomerDTO customerDTO);
        /// <summary>
        /// returns list of all customers 
        /// </summary>
        /// <returns></returns>
        IList<ICustomerDTO> GetAllCustomers();
        /// <summary>
        /// Blocks a customer by changing Customer_status to false
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        int BlockCustomer(int id);
        /// <summary>
        /// UnBlocks a customer by changing Customer_status to true
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        int UnBlockCustomer(int id);
        /// <summary>
        /// Checks if customer exists in db. Returns true if customer is present
        /// </summary>
        /// <param name="customerDTO"></param>
        /// <returns></returns>
        ICustomerDTO FindCustomer(ICustomerDTO customerDTO);
        /// <summary>
        /// Check is user can login 
        /// </summary>
        /// <param name="customerObject"></param>
        /// <returns></returns>
        ICustomMessage ValidateAuthentication(ICustomerDTO customerObject);
        /// <summary>
        /// Gets customer id based on email
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        int GetCustomerID(string email);

    }
}
