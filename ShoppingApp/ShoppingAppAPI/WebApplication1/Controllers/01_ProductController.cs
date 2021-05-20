using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using _02_BusinessLayer;
using _04_Shared.DTO_Classes;
using _04_Shared.Interfaces.DTO;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace _03_Presentation.Controllers
{
    [Route("api/product")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        #region Constructor
        private readonly IProductBusiness _productBusiness;

        public ProductController(IProductBusiness productBusiness)
        {
            this._productBusiness = productBusiness;
        }
        #endregion

        #region GetProduct
        [Route("getproduct/{id}")]
        [HttpGet]
        [Authorize]
        public IProductDTO GetProduct(int id)
        {

            return _productBusiness.GetProductById(id);
        }
        #endregion

        #region GetAllProducts
        [Route("allproducts")]
        [HttpGet]
        public IList<IProductDTO> GetAllProducts()
        {
            return _productBusiness.GetAllProducts();
        }
        #endregion

        #region DeleteProductDetails
        [Route("deleteproduct/{id}")]
        [HttpDelete]
        [Authorize]
        public int DeleteProductDetails(int id)
        {

            return _productBusiness.DeleteProduct(id);
        }
        #endregion

        #region AddProduct
        [Route("addproduct")]
        [HttpPost]
        [Authorize]
        public ActionResult<string> AddProduct()
        {
            var data = HttpContext.Request.Form;
            var file = HttpContext.Request.Form.Files["Image"];

            IProductDTO productDTO = new ProductDTO();
            productDTO.Product_name = data["Product_name"];
            productDTO.Product_category = data["Product_category"];
            productDTO.Product_quantity = Convert.ToInt32(data["Product_quantity"]);
            productDTO.Product_price = Convert.ToDouble(data["Product_price"]);
            productDTO.Product_description = data["Product_description"];
            

            productDTO.Image = file;

            _productBusiness.AddProduct(productDTO);
            return Ok(new { str = "success" });
        }
        #endregion

        #region EditProduct
        [Route("editproduct")]
        [HttpPost]
        [Authorize]
        public ActionResult<string> EditProduct()
        {
            var data = HttpContext.Request.Form;
            var file = HttpContext.Request.Form.Files["Image"];

            IProductDTO productDTO = new ProductDTO();
            productDTO.Product_id = Convert.ToInt32(data["Product_id"]);
            productDTO.Product_name = data["Product_name"];
            productDTO.Product_category = data["Product_category"];
            productDTO.Product_quantity = Convert.ToInt32(data["Product_quantity"]);
            productDTO.Product_price = Convert.ToDouble(data["Product_price"]);
            productDTO.Product_description = data["Product_description"];
            productDTO.Image = file;

            _productBusiness.EditProduct(productDTO);
            return Ok(new { str = "success" });
        }
        #endregion

    }
}