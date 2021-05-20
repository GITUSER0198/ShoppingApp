using _01_DataAccess.ContractOfDataAccess;
using System;
using System.Collections.Generic;
using System.Text;

namespace _01_DataAccess
{
   public interface IProductDataAccess
    {
        /// <summary>
        /// Returns list of existing products
        /// </summary>
        /// <returns></returns>
        List<Product> GetProducts();
        /// <summary>
        /// Add new product to database
        /// </summary>
        /// <param name="product"></param>
        /// <returns></returns>
        int AddProduct(Product product);


        /// <summary>
        /// delete product from database
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        int DeleteProduct(int id);


        /// <summary>
        /// Edit product details in database.
        /// </summary>
        /// <param name="product"></param>
        /// <returns></returns>
        int EditProduct(IProduct product);

        /// <summary>
        /// Find and return product
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        Product GetProduct(int id);

    }
}
