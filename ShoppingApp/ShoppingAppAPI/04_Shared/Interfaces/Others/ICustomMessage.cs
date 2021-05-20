using System;
using System.Collections.Generic;
using System.Text;

namespace _04_Shared.Interfaces.Others
{
   public interface ICustomMessage
    {
         int Code { get; set; }
         string Message { get; set; }
    }
}
