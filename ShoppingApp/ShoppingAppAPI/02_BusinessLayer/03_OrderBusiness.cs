using _01_DataAccess;
using _01_DataAccess.ContractOfDataAccess;
using _01_DataAccess.Repos;
using _04_Shared.DTO_Classes;
using _04_Shared.Interfaces.DTO;
using AutoMapper;
using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace _02_BusinessLayer
{
    public class OrderBusiness:IOrderBusiness
    {

        #region Constructor
        private readonly IOrderDataAccess _orderDataAccess;
        private readonly ICustomerBusiness _customerBusiness;

        public OrderBusiness(IOrderDataAccess orderDataAccess,ICustomerBusiness customerBusiness)
        {
            this._orderDataAccess =orderDataAccess;
            this._customerBusiness = customerBusiness;
        }
        #endregion

        #region GetOrders
        /// <summary>
        /// returns list of orders
        /// </summary>
        /// <returns></returns>
        public IList<IOrderDTO> GetOrders()
        {

            IList<Order> orders = _orderDataAccess.GetOrders();
            IList<IOrderDTO> ordersDTO = new List<IOrderDTO>();
            IList<ICustomerDTO> customers = _customerBusiness.GetAllCustomers();


            foreach (var order in orders)
            {
                IOrderDTO orderDTO = new OrderDTO();
                orderDTO.Customer_email = customers.Where(c => c.Customer_id == order.Customer_id).Select(c => c.Customer_email).First();
                orderDTO.Order_id = order.Order_id;
                orderDTO.Order_date = order.Order_date;
                orderDTO.Order_total = order.Order_total;
                orderDTO.Customer_id = order.Customer_id;
                orderDTO.Order_status = order.Order_status;
                orderDTO.Order_address = order.Order_address;
                orderDTO.Order_mobile = order.Order_mobile;
                orderDTO.Order_pincode = order.Order_pincode;
                ordersDTO.Add(orderDTO);
            }
            return ordersDTO;
        }
        #endregion

        /// <summary>
        /// returns list of order details where order id match
        /// </summary>
        /// <returns></returns>
        public IList<OrderProductDTO> GetOrderDetails(int id)
        {

            IList<OrderProduct> orderDetails = _orderDataAccess.GetOrderDetails().Where(o => o.OrderID == id).ToList();
            IList<OrderProductDTO> orderDetailsDTO=new List<OrderProductDTO>();

            foreach (var orderProduct in orderDetails)
            {
                OrderProductDTO orderProductDTO = new OrderProductDTO();
                orderProductDTO.ID = orderProduct.ID;
                orderProductDTO.OrderID = orderProduct.OrderID;
                orderProductDTO.Product_id = orderProduct.Product_id;
                orderProductDTO.Product_name = orderProduct.Product_name;
                orderProductDTO.Product_qty = orderProduct.Product_qty;
                orderDetailsDTO.Add(orderProductDTO);

            }

            return orderDetailsDTO;
        }

        #region CreateOrder
        /// <summary>
        /// Creates a new order 
        /// </summary>
        /// <param name="orderDTO"></param>
        /// <returns></returns>
        public int CreateOrder(IOrderDTO orderDTO,IList<OrderProductDTO> orderDetailsDTO)
        {

            var config = new MapperConfiguration(cfg => cfg.CreateMap<OrderProductDTO,OrderProduct>());
            var mapper = new Mapper(config);

            Order order = new Order();
            order.Customer_id =_customerBusiness.GetCustomerID(orderDTO.Customer_email);
            order.Order_date = DateTime.Now;
            order.Order_total = orderDTO.Order_total;
            order.Order_status = "To be delivered";
            order.Order_address = orderDTO.Order_address;
            order.Order_pincode = orderDTO.Order_pincode;
            order.Order_mobile = orderDTO.Order_mobile;

            IList<OrderProduct> orderDetails = mapper.Map<IList<OrderProduct>>(orderDetailsDTO);
            return _orderDataAccess.CreateOrder(order, orderDetails);

        }
        #endregion

       
    }
}
