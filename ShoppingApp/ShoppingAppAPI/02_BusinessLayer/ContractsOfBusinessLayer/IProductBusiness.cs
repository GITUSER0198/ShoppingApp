using _04_Shared.DTO_Classes;
using _04_Shared.Interfaces.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace _02_BusinessLayer
{
    public interface IProductBusiness
    {
        /// <summary>
        /// return list of all products
        /// </summary>
        /// <returns></returns>
        IList<IProductDTO> GetAllProducts();
        /// <summary>
        /// add a product to database
        /// </summary>
        /// <param name="productDTO"></param>
        /// <returns></returns>
        int AddProduct(IProductDTO productDTO);
        /// <summary>
        /// delete a product from database
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        int DeleteProduct(int id);
        /// <summary>
        /// Edit product from database
        /// </summary>
        /// <param name="productDTO"></param>
        /// <returns></returns>
        int EditProduct(IProductDTO productDTO);
      
        /// <summary>
        /// Get product details with id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        IProductDTO GetProductById(int id);
    }
}
