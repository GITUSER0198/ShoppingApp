using _01_DataAccess;
using _01_DataAccess.ContractOfDataAccess;
using _04_Shared.DTO_Classes;
using _04_Shared.Interfaces.DTO;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using static System.Net.Mime.MediaTypeNames;

namespace _02_BusinessLayer
{
    public class ProductBusiness:IProductBusiness
    {

        #region Constructor
        private readonly IProductDataAccess _productDataAccess;

        public ProductBusiness(IProductDataAccess productDataAccess)
        {
            this._productDataAccess = productDataAccess;

        }
        #endregion

        #region GetAllProducts
        /// <summary>
        /// return list of all products
        /// </summary>
        /// <returns></returns>
        public IList<IProductDTO> GetAllProducts()
        {

            var config = new MapperConfiguration(cfg => cfg.CreateMap<IProduct, IProductDTO>());
            var mapper = config.CreateMapper();
            return mapper.Map<IList<IProductDTO>>(_productDataAccess.GetProducts());

        }
        #endregion

        #region DeleteProduct
        /// <summary>
        /// delete a product from database
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public int DeleteProduct(int id)
        {
            return _productDataAccess.DeleteProduct(id);
        }
        #endregion

        #region EditProduct
        /// <summary>
        /// Edit product from database
        /// </summary>
        /// <param name="productDTO"></param>
        /// <returns></returns>
        public int EditProduct(IProductDTO productDTO)
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<IProductDTO, IProduct>());
            var mapper = config.CreateMapper();
            productDTO = CheckAndUpdateImage(productDTO);
            return _productDataAccess.EditProduct(mapper.Map<IProduct>(productDTO));
        }
        #endregion

        #region GetProductById
        /// <summary>
        /// Get product details with id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public IProductDTO GetProductById(int id)
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<IProduct, IProductDTO>());
            var mapper = config.CreateMapper();
            IProduct product = _productDataAccess.GetProduct(id);

            return mapper.Map<IProductDTO>(_productDataAccess.GetProduct(id));

        }
        #endregion


        #region AddProduct
        /// <summary>
        /// add a product to database
        /// </summary>
        /// <param name="productDTO"></param>
        /// <returns></returns>
        public int AddProduct(IProductDTO productDTO)
        {
            var config = new MapperConfiguration(cfg => cfg.CreateMap<ProductDTO, Product>());
            var mapper = config.CreateMapper();
            productDTO = SaveImage(productDTO);
            return _productDataAccess.AddProduct(mapper.Map<Product>(productDTO));
        }
        #endregion

        #region Private methods
        #region CheckAndUpdateImage
        /// <summary>
        /// Check if new image is present in dto it will update image in database
        /// </summary>
        /// <param name="productDTO"></param>
        /// <returns></returns>
        private IProductDTO CheckAndUpdateImage(IProductDTO productDTO)
        {
            if(productDTO.Image==null)
            {
                var oldProduct = GetProductById(productDTO.Product_id);
                if(oldProduct!=null)
                {
                    productDTO.Product_Image = oldProduct.Product_Image;
                    productDTO.Product_Image_Name = oldProduct.Product_Image_Name;
                }
            }
            else
            {
                productDTO = SaveImage(productDTO);
            }
            return productDTO;
        }
        #endregion

        #region SaveImage
        /// <summary>
        /// Saves product image to folder.
        /// </summary>
        /// <param name="productDTO"></param>
        /// <returns></returns>
        private IProductDTO SaveImage(IProductDTO productDTO)
        {
   
            if (productDTO.Image != null)
            {
                using (var ms = new MemoryStream())
                {
                    productDTO.Image.CopyTo(ms);
                    productDTO.Product_Image = ms.ToArray();
                }
            }
            if (productDTO.Image!=null)
                {
                    productDTO.Product_Image_Name = $"{productDTO.Product_name}_pic.png";
                }
                
                return productDTO;

        }
        #endregion
        #endregion

    }
}
