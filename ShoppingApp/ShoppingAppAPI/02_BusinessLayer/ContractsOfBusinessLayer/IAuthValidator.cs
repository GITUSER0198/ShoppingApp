using _04_Shared.Interfaces.DTO;
using _04_Shared.Interfaces.Others;
using System;
using System.Collections.Generic;
using System.Text;

namespace _02_BusinessLayer.ContractsOfBusinessLayer
{
    public interface IAuthValidator
    {

        /// <summary>
        /// Check is user can login 
        /// </summary>
        /// <param name="customerObject"></param>
        /// <returns></returns>
        ICustomMessage ValidateAuthentication(ICustomerDTO customerObject);
    }
}
