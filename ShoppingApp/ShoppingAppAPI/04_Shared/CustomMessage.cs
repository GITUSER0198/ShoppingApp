using _04_Shared.Interfaces.Others;
using System;
using System.Collections.Generic;
using System.Text;

namespace _04_Shared
{
    public class CustomMessage:ICustomMessage
    {
        public int Code { get; set; }
        public string  Message { get; set; }
    }

}
