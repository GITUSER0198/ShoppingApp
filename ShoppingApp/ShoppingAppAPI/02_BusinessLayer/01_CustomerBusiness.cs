using _01_DataAccess;
using _01_DataAccess.ContractOfDataAccess;
using _02_BusinessLayer.Others;
using _04_Shared;
using _04_Shared.DTO_Classes;
using _04_Shared.Interfaces.DTO;
using _04_Shared.Interfaces.Others;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace _02_BusinessLayer
{
    public class CustomerBusiness : ICustomerBusiness
    {
        #region constructor 
        private readonly ICustomerDataAccess _db;

        public CustomerBusiness(ICustomerDataAccess db)
        {
            this._db = db;
        }

        #endregion

        #region GetAllCustomers
        /// <summary>
        /// returns list of all customers 
        /// </summary>
        /// <returns></returns>
        public IList<ICustomerDTO> GetAllCustomers()
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<ICustomer, ICustomerDTO>());
            var mapper = new Mapper(config);

            return mapper.Map<List<ICustomerDTO>>(_db.GetCustomers());

        }
        #endregion

        #region BlockCustomer
        /// <summary>
        /// Blocks a customer by changing Customer_status to false
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public int BlockCustomer(int id)
        {
            var customer = _db.FindCustomer(id);
            customer.Customer_status = false;
            return _db.EditCustomer(customer); 
        }

        #endregion

        #region UnBlockCustomer
        /// <summary>
        /// UnBlocks a customer by changing Customer_status to true
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public int UnBlockCustomer(int id)
        {
            var customer = _db.FindCustomer(id);
            customer.Customer_status = true;
            return _db.EditCustomer(customer);
        }

        #endregion

        #region FindCustomer
        /// <summary>
        /// Checks if customer exists in db. Returns true if customer is present
        /// </summary>
        /// <param name="customerDTO"></param>
        /// <returns></returns>
        public ICustomerDTO FindCustomer(ICustomerDTO customerDTO)
        {
            var customers = GetAllCustomers();
            var customer = customers.FirstOrDefault(c => c.Customer_email == customerDTO.Customer_email||c.Customer_mobile == customerDTO.Customer_mobile);
            return customer;
        }
        #endregion

        #region ValidateAuthentication
        /// <summary>
        /// Check is user can login 
        /// </summary>
        /// <param name="customerObject"></param>
        /// <returns></returns>
        public ICustomMessage ValidateAuthentication(ICustomerDTO customerObject)
        {
            ICustomMessage customMessage = new CustomMessage();
            customMessage = CheckBlocked(customerObject);
            IList<Customer> customers = _db.GetCustomers();
            if (customMessage.Message == "Customer is active")
            {
                var check = Encryption.Encrypt(customerObject.Customer_password);
                var customer = customers.FirstOrDefault(x => x.Customer_email == customerObject.Customer_email && x.Customer_password == Encryption.Encrypt(customerObject.Customer_password));
                if (customer != null)
                {
                    customMessage.Message = "Success";
                }
                else
                {
                    customMessage.Message = "Wrong username password";
                }
            }

            return customMessage;
        }

        #endregion

        #region RegisterCustomer
        /// <summary>
        /// adds a new customer
        /// </summary>
        /// <param name="customerDTO"></param>
        /// <returns></returns>
        public ICustomMessage RegisterCustomer(ICustomerDTO customerDTO)
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<Customer, CustomerDTO>());
            var mapper = config.CreateMapper();

            ICustomMessage msg = new CustomMessage();

            IList<Customer> customers = _db.GetCustomers();

            if (FindCustomer(customerDTO) != null)
            {
                msg.Message = "Customer is already registered";
                return msg;
            }
            var customer = new Customer
            {
                Customer_email = customerDTO.Customer_email,
                Customer_firstname = customerDTO.Customer_firstname,
                Customer_lastname = customerDTO.Customer_lastname,
                Customer_mobile = customerDTO.Customer_mobile,
                Customer_password =Encryption.Encrypt(customerDTO.Customer_password),
                Customer_status = customerDTO.Customer_status
            };

            msg.Code = _db.AddCustomer(customer);
            if (msg.Code >= 0)
            {
                msg.Message = "User added";

            }
            else
            {
                msg.Message = "error in adding user";
            }
            return msg;
        }

        #endregion

        #region 
        /// <summary>
        /// Gets customer id based on email
        /// </summary>
        /// <param name="email"></param>
        /// <returns></returns>
        public int GetCustomerID(string email)
        {
            IList<Customer> customers = _db.GetCustomers();
            ICustomer customer = customers.FirstOrDefault(c => c.Customer_email == email);
            return customer.Customer_id;

        }
        #endregion

        #region private methods

        public ICustomMessage CheckBlocked(ICustomerDTO customerDTO)
        {
            ICustomMessage customMessage = new CustomMessage();

            var customer = FindCustomer(customerDTO);
            if(customer!=null)
            {
                if (customer.Customer_status == false)
                {
                    customMessage.Code = 1;
                    customMessage.Message = "Customer is blocked";
                }
                else
                {
                    customMessage.Code = 1;
                    customMessage.Message = "Customer is active";

                }

            }
            else
            {
                customMessage.Message = "Customer not found";
            }

            return customMessage;
        }
        
        #endregion


    }
}
