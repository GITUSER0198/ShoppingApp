using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace _01_DataAccess.Repos
{
    public interface IOrderDataAccess
    {
        /// <summary>
        /// adds a new order
        /// </summary>
        /// <param name="order"></param>
        /// <returns></returns>
        int CreateOrder(Order order, IList<OrderProduct> orderDetails);
        /// <summary>
        /// returns order list
        /// </summary>
        /// <returns></returns>
        IList<Order> GetOrders();
        /// <summary>
        /// returns DbSet of order details
        /// </summary>
        /// <returns></returns>
        IList<OrderProduct> GetOrderDetails();
    }
}