using _04_Shared.DTO_Classes;
using _04_Shared.Interfaces.DTO;
using System.Collections.Generic;

namespace _02_BusinessLayer
{
    public interface IOrderBusiness
    {

        /// <summary>
        /// Creates a new order 
        /// </summary>
        /// <param name="orderDTO"></param>
        /// <returns></returns>
        int CreateOrder(IOrderDTO orderDTO, IList<OrderProductDTO> orderDetails);

        /// <summary>
        /// returns list of orders
        /// </summary>
        /// <returns></returns>
        IList<IOrderDTO> GetOrders();
        /// <summary>
        /// returns list of order details where order id match
        /// </summary>
        /// <returns></returns>
        IList<OrderProductDTO> GetOrderDetails(int id);
    }
}