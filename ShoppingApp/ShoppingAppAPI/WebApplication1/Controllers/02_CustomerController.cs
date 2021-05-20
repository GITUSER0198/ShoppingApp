using _02_BusinessLayer;
using _04_Shared.DTO_Classes;
using _04_Shared.Interfaces.DTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace _03_Presentation.Controllers
{
    [Route("api/customer")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        #region Constructor
        private readonly ICustomerBusiness _customerBusiness;
        public CustomerController(ICustomerBusiness customerBusiness)
        {
            this._customerBusiness=customerBusiness;
        }
        #endregion

        #region AllCustomers
        [HttpGet]
        [Route("allcustomerlist")]
        [Authorize]
        public IList<ICustomerDTO> AllCustomers()
        {
            try
            {
                return _customerBusiness.GetAllCustomers(); 
            }
            catch (Exception)
            {
                throw;
            }

        }
        #endregion

        #region BlockCustomer
        [HttpPost]
        [Route("blockcustomer")]
        [Authorize]
        public IActionResult BlockCustomer([FromBody]int id)
        {
            try
            {
                return Ok(_customerBusiness.BlockCustomer(id));
            }
            catch (Exception)
            {
                throw;
            }

        }
        #endregion

        #region UnBlockCustomer
        [HttpPost]
        [Route("unblockcustomer")]
        [Authorize]
        public IActionResult UnBlockCustomer([FromBody]int id)
        {
            try
            {
                return Ok(_customerBusiness.UnBlockCustomer(id));
            }
            catch (Exception)
            {
                throw;
            }

        }
        #endregion
    }
}