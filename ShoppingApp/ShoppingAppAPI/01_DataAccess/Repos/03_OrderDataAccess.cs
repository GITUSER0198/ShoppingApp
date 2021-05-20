using _01_DataAccess.ContractOfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace _01_DataAccess.Repos
{
   public class OrderDataAccess:IOrderDataAccess
    {
        #region Constructor
        private ShoppingAppEntities db;
        public OrderDataAccess()
        {
            db = new ShoppingAppEntities();
        }
        #endregion

      
        #region GetOrderDetails
        /// <summary>
        /// returns DbSet of order details
        /// </summary>
        /// <returns></returns>
        public IList<OrderProduct> GetOrderDetails()
        {
            return db.OrderProducts.ToList();
        }
        #endregion

        #region GetOrders
        /// <summary>
        /// returns order list
        /// </summary>
        /// <returns></returns>
        public IList<Order> GetOrders()
        {
            return db.Orders.FromSql("GetOrders").ToList();
          
        }
        #endregion
        #region CreateOrder
        /// <summary>
        /// adds a new order
        /// </summary>
        /// <param name="order"></param>
        /// <returns></returns>
        public int CreateOrder(Order order, IList<OrderProduct> orderDetails)
        {
            db.Orders.Add(order);
            db.SaveChanges();
            int orderID = order.Order_id;
            foreach (OrderProduct orderDetail in orderDetails)
            {
                Product product = db.Products.FirstOrDefault(p => p.Product_id == orderDetail.Product_id);
                product.Product_quantity = product.Product_quantity - orderDetail.Product_qty;
                orderDetail.OrderID = orderID;
                db.OrderProducts.Add(orderDetail);
                db.SaveChanges();
            }

            return order.Order_id;
        }
        #endregion
    }
}
