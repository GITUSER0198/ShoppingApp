using _02_BusinessLayer;
using _04_Shared;
using _04_Shared.DTO_Classes;
using _04_Shared.Interfaces.DTO;
using _04_Shared.Interfaces.Others;
using _Presentation.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication1.Controllers
{
    [Route("api/auth")]
    [ApiController]
    public class AuthController : ControllerBase
    {

        #region Constructor
       private readonly ICustomerBusiness _customerBusiness;
        
        public AuthController(ICustomerBusiness customerBusiness)
        {
            this._customerBusiness = customerBusiness;
        }

        #endregion

        #region Login
        [HttpPost, Route("login")]
        public IActionResult Login([FromBody]CustomerDTO customer)
        {
            ICustomMessage customMessage= new CustomMessage();

            if (customer == null)
            {
                return BadRequest("Invalid client request");
            }

            customMessage = _customerBusiness.ValidateAuthentication(customer);
            if(customMessage.Message=="Success")
            {
               
                    var tokenString = GetJwtTokenString(customer);
                    return Ok(new { Token = tokenString, Customer_id = _customerBusiness.GetCustomerID(customer.Customer_email), Email = customer.Customer_email });
            }
            return BadRequest(customMessage);

        }
        #endregion

        #region Register
        [HttpPost, Route("register")]
        public IActionResult Register([FromBody]CustomerDTO model)
        {
            ICustomMessage customMessage = new CustomMessage();

            customMessage = _customerBusiness.RegisterCustomer(model);
            if(!customMessage.Message.Equals("Customer is already registered"))
            {
                customMessage = _customerBusiness.ValidateAuthentication(model);
                if (customMessage.Message == "Success")
                {

                    var tokenString = GetJwtTokenString(model);
                    return Ok(new { Token = tokenString, Email = model.Customer_email, Customer_id = _customerBusiness.GetCustomerID(model.Customer_email), customMessage, code = 1 });
                }
            }
          
            return Ok(customMessage);
        }

        #endregion

  


        #region private methods


        private SymmetricSecurityKey GetSecretKey()
        {
            return new SymmetricSecurityKey(Encoding.UTF8.GetBytes("secretKey@112345"));
        }

        private SigningCredentials GetSigninCredentials()
        {

            return new SigningCredentials(GetSecretKey(), SecurityAlgorithms.HmacSha256);
        }
        
       
        public string GetJwtTokenString(CustomerDTO customer)
        {
           
            var signingCredentials = GetSigninCredentials();

           
            if (CheckAdmin(customer.Customer_email))
            {
               var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name,customer.Customer_email),
                    new Claim(ClaimTypes.Role,"Admin")

                };
            }
            else
            {
               var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name,customer.Customer_email)
                };
            }
            var tokenOptions = new JwtSecurityToken(
                issuer: "http://localhost:4200",
                audience: "http://localhost:4200",
                claims: new List<Claim>(),
                expires: DateTime.Now.AddMinutes(60),
                signingCredentials: signingCredentials
                );

            var tokenString = new JwtSecurityTokenHandler().WriteToken(tokenOptions);

            return tokenString;
        }

        private bool CheckAdmin(string email)
        {
            if (email == "admin@gmail.com")
            {
                return true;
            }
            return false;
        }


        #endregion
    }
}