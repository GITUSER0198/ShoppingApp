using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using _01_DataAccess.ContractOfDataAccess;
using _02_BusinessLayer;
using _04_Shared.DTO_Classes;
using _04_Shared.Interfaces.DTO;
using _Presentation.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Presentation.Models;

namespace _03_Presentation.Controllers
{
    [Route("api/order")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderBusiness _orderBusiness;
        public OrderController(IOrderBusiness orderBusiness)
        {
            this._orderBusiness =orderBusiness;
        }

        #region GetCustomerOrders
        [Route("getcustomerorders")]
        [HttpGet]
        public IList<IOrderDTO> GetCustomerOrders()
        {
            return _orderBusiness.GetOrders();
        }
        #endregion

        #region GetOrderDetails
        [Route("getorderdetails/{id}")]
        [HttpGet]
        public IList<OrderProductDTO> GetOrderDetails(int id)
        {

            return _orderBusiness.GetOrderDetails(id);
        }

        #endregion

        #region CreateOrder
        [Route("createorder")]
        [HttpPost]
        public IActionResult CreateOrder()
        {
            try
            {
                var data = HttpContext.Request.Form;
                  

                IOrderDTO orderDTO = new OrderDTO();
                orderDTO.Customer_email = data["user"];
                orderDTO.Order_total = Convert.ToInt32(data["cartTotal"]);
                orderDTO.Order_address = data["address"];
                orderDTO.Order_pincode = data["pincode"];
                orderDTO.Order_mobile = data["mobile"];
                IList<OrderProductDTO> orderDetails = GetOrderList(data);
                int result = _orderBusiness.CreateOrder(orderDTO,orderDetails);
                return Ok(new {  });
            }
            catch(Exception ex)
            {
                return Ok(new { error = ex });

            }

        }
        #endregion


        #region Private methods
        private IList<OrderProductDTO> GetOrderList(IFormCollection data)
        {
            IList<OrderProductDTO> orders = new List<OrderProductDTO>();

            for (int i = 0; i < Convert.ToInt32(data["ordersLength"]); i++)
            {
                OrderProductDTO order = new OrderProductDTO();
                order.Product_id = Int32.Parse(data["orders" + i + ".product_id"]);
                order.Product_qty = Convert.ToInt32(data["orders" + i + ".product_quantity"]);
                order.Product_name = data["orders" + i + ".product_name"];

                orders.Add(order);
            }
            return orders;
        }
        #endregion

    }
}