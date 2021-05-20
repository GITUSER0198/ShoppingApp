using _01_DataAccess.ContractOfDataAccess;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.IO;
using System.Linq;
using System.Text;

namespace _01_DataAccess
{
   public class ProductDataAccess: IProductDataAccess
    {

        #region Constructor
        private ShoppingAppEntities db;
        public ProductDataAccess()
        {
            db = new ShoppingAppEntities();
        }
        #endregion

        #region GetProducts
        /// <summary>
        /// Returns list of existing products
        /// </summary>
        /// <returns></returns>
        public List<Product> GetProducts()
        {
            return db.Products.FromSql("GetProducts").ToList();
        }
        #endregion

        #region AddProduct
        /// <summary>
        /// Add new product to database
        /// </summary>
        /// <param name="product"></param>
        /// <returns></returns>
        public int AddProduct(Product product)
        {
       
            return db.Database.ExecuteSqlCommand("EXEC InsertProduct @Product_name," +
                "@Product_category," +
                "@Product_quantity, " +
                "@Product_price," +
                "@Product_Image_Name," +
                "@Product_Image," +
                "@Product_description ",
                new SqlParameter("@Product_name", product.Product_name ?? (object)DBNull.Value),
                new SqlParameter("@Product_category", product.Product_category ?? (object)DBNull.Value),
                new SqlParameter("@Product_quantity", product.Product_quantity ?? (object)DBNull.Value),
                new SqlParameter("@Product_price", product.Product_price ?? (object)DBNull.Value),
                new SqlParameter("@Product_Image_Name", product.Product_Image_Name ?? (object)DBNull.Value),
                new SqlParameter("@Product_Image", product.Product_Image ?? new byte[] { }),
                new SqlParameter("@Product_description",product.Product_description ?? (object)DBNull.Value));


        }
        #endregion

        # region GetProduct
        /// <summary>
        /// Find and return product
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public Product GetProduct(int id)
        {
            var product = db.Products.FromSql("EXEC GetProduct {0}", id).ToList();
            return product[0];
        }

        #endregion

        #region DeleteProduct
        /// <summary>
        /// delete product from database
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public int DeleteProduct(int id)
        {
            return db.Database.ExecuteSqlCommand("EXEC DeleteProduct @Product_id",
            new SqlParameter("@Product_id", id));

        }

        #endregion

        #region EditProduct
        /// <summary>
        /// Edit product details in database.
        /// </summary>
        /// <param name="product"></param>
        /// <returns></returns>
        public int EditProduct(IProduct product)
        {
            var productOBJ = db.Products.FirstOrDefault(p=>p.Product_id==product.Product_id);

            if (productOBJ != null)
            {
                productOBJ.Product_category = product.Product_category;
                productOBJ.Product_description = product.Product_description;
                productOBJ.Product_Image = product.Product_Image;
                productOBJ.Product_name = product.Product_name;
                productOBJ.Product_price = product.Product_price;
                productOBJ.Product_quantity = product.Product_quantity;
                productOBJ.Product_Image_Name = product.Product_Image_Name;
                db.SaveChanges();

                return 1;
            }
            else
            {
                return 0;

            }
        }
        #endregion
  
     


    }
}
