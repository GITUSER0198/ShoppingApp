(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\angular\server deployment\ShoppingAppAPI\ShoppingAppClient\src\main.ts */"zUnb");


/***/ }),

/***/ "0NPq":
/*!*************************************************************************************!*\
  !*** ./src/app/admin/product/listproducts/product-image/product-image.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ProductImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductImageComponent", function() { return ProductImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/product.service */ "mB2O");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");





class ProductImageComponent {
    constructor(productService) {
        this.productService = productService;
    }
    ngOnInit() {
        this.image = this.productService.image;
        console.log(this.image);
    }
}
ProductImageComponent.ɵfac = function ProductImageComponent_Factory(t) { return new (t || ProductImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"])); };
ProductImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductImageComponent, selectors: [["app-product-image"]], decls: 4, vars: 2, consts: [["mat-button", "", 1, "close-button", 3, "mat-dialog-close"], ["alt", "An Image", 2, "width", "200px", 3, "src"]], template: function ProductImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/jpeg;base64,", ctx.image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: [".close-button[_ngcontent-%COMP%]{\r\n  float: right;\r\n  top:-24px;\r\n  right:-24px;\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtaW1hZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osU0FBUztFQUNULFdBQVc7O0FBRWIiLCJmaWxlIjoicHJvZHVjdC1pbWFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5jbG9zZS1idXR0b257XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHRvcDotMjRweDtcclxuICByaWdodDotMjRweDtcclxuICBcclxufSJdfQ== */"] });


/***/ }),

/***/ "2bkT":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/shared-components/order-history/order-history.component.ts ***!
  \***********************************************************************************/
/*! exports provided: OrderHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHistoryComponent", function() { return OrderHistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/order.service */ "NuUg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nav/nav.component */ "NV/E");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function OrderHistoryComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderHistoryComponent_tr_16_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const order_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.getDetails(order_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "View Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.order_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 4, order_r1.order_date, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 7, order_r1.order_total, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.order_status);
} }
class OrderHistoryComponent {
    constructor(orderService, router) {
        this.orderService = orderService;
        this.router = router;
    }
    ngOnInit() {
        this.orderService.getOrders().then(res => {
            if (!res) {
                console.log(Error);
            }
            this.orderList = res;
            this.orderList = this.orderList.filter(res => {
                if (res.customer_id != null)
                    return res.customer_id == localStorage.getItem('Customer_id');
            });
            this.orderList = this.orderList.sort((order1, order2) => {
                return this.compareObjects(order1, order2, 'order_date');
            });
        });
    }
    getDetails(order) {
        this.orderService.order = order;
        this.orderService.orderId = order.order_id;
        this.router.navigate(['/orderdetails']);
    }
    compareObjects(object1, object2, key) {
        const obj1 = object1[key].toUpperCase();
        const obj2 = object2[key].toUpperCase();
        if (obj1 < obj2) {
            return 1;
        }
        if (obj1 > obj2) {
            return -1;
        }
        return 0;
    }
}
OrderHistoryComponent.ɵfac = function OrderHistoryComponent_Factory(t) { return new (t || OrderHistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
OrderHistoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderHistoryComponent, selectors: [["app-order-history"]], decls: 17, vars: 1, consts: [["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css", "rel", "stylesheet", "integrity", "sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6", "crossorigin", "anonymous"], [1, "table"], [1, "thead-dark", "table-primary"], ["scope", "col"], [4, "ngFor", "ngForOf"], [3, "click"]], template: function OrderHistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Order ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Order Date and Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Order Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Order Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, OrderHistoryComponent_tr_16_Template, 13, 10, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orderList);
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1oaXN0b3J5LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "85uD":
/*!************************************************************************************************************!*\
  !*** ./src/app/shared/shared-components/shopping-cart/product-list/product-item/product-item.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: ProductItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function() { return ProductItemComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _cart_cart_item_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../cart/cart-item/product-details/product-details.component */ "jPiV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/order.service */ "NuUg");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/product.service */ "mB2O");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ProductItemComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "data:image/jpeg;base64,", ctx_r0.productItem.product_Image, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ProductItemComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductItemComponent_span_11_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.handleAddToCart(ctx_r4.productItem); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProductItemComponent_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ProductItemComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Out of stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class ProductItemComponent {
    constructor(orderService, dialog, productService) {
        this.orderService = orderService;
        this.dialog = dialog;
        this.productService = productService;
    }
    ngOnInit() {
    }
    handleAddToCart(product) {
        this.orderService.addProductToCart(product);
    }
    viewDetails(productItem) {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        this.productService.product = productItem;
        this.dialog.open(_cart_cart_item_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_1__["ProductDetailsComponent"], { width: '40%', height: 'auto' });
    }
}
ProductItemComponent.ɵfac = function ProductItemComponent_Factory(t) { return new (t || ProductItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_3__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_4__["ProductService"])); };
ProductItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductItemComponent, selectors: [["app-product-item"]], inputs: { productItem: "productItem" }, decls: 16, vars: 9, consts: [[1, "card", "mb-4", "box-shadow", 2, "width", "210px", "height", "280px"], [4, "ngIf"], [1, "card-body"], [1, "text-muted"], [1, "card-text"], [1, "button-align"], ["type", "button", 1, "btn", "btn-sm", "btn-info", "product-btn", 3, "click"], ["style", "color: red; font-weight: ;", "class", "hcenter", 4, "ngIf"], ["alt", "Card image cap", 1, "card-img-top", 2, "width", "110px", "height", "120px", "margin-left", "30px", 3, "src"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "product-btn", "mr-1", 3, "click"], ["type", "button", "disabled", "", 1, "btn", "btn-sm", "product-btn", "mr-1", 2, "background-color", "gray"], [1, "hcenter", 2, "color", "red", "font-weight", ""]], template: function ProductItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProductItemComponent_span_1_Template, 2, 1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "small", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ProductItemComponent_span_11_Template, 3, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ProductItemComponent_span_12_Template, 3, 0, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProductItemComponent_Template_button_click_13_listener() { return ctx.viewDetails(ctx.productItem); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "View Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, ProductItemComponent_span_15_Template, 3, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.productItem.product_Image_Name != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](7, 6, ctx.productItem.product_price, "INR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.productItem.product_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.productItem.product_quantity != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.productItem.product_quantity == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.productItem.product_quantity == 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: [".product-btn[_ngcontent-%COMP%]{\r\n    font-size:small;\r\n}\r\n.button-align[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    \r\n}\r\n.hcenter[_ngcontent-%COMP%]\r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4Qjs7QUFFbEM7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsY0FBYztBQUNsQiIsImZpbGUiOiJwcm9kdWN0LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWJ0bntcclxuICAgIGZvbnQtc2l6ZTpzbWFsbDtcclxufVxyXG4uYnV0dG9uLWFsaWdue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIFxyXG59XHJcblxyXG4uaGNlbnRlclxyXG57XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59Il19 */"] });


/***/ }),

/***/ "9A/8":
/*!**********************************************************!*\
  !*** ./src/app/Authentication/auth/authguard.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthguardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardService", function() { return AuthguardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthguardService {
    constructor(jwtHelper, router) {
        this.jwtHelper = jwtHelper;
        this.router = router;
    }
    canActivate() {
        const token = localStorage.getItem("jwt");
        if (token && !this.jwtHelper.isTokenExpired(token)) {
            return true;
        }
        this.router.navigate(["/login"]);
        return false;
    }
}
AuthguardService.ɵfac = function AuthguardService_Factory(t) { return new (t || AuthguardService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthguardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthguardService, factory: AuthguardService.ɵfac });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared-components/nav/nav.component */ "NV/E");
/* harmony import */ var _shared_shared_components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared-components/shopping-cart/shopping-cart.component */ "tENs");





class HomeComponent {
    constructor(jwtHelper, router) {
        this.jwtHelper = jwtHelper;
        this.router = router;
    }
    ngOnInit() {
    }
    isUserAuthenticated() {
        const token = localStorage.getItem("jwt");
        if (token && !this.jwtHelper.isTokenExpired(token)) {
            return true;
        }
        else {
            return false;
        }
    }
    logOut() {
        localStorage.removeItem("jwt");
        localStorage.removeItem("userRoles");
        localStorage.removeItem("user");
        this.router.navigate(['/login']);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 6, vars: 0, consts: [["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css", "rel", "stylesheet", "integrity", "sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6", "crossorigin", "anonymous"], [1, "container"], [1, "row"], [1, "col"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-shopping-cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], _shared_shared_components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_4__["ShoppingCartComponent"]], styles: [".card[_ngcontent-%COMP%], .form-control[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%] {\r\n    border-radius: 0;\r\n  }\r\n  \r\n  .list-group-item[_ngcontent-%COMP%]:first-child {\r\n    border-top-left-radius: 0;\r\n    border-top-right-radius: 0;\r\n  }\r\n  \r\n  .list-group-item[_ngcontent-%COMP%]:last-child {\r\n    border-bottom-left-radius: 0;\r\n    border-bottom-right-radius: 0;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QiwwQkFBMEI7RUFDNUI7O0VBRUY7SUFDSSw0QkFBNEI7SUFDNUIsNkJBQTZCO0VBQy9CIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLCAuZm9ybS1jb250cm9sLCAuYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5saXN0LWdyb3VwLWl0ZW06Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG4gIH1cclxuICBcclxuLmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICB9XHJcbiJdfQ== */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Fmfc":
/*!*********************************************************!*\
  !*** ./src/app/Authentication/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/auth.service */ "IYfF");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _shared_shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared-components/nav/nav.component */ "NV/E");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");














function LoginComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter valid email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LoginComponent {
    constructor(router, http, authService, formBuilder, toaster) {
        this.router = router;
        this.http = http;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.toaster = toaster;
        // loginForm:FormGroup;
        this.invalidLogin = true;
        this.hide = true;
    }
    ngOnInit() {
    }
    onSubmit() {
        if (this.authService.loginForm.invalid) {
            return;
        }
        this.authService.login()
            .subscribe((res) => {
            const token = res.token;
            localStorage.setItem("jwt", token);
            localStorage.setItem("user", res.email);
            localStorage.setItem("Customer_id", res.customer_id);
            this.invalidLogin = false;
            if (localStorage.getItem('user') == 'admin@gmail.com') {
                this.router.navigate(["/admin"]);
            }
            else {
                this.router.navigate(["/"]);
            }
        }, err => {
            console.log(err);
            if (err.error.message == "Customer is blocked") {
                this.toaster.error("User is blocked");
            }
            else {
                this.toaster.error("Invalid details");
            }
        });
        //   this.http.post("http://localhost:52238/api/customer/login", credentials, {
        //   headers: new HttpHeaders({
        //     "Content-Type": "application/json"
        //   })
        // }).subscribe(response => {
        //   const token = (<any>response).token;
        //   localStorage.setItem("jwt", token);
        //   this.invalidLogin = false;
        //   this.router.navigate(["/"]);
        // }, err => {
        //   this.invalidLogin = true;
        // });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 21, vars: 7, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "main-wrapper"], [1, "box"], [1, "example-form", 3, "formGroup", "ngSubmit"], [2, "width", "23vw"], ["matInput", "", "placeholder", "Email", "formControlName", "Customer_email"], [4, "ngIf"], ["matInput", "", "placeholder", "Password", "formControlName", "password", 3, "type"], ["matSuffix", "", 3, "click"], ["mat-stroked-button", "", "color", "accent", "type", "submit", 1, "btn-block", "cyan", "lighten-1", 3, "disabled"], ["mat-stroked-button", "", "color", "accent", "routerLink", "/register", "type", "submit", 1, "btn-block", 2, "margin-top", "2%"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_mat_error_10_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LoginComponent_mat_error_11_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_mat_icon_click_14_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_mat_error_16_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.authService.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.loginForm.controls.Customer_email.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.loginForm.controls.Customer_email.hasError("email") && !ctx.authService.loginForm.controls.Customer_email.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.loginForm.controls.password.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.authService.loginForm.valid);
    } }, directives: [_shared_shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"]], styles: ["html[_ngcontent-%COMP%] { background:ghostwhite;}\r\n\r\n\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\nalign-items: center;\r\n}\r\n\r\n\r\n[_nghost-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: 100px 0px;\r\n  }\r\n\r\n\r\nbody[_ngcontent-%COMP%] {\r\n\tmin-height: 100vh;\r\n\tbackground-color: #e5e5e5;\r\n\tfont-family: 'Roboto', sans-serif;\r\n    margin: 40px 0;\r\n\r\n}\r\n\r\n\r\n.app-header[_ngcontent-%COMP%] {\r\n\tjustify-content: space-between;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tz-index: 2;\r\n\tbox-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);\r\n}\r\n\r\n\r\n.main-wrapper[_ngcontent-%COMP%] {\r\n\theight: 100%;\r\n}\r\n\r\n\r\n.positronx[_ngcontent-%COMP%] {\r\n\ttext-decoration: none;\r\n\tcolor: #ffffff;\r\n}\r\n\r\n\r\n.box[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\ttop: 0;\r\n\topacity: 1;\r\n\tfloat: left;\r\n\tpadding: 60px 50px 40px 50px;\r\n\twidth: 100%;\r\n\tbackground: #fff;\r\n\tborder-radius: 10px;\r\n\ttransform: scale(1);\r\n\t-webkit-transform: scale(1);\r\n\t-ms-transform: scale(1);\r\n\tz-index: 5;\r\n\tmax-width: 330px;\r\n}\r\n\r\n\r\n.box.back[_ngcontent-%COMP%] {\r\n\ttransform: scale(.95);\r\n\t-webkit-transform: scale(.95);\r\n\t-ms-transform: scale(.95);\r\n\ttop: -20px;\r\n\topacity: .8;\r\n\tz-index: -1;\r\n}\r\n\r\n\r\n.box[_ngcontent-%COMP%]:before {\r\n\tcontent: \"\";\r\n\twidth: 100%;\r\n\theight: 30px;\r\n\tborder-radius: 10px;\r\n\tposition: absolute;\r\n\ttop: -10px;\r\n\tbackground: rgba(255, 255, 255, .6);\r\n\tleft: 0;\r\n\ttransform: scale(.95);\r\n\t-webkit-transform: scale(.95);\r\n\t-ms-transform: scale(.95);\r\n\tz-index: -1;\r\n}\r\n\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   .example-form[_ngcontent-%COMP%] {\r\n\tmin-width: 100%;\r\n\tmax-width: 300px;\r\n\twidth: 100%;\r\n}\r\n\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%], .main-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n}\r\n\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n\twidth: 100%;\r\n\tdisplay: block;\r\n\tfont-weight: 700;\r\n}\r\n\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\r\n\tfont-size: 30px;\r\n\tmargin: 0;\r\n}\r\n\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\r\n\tpadding: 45px 70px 55px;\r\n}\r\n\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\r\n\tborder: 1px solid currentColor;\r\n\tline-height: 54px;\r\n\tbackground:#ffffff;\r\n}\r\n\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%]:hover{\r\n\tborder: 1px solid currentColor;\r\n\tline-height: 54px;\r\n}\r\n\r\n\r\n.main-wrapper[_ngcontent-%COMP%]   .mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\r\n\tpadding: 0.8375em 0;\r\n}\r\n\r\n\r\n.hcenter[_ngcontent-%COMP%] {\r\n  display: table;\r\n  margin: 0 auto;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxxQkFBcUIsQ0FBQzs7O0FBRzdCOztBQUVBLG1CQUFtQjtBQUNuQjs7O0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtFQUNuQjs7O0FBQ0Y7Q0FDQyxpQkFBaUI7Q0FDakIseUJBQXlCO0NBQ3pCLGlDQUFpQztJQUM5QixjQUFjOztBQUVsQjs7O0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIsZUFBZTtDQUNmLE1BQU07Q0FDTixPQUFPO0NBQ1AsUUFBUTtDQUNSLFVBQVU7Q0FDViw4R0FBOEc7QUFDL0c7OztBQUVBO0NBQ0MsWUFBWTtBQUNiOzs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQixjQUFjO0FBQ2Y7OztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixVQUFVO0NBQ1YsV0FBVztDQUNYLDRCQUE0QjtDQUM1QixXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsMkJBQTJCO0NBQzNCLHVCQUF1QjtDQUN2QixVQUFVO0NBQ1YsZ0JBQWdCO0FBQ2pCOzs7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQiw2QkFBNkI7Q0FDN0IseUJBQXlCO0NBQ3pCLFVBQVU7Q0FDVixXQUFXO0NBQ1gsV0FBVztBQUNaOzs7QUFHQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsWUFBWTtDQUNaLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLG1DQUFtQztDQUNuQyxPQUFPO0NBQ1AscUJBQXFCO0NBQ3JCLDZCQUE2QjtDQUM3Qix5QkFBeUI7Q0FDekIsV0FBVztBQUNaOzs7QUFFQTtDQUNDLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsV0FBVztBQUNaOzs7QUFFQTs7Q0FFQyxXQUFXO0FBQ1o7OztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCxjQUFjO0NBQ2QsZ0JBQWdCO0FBQ2pCOzs7QUFHQTtDQUNDLGVBQWU7Q0FDZixTQUFTO0FBQ1Y7OztBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCOzs7QUFFQTtDQUNDLDhCQUE4QjtDQUM5QixpQkFBaUI7Q0FDakIsa0JBQWtCO0FBQ25COzs7QUFDQTtDQUNDLDhCQUE4QjtDQUM5QixpQkFBaUI7QUFDbEI7OztBQUdBO0NBQ0MsbUJBQW1CO0FBQ3BCOzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0NBQ2YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwgeyBiYWNrZ3JvdW5kOmdob3N0d2hpdGU7fVxyXG5cclxuXHJcbmh0bWwsXHJcbmJvZHkge1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTAwcHggMHB4O1xyXG4gIH1cclxuYm9keSB7XHJcblx0bWluLWhlaWdodDogMTAwdmg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcclxuXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDQwcHggMDtcclxuXHJcbn1cclxuXHJcbi5hcHAtaGVhZGVyIHtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0cG9zaXRpb246IGZpeGVkO1xyXG5cdHRvcDogMDtcclxuXHRsZWZ0OiAwO1xyXG5cdHJpZ2h0OiAwO1xyXG5cdHotaW5kZXg6IDI7XHJcblx0Ym94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIC4xMik7XHJcbn1cclxuXHJcbi5tYWluLXdyYXBwZXIge1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnBvc2l0cm9ueCB7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uYm94IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0dG9wOiAwO1xyXG5cdG9wYWNpdHk6IDE7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0cGFkZGluZzogNjBweCA1MHB4IDQwcHggNTBweDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcblx0LW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XHJcblx0ei1pbmRleDogNTtcclxuXHRtYXgtd2lkdGg6IDMzMHB4O1xyXG59XHJcblxyXG4uYm94LmJhY2sge1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuXHQtbXMtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG5cdHRvcDogLTIwcHg7XHJcblx0b3BhY2l0eTogLjg7XHJcblx0ei1pbmRleDogLTE7XHJcbn1cclxuXHJcblxyXG4uYm94OmJlZm9yZSB7XHJcblx0Y29udGVudDogXCJcIjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAtMTBweDtcclxuXHRiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC42KTtcclxuXHRsZWZ0OiAwO1xyXG5cdHRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuXHQtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoLjk1KTtcclxuXHQtbXMtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG5cdHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4ubWFpbi13cmFwcGVyIC5leGFtcGxlLWZvcm0ge1xyXG5cdG1pbi13aWR0aDogMTAwJTtcclxuXHRtYXgtd2lkdGg6IDMwMHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWFpbi13cmFwcGVyIC5leGFtcGxlLWZ1bGwtd2lkdGgsXHJcbi5tYWluLXdyYXBwZXIgLmJ0bi1ibG9jayB7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYWluLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVyIHtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuXHJcbi5tYWluLXdyYXBwZXIgbWF0LWNhcmQtaGVhZGVyIG1hdC1jYXJkLXRpdGxlIHtcclxuXHRmb250LXNpemU6IDMwcHg7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubWFpbi13cmFwcGVyIC5tYXQtY2FyZCB7XHJcblx0cGFkZGluZzogNDVweCA3MHB4IDU1cHg7XHJcbn1cclxuXHJcbi5tYWluLXdyYXBwZXIgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xyXG5cdGxpbmUtaGVpZ2h0OiA1NHB4O1xyXG5cdGJhY2tncm91bmQ6I2ZmZmZmZjtcclxufVxyXG4ubWFpbi13cmFwcGVyIC5tYXQtc3Ryb2tlZC1idXR0b246aG92ZXJ7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgY3VycmVudENvbG9yO1xyXG5cdGxpbmUtaGVpZ2h0OiA1NHB4O1xyXG59XHJcblxyXG5cclxuLm1haW4td3JhcHBlciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuXHRwYWRkaW5nOiAwLjgzNzVlbSAwO1xyXG59XHJcblxyXG4uaGNlbnRlciB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiB9XHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "IYfF":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class CustomValidators {
    static passwordValid(control) {
        const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
        if (regex.test(control.value) && control.value !== null) {
            return null;
        }
        else {
            return { passwordInvalid: true };
        }
    }
    static passwordMatch(control) {
        const password = control.get("password").value;
        const confirmPassword = control.get("confirmPassword").value;
        if ((password === confirmPassword) && (password !== null && confirmPassword !== null)) {
            return null;
        }
        else {
            return { passwordNotMatch: true };
        }
    }
    static MatchPassword(control) {
        let parent = control.parent;
        if (parent) {
            let password = parent.get('password').value;
            let confirmPassword = control.value;
            if (password != confirmPassword) {
                return { ConfirmPassword: true };
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    }
}
class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.apiUrl = 'http://localhost:52238/api/auth';
        this.invalidLogin = true;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            Customer_email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, CustomValidators.passwordValid]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, CustomValidators.MatchPassword]),
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z]+')]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z]+')]),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[7-9][0-9]{9}')])
        });
    }
    register() {
        var body = {
            Customer_email: this.registerForm.value.email,
            Customer_password: this.registerForm.value.password,
            Customer_firstName: this.registerForm.value.firstName,
            Customer_lastName: this.registerForm.value.lastName,
            Customer_mobile: this.registerForm.value.mobile,
            Customer_status: true
        };
        this.username = this.registerForm.value.email;
        this.password = this.registerForm.value.password;
        return this.http.post(this.apiUrl + '/register', body, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Content-Type": "application/json"
            }) });
    }
    login() {
        var body = {
            Customer_email: this.loginForm.value.Customer_email,
            Customer_password: this.loginForm.value.password,
        };
        return this.http.post(this.apiUrl + '/login', body, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                "Content-Type": "application/json"
            }) });
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "MLpR":
/*!**********************************************************************!*\
  !*** ./src/app/admin/product/listproducts/listproducts.component.ts ***!
  \**********************************************************************/
/*! exports provided: ListproductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListproductsComponent", function() { return ListproductsComponent; });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _product_image_product_image_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-image/product-image.component */ "0NPq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/product.service */ "mB2O");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _shared_shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/shared-components/nav/nav.component */ "NV/E");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");













function ListproductsComponent_tr_31_span_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListproductsComponent_tr_31_span_13_Template_img_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.openImage(product_r1.product_Image); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "data:image/jpeg;base64,", product_r1.product_Image, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function ListproductsComponent_tr_31_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function ListproductsComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, ListproductsComponent_tr_31_span_13_Template, 4, 1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ListproductsComponent_tr_31_span_14_Template, 3, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListproductsComponent_tr_31_Template_a_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const product_r1 = ctx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.productService.deleteProduct(product_r1.product_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListproductsComponent_tr_31_Template_a_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const product_r1 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.populateForm(product_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r1.product_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r1.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r1.product_category);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r1.product_quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r1.product_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](product_r1.product_description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", product_r1.product_Image_Name != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", product_r1.product_Image_Name == null);
} }
class ListproductsComponent {
    constructor(productService, dialog, router, toaster, sanitizer) {
        this.productService = productService;
        this.dialog = dialog;
        this.router = router;
        this.toaster = toaster;
        this.sanitizer = sanitizer;
        this.selectedFile = null;
    }
    ngOnInit() {
        this.productModel = {
            Product_id: null,
            Product_name: null,
            Product_category: null,
            Product_Image: null,
            Product_description: null,
            Product_price: null,
            Product_quantity: null
        };
        this.productService.getProducts().then(res => {
            this.completeList = res;
            let objectURL = 'data:image/png;base64,' + this.completeList.product_Image;
            this.completeList.product_Image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
            this.productList = this.completeList;
        });
    }
    addProduct() {
        this.router.navigate(['/addproduct']);
    }
    populateForm(product) {
        this.productService.product = product;
        this.router.navigate(['/addproduct', { value: "edit" }]);
    }
    Search() {
        if (this.product_name == "") {
            this.ngOnInit();
        }
        else {
            this.productList = this.completeList.filter(res => {
                if (res.product_name != null)
                    return res.product_name.toLocaleLowerCase().match(this.product_name.toLocaleLowerCase());
            });
        }
    }
    logout() {
        localStorage.removeItem("jwt");
        localStorage.removeItem("user");
        location.reload();
    }
    openImage(image) {
        this.productService.image = image;
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        this.dialog.open(_product_image_product_image_component__WEBPACK_IMPORTED_MODULE_1__["ProductImageComponent"], dialogConfig);
    }
}
ListproductsComponent.ɵfac = function ListproductsComponent_Factory(t) { return new (t || ListproductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"])); };
ListproductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ListproductsComponent, selectors: [["app-listproducts"]], decls: 32, vars: 2, consts: [[1, "hcenter", 2, "width", "90%"], [2, "float", "right"], [1, "search"], ["name", "product_name", "type", "text", "placeholder", "Search . . .", 3, "ngModel", "ngModelChange"], [1, "table"], [4, "ngFor", "ngForOf"], [2, "width", "200px"], [4, "ngIf"], ["href", "javascript: void(0);", "title", "Delete", 3, "click"], [2, "color", "tomato", "font-size", "25px"], ["href", "javascript: void(0);", "title", "Edit", 3, "click"], [2, "color", "blue", "font-size", "25px", "position", "absolute", "margin-left", "1%"], ["href", "javascript:void(0)"], ["alt", "An Image", 2, "width", "30px", 3, "src", "click"], [2, "padding-top", "20px"]], template: function ListproductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "th", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ListproductsComponent_Template_input_ngModelChange_12_listener($event) { return ctx.product_name = $event; })("ngModelChange", function ListproductsComponent_Template_input_ngModelChange_12_listener() { return ctx.Search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Category");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Image");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, ListproductsComponent_tr_31_Template, 22, 8, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.product_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.productList);
    } }, directives: [_shared_shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"]], styles: ["nav[_ngcontent-%COMP%]{\r\n    background-color: #38547b;\r\n  }\r\n\r\n  \r\nh2[_ngcontent-%COMP%]{\r\n\r\n  text-decoration: underline;\r\n}\r\n\r\n  \r\n\r\n\r\n  \r\n*[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\n  \r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n  \r\n.flexbox[_ngcontent-%COMP%] {\r\n  background:rgb(253, 249, 249); \r\n  width: 100%;\r\n  height: 10%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n  \r\n.search[_ngcontent-%COMP%] {\r\n  margin: 20px;\r\n}\r\n\r\n  \r\n.search[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\r\n  font-weight: normal;\r\n}\r\n\r\n  \r\n.search[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%], .search[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\r\n  color: white;\r\n  margin-bottom: 15px;\r\n  text-shadow: 0 1px #0091c2;\r\n}\r\n\r\n  \r\n.search[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  position: relative;\r\n  filter: drop-shadow(0 1px #0091c2);\r\n}\r\n\r\n  \r\n.search[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  background: rgb(0, 0, 0);\r\n  width: 4px;\r\n  height: 20px;\r\n  position: absolute;\r\n  top: 40px;\r\n  right: 2px;\r\n  transform: rotate(135deg);\r\n}\r\n\r\n  \r\n.search[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\r\n  color: rgb(0, 0, 0);\r\n  font-size: 16px;\r\n  background: transparent;\r\n  width: 25px;\r\n  height: 25px;\r\n  padding: 10px;\r\n  border: solid 3px rgb(0, 0, 0);\r\n  outline: none;\r\n  border-radius: 35px;\r\n  transition: width 0.5s;\r\n}\r\n\r\n  \r\n.search[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]::placeholder {\r\n  color: #000000;\r\n  opacity: 0;\r\n  transition: opacity 150ms ease-out;\r\n}\r\n\r\n  \r\n.search[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:focus::placeholder {\r\n  opacity: 1;\r\n}\r\n\r\n  \r\n.search[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:focus, .search[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:not(:placeholder-shown) {\r\n  width: 250px;\r\n}\r\n\r\n  \r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{\r\n  padding: 15px 8px;\r\n}\r\n\r\n  \r\n.hcenter[_ngcontent-%COMP%] {\r\n  display: table;\r\n  margin: 0 auto;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Rwcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0VBQzNCOzs7QUFHRjs7RUFFRSwwQkFBMEI7QUFDNUI7OztBQUVBLFdBQVc7OztBQUdYO0VBQ0UsVUFBVTtFQUNWLFNBQVM7QUFDWDs7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7OztBQUVBOztFQUVFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsMEJBQTBCO0FBQzVCOzs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsa0NBQWtDO0FBQ3BDOzs7QUFFQTtFQUNFLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7OztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1Ysa0NBQWtDO0FBQ3BDOzs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7O0FBRUE7O0VBRUUsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7O0FBR0E7RUFDRSxjQUFjO0VBQ2QsY0FBYztDQUNmIiwiZmlsZSI6Imxpc3Rwcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NTQ3YjtcclxuICB9XHJcblxyXG4gIFxyXG5oMntcclxuXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi8qIFNlYXJjaCAqL1xyXG5AaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NDAwLDQwMGksNzAwXCIpO1xyXG5cclxuKiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcblxyXG5odG1sLCBib2R5IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5mbGV4Ym94IHtcclxuICBiYWNrZ3JvdW5kOnJnYigyNTMsIDI0OSwgMjQ5KTsgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2VhcmNoIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2ggPiBoMyB7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLnNlYXJjaCA+IGgxLFxyXG4uc2VhcmNoID4gaDMge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIHRleHQtc2hhZG93OiAwIDFweCAjMDA5MWMyO1xyXG59XHJcblxyXG4uc2VhcmNoID4gZGl2IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMCAxcHggIzAwOTFjMik7XHJcbn1cclxuXHJcbi5zZWFyY2ggPiBkaXY6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDApO1xyXG4gIHdpZHRoOiA0cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDQwcHg7XHJcbiAgcmlnaHQ6IDJweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG59XHJcblxyXG4uc2VhcmNoID4gZGl2ID4gaW5wdXQge1xyXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogc29saWQgM3B4IHJnYigwLCAwLCAwKTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC41cztcclxufVxyXG5cclxuLnNlYXJjaCA+IGRpdiA+IGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uc2VhcmNoID4gZGl2ID4gaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4uc2VhcmNoID4gZGl2ID4gaW5wdXQ6Zm9jdXMsXHJcbi5zZWFyY2ggPiBkaXYgPiBpbnB1dDpub3QoOnBsYWNlaG9sZGVyLXNob3duKSB7XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG50ZCwgdGh7XHJcbiAgcGFkZGluZzogMTVweCA4cHg7XHJcbn1cclxuXHJcbiAgXHJcbi5oY2VudGVyIHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuIH0iXX0= */"] });


/***/ }),

/***/ "NV/E":
/*!***************************************************************!*\
  !*** ./src/app/shared/shared-components/nav/nav.component.ts ***!
  \***************************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function () { return { exact: true }; };
function NavComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function NavComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Order History");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "All Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Products");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Product");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavComponent_li_14_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_li_14_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavComponent {
    constructor(jwtHelper) {
        this.jwtHelper = jwtHelper;
        this.authenticated = false;
        this.isAdmin = false;
        this.isUser = false;
    }
    ngOnInit() {
        if (this.isUserAuthenticated()) {
            this.authenticated = true;
        }
        if (localStorage.getItem('user') == "admin@gmail.com") {
            this.isAdmin = true;
        }
        if (localStorage.getItem('user') != "admin@gmail.com" && localStorage.getItem('user') != null) {
            this.isUser = true;
        }
    }
    isUserAuthenticated() {
        const token = localStorage.getItem("jwt");
        if (token && !this.jwtHelper.isTokenExpired(token)) {
            return true;
        }
        else {
            return false;
        }
    }
    logout() {
        localStorage.removeItem("jwt");
        localStorage.removeItem("user");
        location.reload();
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 15, vars: 9, consts: [[1, "navbar-fixed"], [2, "background-color", "#342056"], ["routerLink", "", 1, "brand-logo"], [1, "nav-wrapper"], ["id", "nav-mobile", 1, "right", "hide-on-med-and-down"], [4, "ngIf"], [3, "click", 4, "ngIf"], ["aria-current", "page", "routerLink", "", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["aria-current", "page", "routerLink", "/orderhistory", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/allorders", "routerLinkActive", "active"], ["routerLink", "/product", "routerLinkActive", "active"], ["routerLink", "/addproduct", "routerLinkActive", "active"], ["routerLink", "/admin", "routerLinkActive", "active"], ["aria-current", "page", "routerLink", "/login", "routerLinkActive", "active", 1, "nav-link"], ["aria-current", "page", "routerLink", "/register", "routerLinkActive", "active", 1, "nav-link"], [3, "click"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Shopping App");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavComponent_li_6_Template, 3, 2, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavComponent_li_7_Template, 3, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, NavComponent_li_8_Template, 3, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NavComponent_li_9_Template, 3, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavComponent_li_10_Template, 3, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NavComponent_li_11_Template, 3, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, NavComponent_li_12_Template, 3, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NavComponent_li_13_Template, 3, 0, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, NavComponent_li_14_Template, 3, 0, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isAdmin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isUser && ctx.authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin && ctx.authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin && ctx.authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin && ctx.authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin && ctx.authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authenticated);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["template[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n\r\n[hidden][_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\nhtml[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\r\n  box-sizing: inherit;\r\n}\r\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\r\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen-Sans, Ubuntu, Cantarell, \"Helvetica Neue\", sans-serif;\r\n}\r\nul[_ngcontent-%COMP%]:not(.browser-default) {\r\n  padding-left: 0;\r\n  list-style-type: none;\r\n}\r\nul[_ngcontent-%COMP%]:not(.browser-default)    > li[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n}\r\na[_ngcontent-%COMP%] {\r\n  color: #039be5;\r\n  text-decoration: none;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n.valign-wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n.clearfix[_ngcontent-%COMP%] {\r\n  clear: both;\r\n}\r\n.z-depth-0[_ngcontent-%COMP%] {\r\n  box-shadow: none !important;\r\n}\r\n\r\n.z-depth-1[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], .card-panel[_ngcontent-%COMP%], .card[_ngcontent-%COMP%], .toast[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%], .btn-large[_ngcontent-%COMP%], .btn-small[_ngcontent-%COMP%], .btn-floating[_ngcontent-%COMP%], .dropdown-content[_ngcontent-%COMP%], .collapsible[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%] {\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n.z-depth-1-half[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:hover, .btn-large[_ngcontent-%COMP%]:hover, .btn-small[_ngcontent-%COMP%]:hover, .btn-floating[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.z-depth-2[_ngcontent-%COMP%] {\r\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.z-depth-3[_ngcontent-%COMP%] {\r\n  box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.z-depth-4[_ngcontent-%COMP%] {\r\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.z-depth-5[_ngcontent-%COMP%], .modal[_ngcontent-%COMP%] {\r\n  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);\r\n}\r\n.hoverable[_ngcontent-%COMP%] {\r\n  transition: box-shadow .25s;\r\n}\r\n.hoverable[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.divider[_ngcontent-%COMP%] {\r\n  height: 1px;\r\n  overflow: hidden;\r\n  background-color: #e0e0e0;\r\n}\r\nblockquote[_ngcontent-%COMP%] {\r\n  margin: 20px 0;\r\n  padding-left: 1.5rem;\r\n  border-left: 5px solid #ee6e73;\r\n}\r\ni[_ngcontent-%COMP%] {\r\n  line-height: inherit;\r\n}\r\ni.left[_ngcontent-%COMP%] {\r\n  float: left;\r\n  margin-right: 15px;\r\n}\r\ni.right[_ngcontent-%COMP%] {\r\n  float: right;\r\n  margin-left: 15px;\r\n}\r\ni.tiny[_ngcontent-%COMP%] {\r\n  font-size: 1rem;\r\n}\r\ni.small[_ngcontent-%COMP%] {\r\n  font-size: 2rem;\r\n}\r\ni.medium[_ngcontent-%COMP%] {\r\n  font-size: 4rem;\r\n}\r\ni.large[_ngcontent-%COMP%] {\r\n  font-size: 6rem;\r\n}\r\n\r\n.hide[_ngcontent-%COMP%] {\r\n  display: none !important;\r\n}\r\n.left-align[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n}\r\n.right-align[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n}\r\n.center[_ngcontent-%COMP%], .center-align[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n.left[_ngcontent-%COMP%] {\r\n  float: left !important;\r\n}\r\n.right[_ngcontent-%COMP%] {\r\n  float: right !important;\r\n}\r\n.no-select[_ngcontent-%COMP%], input[type=range][_ngcontent-%COMP%], input[type=range][_ngcontent-%COMP%]    + .thumb[_ngcontent-%COMP%] {\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n}\r\n.circle[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n}\r\n.center-block[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n.truncate[_ngcontent-%COMP%] {\r\n  display: block;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n.no-padding[_ngcontent-%COMP%] {\r\n  padding: 0 !important;\r\n}\r\nspan.badge[_ngcontent-%COMP%] {\r\n  min-width: 3rem;\r\n  padding: 0 6px;\r\n  margin-left: 14px;\r\n  text-align: center;\r\n  font-size: 1rem;\r\n  line-height: 22px;\r\n  height: 22px;\r\n  color: #757575;\r\n  float: right;\r\n  box-sizing: border-box;\r\n}\r\nspan.badge.new[_ngcontent-%COMP%] {\r\n  font-weight: 300;\r\n  font-size: 0.8rem;\r\n  color: #fff;\r\n  background-color: #26a69a;\r\n  border-radius: 2px;\r\n}\r\nspan.badge.new[_ngcontent-%COMP%]:after {\r\n  content: \" new\";\r\n}\r\nspan.badge[data-badge-caption][_ngcontent-%COMP%]::after {\r\n  content: \" \" attr(data-badge-caption);\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span.badge[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  float: none;\r\n  margin-left: 4px;\r\n  line-height: 22px;\r\n  height: 22px;\r\n  -webkit-font-smoothing: auto;\r\n}\r\n.collection-item[_ngcontent-%COMP%]   span.badge[_ngcontent-%COMP%] {\r\n  margin-top: calc(0.75rem - 11px);\r\n}\r\n.collapsible[_ngcontent-%COMP%]   span.badge[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n}\r\n.sidenav[_ngcontent-%COMP%]   span.badge[_ngcontent-%COMP%] {\r\n  margin-top: calc(24px - 11px);\r\n}\r\ntable[_ngcontent-%COMP%]   span.badge[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  float: none;\r\n  margin-left: auto;\r\n}\r\n\r\n.material-icons[_ngcontent-%COMP%] {\r\n  text-rendering: optimizeLegibility;\r\n  font-feature-settings: 'liga';\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  max-width: 1280px;\r\n  width: 90%;\r\n}\r\n@media only screen and (min-width: 601px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    width: 85%;\r\n  }\r\n}\r\n@media only screen and (min-width: 993px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n  }\r\n}\r\n.col[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n  margin-left: -0.75rem;\r\n  margin-right: -0.75rem;\r\n}\r\n.section[_ngcontent-%COMP%] {\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n}\r\n.section.no-pad[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n.section.no-pad-bot[_ngcontent-%COMP%] {\r\n  padding-bottom: 0;\r\n}\r\n.section.no-pad-top[_ngcontent-%COMP%] {\r\n  padding-top: 0;\r\n}\r\n.row[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-bottom: 20px;\r\n}\r\n.row[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n.row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n  float: left;\r\n  box-sizing: border-box;\r\n  padding: 0 0.75rem;\r\n  min-height: 1px;\r\n}\r\n.row[_ngcontent-%COMP%]   .col[class*=\"push-\"][_ngcontent-%COMP%], .row[_ngcontent-%COMP%]   .col[class*=\"pull-\"][_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.s1[_ngcontent-%COMP%] {\r\n  width: 8.3333333333%;\r\n  margin-left: auto;\r\n  left: auto;\r\n  right: auto;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.s2[_ngcontent-%COMP%] {\r\n  width: 16.6666666667%;\r\n  margin-left: auto;\r\n  left: auto;\r\n  right: auto;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.s3[_ngcontent-%COMP%] {\r\n  width: 25%;\r\n  margin-left: auto;\r\n  left: auto;\r\n  right: auto;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.s4[_ngcontent-%COMP%] {\r\n  width: 33.3333333333%;\r\n  margin-left: auto;\r\n  left: auto;\r\n  right: auto;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.s5[_ngcontent-%COMP%] {\r\n  width: 41.6666666667%;\r\n  margin-left: auto;\r\n  left: auto;\r\n  right: auto;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.s6[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  margin-left: auto;\r\n  left: auto;\r\n  right: auto;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.s7[_ngcontent-%COMP%] {\r\n  width: 58.3333333333%;\r\n  margin-left: auto;\r\n  left: auto;\r\n  right: auto;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.s8[_ngcontent-%COMP%] {\r\n  width: 66.6666666667%;\r\n  margin-left: auto;\r\n  left: auto;\r\n  right: auto;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.s9[_ngcontent-%COMP%] {\r\n  width: 75%;\r\n  margin-left: auto;\r\n  left: auto;\r\n  right: auto;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.s10[_ngcontent-%COMP%] {\r\n  width: 83.3333333333%;\r\n  margin-left: auto;\r\n  left: auto;\r\n  right: auto;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.s11[_ngcontent-%COMP%] {\r\n  width: 91.6666666667%;\r\n  margin-left: auto;\r\n  left: auto;\r\n  right: auto;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.s12[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-left: auto;\r\n  left: auto;\r\n  right: auto;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.offset-s1[_ngcontent-%COMP%] {\r\n  margin-left: 8.3333333333%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.pull-s1[_ngcontent-%COMP%] {\r\n  right: 8.3333333333%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.push-s1[_ngcontent-%COMP%] {\r\n  left: 8.3333333333%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.offset-s2[_ngcontent-%COMP%] {\r\n  margin-left: 16.6666666667%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.pull-s2[_ngcontent-%COMP%] {\r\n  right: 16.6666666667%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.push-s2[_ngcontent-%COMP%] {\r\n  left: 16.6666666667%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.offset-s3[_ngcontent-%COMP%] {\r\n  margin-left: 25%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.pull-s3[_ngcontent-%COMP%] {\r\n  right: 25%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.push-s3[_ngcontent-%COMP%] {\r\n  left: 25%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.offset-s4[_ngcontent-%COMP%] {\r\n  margin-left: 33.3333333333%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.pull-s4[_ngcontent-%COMP%] {\r\n  right: 33.3333333333%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.push-s4[_ngcontent-%COMP%] {\r\n  left: 33.3333333333%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.offset-s5[_ngcontent-%COMP%] {\r\n  margin-left: 41.6666666667%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.pull-s5[_ngcontent-%COMP%] {\r\n  right: 41.6666666667%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.push-s5[_ngcontent-%COMP%] {\r\n  left: 41.6666666667%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.offset-s6[_ngcontent-%COMP%] {\r\n  margin-left: 50%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.pull-s6[_ngcontent-%COMP%] {\r\n  right: 50%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.push-s6[_ngcontent-%COMP%] {\r\n  left: 50%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.offset-s7[_ngcontent-%COMP%] {\r\n  margin-left: 58.3333333333%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.pull-s7[_ngcontent-%COMP%] {\r\n  right: 58.3333333333%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.push-s7[_ngcontent-%COMP%] {\r\n  left: 58.3333333333%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.offset-s8[_ngcontent-%COMP%] {\r\n  margin-left: 66.6666666667%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.pull-s8[_ngcontent-%COMP%] {\r\n  right: 66.6666666667%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.push-s8[_ngcontent-%COMP%] {\r\n  left: 66.6666666667%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.offset-s9[_ngcontent-%COMP%] {\r\n  margin-left: 75%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.pull-s9[_ngcontent-%COMP%] {\r\n  right: 75%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.push-s9[_ngcontent-%COMP%] {\r\n  left: 75%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.offset-s10[_ngcontent-%COMP%] {\r\n  margin-left: 83.3333333333%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.pull-s10[_ngcontent-%COMP%] {\r\n  right: 83.3333333333%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.push-s10[_ngcontent-%COMP%] {\r\n  left: 83.3333333333%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.offset-s11[_ngcontent-%COMP%] {\r\n  margin-left: 91.6666666667%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.pull-s11[_ngcontent-%COMP%] {\r\n  right: 91.6666666667%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.push-s11[_ngcontent-%COMP%] {\r\n  left: 91.6666666667%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.offset-s12[_ngcontent-%COMP%] {\r\n  margin-left: 100%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.pull-s12[_ngcontent-%COMP%] {\r\n  right: 100%;\r\n}\r\n.row[_ngcontent-%COMP%]   .col.push-s12[_ngcontent-%COMP%] {\r\n  left: 100%;\r\n}\r\n@media only screen and (min-width: 601px) {\r\n  .row[_ngcontent-%COMP%]   .col.m1[_ngcontent-%COMP%] {\r\n    width: 8.3333333333%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.m2[_ngcontent-%COMP%] {\r\n    width: 16.6666666667%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.m3[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.m4[_ngcontent-%COMP%] {\r\n    width: 33.3333333333%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.m5[_ngcontent-%COMP%] {\r\n    width: 41.6666666667%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.m6[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.m7[_ngcontent-%COMP%] {\r\n    width: 58.3333333333%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.m8[_ngcontent-%COMP%] {\r\n    width: 66.6666666667%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.m9[_ngcontent-%COMP%] {\r\n    width: 75%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.m10[_ngcontent-%COMP%] {\r\n    width: 83.3333333333%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.m11[_ngcontent-%COMP%] {\r\n    width: 91.6666666667%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.m12[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-m1[_ngcontent-%COMP%] {\r\n    margin-left: 8.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-m1[_ngcontent-%COMP%] {\r\n    right: 8.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-m1[_ngcontent-%COMP%] {\r\n    left: 8.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-m2[_ngcontent-%COMP%] {\r\n    margin-left: 16.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-m2[_ngcontent-%COMP%] {\r\n    right: 16.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-m2[_ngcontent-%COMP%] {\r\n    left: 16.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-m3[_ngcontent-%COMP%] {\r\n    margin-left: 25%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-m3[_ngcontent-%COMP%] {\r\n    right: 25%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-m3[_ngcontent-%COMP%] {\r\n    left: 25%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-m4[_ngcontent-%COMP%] {\r\n    margin-left: 33.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-m4[_ngcontent-%COMP%] {\r\n    right: 33.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-m4[_ngcontent-%COMP%] {\r\n    left: 33.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-m5[_ngcontent-%COMP%] {\r\n    margin-left: 41.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-m5[_ngcontent-%COMP%] {\r\n    right: 41.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-m5[_ngcontent-%COMP%] {\r\n    left: 41.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-m6[_ngcontent-%COMP%] {\r\n    margin-left: 50%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-m6[_ngcontent-%COMP%] {\r\n    right: 50%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-m6[_ngcontent-%COMP%] {\r\n    left: 50%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-m7[_ngcontent-%COMP%] {\r\n    margin-left: 58.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-m7[_ngcontent-%COMP%] {\r\n    right: 58.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-m7[_ngcontent-%COMP%] {\r\n    left: 58.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-m8[_ngcontent-%COMP%] {\r\n    margin-left: 66.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-m8[_ngcontent-%COMP%] {\r\n    right: 66.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-m8[_ngcontent-%COMP%] {\r\n    left: 66.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-m9[_ngcontent-%COMP%] {\r\n    margin-left: 75%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-m9[_ngcontent-%COMP%] {\r\n    right: 75%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-m9[_ngcontent-%COMP%] {\r\n    left: 75%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-m10[_ngcontent-%COMP%] {\r\n    margin-left: 83.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-m10[_ngcontent-%COMP%] {\r\n    right: 83.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-m10[_ngcontent-%COMP%] {\r\n    left: 83.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-m11[_ngcontent-%COMP%] {\r\n    margin-left: 91.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-m11[_ngcontent-%COMP%] {\r\n    right: 91.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-m11[_ngcontent-%COMP%] {\r\n    left: 91.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-m12[_ngcontent-%COMP%] {\r\n    margin-left: 100%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-m12[_ngcontent-%COMP%] {\r\n    right: 100%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-m12[_ngcontent-%COMP%] {\r\n    left: 100%;\r\n  }\r\n}\r\n@media only screen and (min-width: 993px) {\r\n  .row[_ngcontent-%COMP%]   .col.l1[_ngcontent-%COMP%] {\r\n    width: 8.3333333333%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.l2[_ngcontent-%COMP%] {\r\n    width: 16.6666666667%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.l3[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.l4[_ngcontent-%COMP%] {\r\n    width: 33.3333333333%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.l5[_ngcontent-%COMP%] {\r\n    width: 41.6666666667%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.l6[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.l7[_ngcontent-%COMP%] {\r\n    width: 58.3333333333%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.l8[_ngcontent-%COMP%] {\r\n    width: 66.6666666667%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.l9[_ngcontent-%COMP%] {\r\n    width: 75%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.l10[_ngcontent-%COMP%] {\r\n    width: 83.3333333333%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.l11[_ngcontent-%COMP%] {\r\n    width: 91.6666666667%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.l12[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-l1[_ngcontent-%COMP%] {\r\n    margin-left: 8.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-l1[_ngcontent-%COMP%] {\r\n    right: 8.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-l1[_ngcontent-%COMP%] {\r\n    left: 8.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-l2[_ngcontent-%COMP%] {\r\n    margin-left: 16.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-l2[_ngcontent-%COMP%] {\r\n    right: 16.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-l2[_ngcontent-%COMP%] {\r\n    left: 16.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-l3[_ngcontent-%COMP%] {\r\n    margin-left: 25%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-l3[_ngcontent-%COMP%] {\r\n    right: 25%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-l3[_ngcontent-%COMP%] {\r\n    left: 25%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-l4[_ngcontent-%COMP%] {\r\n    margin-left: 33.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-l4[_ngcontent-%COMP%] {\r\n    right: 33.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-l4[_ngcontent-%COMP%] {\r\n    left: 33.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-l5[_ngcontent-%COMP%] {\r\n    margin-left: 41.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-l5[_ngcontent-%COMP%] {\r\n    right: 41.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-l5[_ngcontent-%COMP%] {\r\n    left: 41.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-l6[_ngcontent-%COMP%] {\r\n    margin-left: 50%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-l6[_ngcontent-%COMP%] {\r\n    right: 50%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-l6[_ngcontent-%COMP%] {\r\n    left: 50%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-l7[_ngcontent-%COMP%] {\r\n    margin-left: 58.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-l7[_ngcontent-%COMP%] {\r\n    right: 58.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-l7[_ngcontent-%COMP%] {\r\n    left: 58.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-l8[_ngcontent-%COMP%] {\r\n    margin-left: 66.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-l8[_ngcontent-%COMP%] {\r\n    right: 66.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-l8[_ngcontent-%COMP%] {\r\n    left: 66.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-l9[_ngcontent-%COMP%] {\r\n    margin-left: 75%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-l9[_ngcontent-%COMP%] {\r\n    right: 75%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-l9[_ngcontent-%COMP%] {\r\n    left: 75%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-l10[_ngcontent-%COMP%] {\r\n    margin-left: 83.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-l10[_ngcontent-%COMP%] {\r\n    right: 83.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-l10[_ngcontent-%COMP%] {\r\n    left: 83.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-l11[_ngcontent-%COMP%] {\r\n    margin-left: 91.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-l11[_ngcontent-%COMP%] {\r\n    right: 91.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-l11[_ngcontent-%COMP%] {\r\n    left: 91.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-l12[_ngcontent-%COMP%] {\r\n    margin-left: 100%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-l12[_ngcontent-%COMP%] {\r\n    right: 100%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-l12[_ngcontent-%COMP%] {\r\n    left: 100%;\r\n  }\r\n}\r\n@media only screen and (min-width: 1201px) {\r\n  .row[_ngcontent-%COMP%]   .col.xl1[_ngcontent-%COMP%] {\r\n    width: 8.3333333333%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.xl2[_ngcontent-%COMP%] {\r\n    width: 16.6666666667%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.xl3[_ngcontent-%COMP%] {\r\n    width: 25%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.xl4[_ngcontent-%COMP%] {\r\n    width: 33.3333333333%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.xl5[_ngcontent-%COMP%] {\r\n    width: 41.6666666667%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.xl6[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.xl7[_ngcontent-%COMP%] {\r\n    width: 58.3333333333%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.xl8[_ngcontent-%COMP%] {\r\n    width: 66.6666666667%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.xl9[_ngcontent-%COMP%] {\r\n    width: 75%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.xl10[_ngcontent-%COMP%] {\r\n    width: 83.3333333333%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.xl11[_ngcontent-%COMP%] {\r\n    width: 91.6666666667%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.xl12[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-left: auto;\r\n    left: auto;\r\n    right: auto;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-xl1[_ngcontent-%COMP%] {\r\n    margin-left: 8.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-xl1[_ngcontent-%COMP%] {\r\n    right: 8.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-xl1[_ngcontent-%COMP%] {\r\n    left: 8.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-xl2[_ngcontent-%COMP%] {\r\n    margin-left: 16.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-xl2[_ngcontent-%COMP%] {\r\n    right: 16.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-xl2[_ngcontent-%COMP%] {\r\n    left: 16.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-xl3[_ngcontent-%COMP%] {\r\n    margin-left: 25%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-xl3[_ngcontent-%COMP%] {\r\n    right: 25%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-xl3[_ngcontent-%COMP%] {\r\n    left: 25%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-xl4[_ngcontent-%COMP%] {\r\n    margin-left: 33.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-xl4[_ngcontent-%COMP%] {\r\n    right: 33.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-xl4[_ngcontent-%COMP%] {\r\n    left: 33.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-xl5[_ngcontent-%COMP%] {\r\n    margin-left: 41.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-xl5[_ngcontent-%COMP%] {\r\n    right: 41.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-xl5[_ngcontent-%COMP%] {\r\n    left: 41.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-xl6[_ngcontent-%COMP%] {\r\n    margin-left: 50%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-xl6[_ngcontent-%COMP%] {\r\n    right: 50%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-xl6[_ngcontent-%COMP%] {\r\n    left: 50%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-xl7[_ngcontent-%COMP%] {\r\n    margin-left: 58.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-xl7[_ngcontent-%COMP%] {\r\n    right: 58.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-xl7[_ngcontent-%COMP%] {\r\n    left: 58.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-xl8[_ngcontent-%COMP%] {\r\n    margin-left: 66.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-xl8[_ngcontent-%COMP%] {\r\n    right: 66.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-xl8[_ngcontent-%COMP%] {\r\n    left: 66.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-xl9[_ngcontent-%COMP%] {\r\n    margin-left: 75%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-xl9[_ngcontent-%COMP%] {\r\n    right: 75%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-xl9[_ngcontent-%COMP%] {\r\n    left: 75%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-xl10[_ngcontent-%COMP%] {\r\n    margin-left: 83.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-xl10[_ngcontent-%COMP%] {\r\n    right: 83.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-xl10[_ngcontent-%COMP%] {\r\n    left: 83.3333333333%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-xl11[_ngcontent-%COMP%] {\r\n    margin-left: 91.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-xl11[_ngcontent-%COMP%] {\r\n    right: 91.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-xl11[_ngcontent-%COMP%] {\r\n    left: 91.6666666667%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.offset-xl12[_ngcontent-%COMP%] {\r\n    margin-left: 100%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.pull-xl12[_ngcontent-%COMP%] {\r\n    right: 100%;\r\n  }\r\n  .row[_ngcontent-%COMP%]   .col.push-xl12[_ngcontent-%COMP%] {\r\n    left: 100%;\r\n  }\r\n}\r\nnav[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  background-color: #ee6e73;\r\n  width: 100%;\r\n  height: 56px;\r\n  line-height: 56px;\r\n  position: fixed;\r\n  left: 0%;\r\n  top: 0%;\r\n  z-index: 8;\r\n}\r\nnav.nav-extended[_ngcontent-%COMP%] {\r\n  height: auto;\r\n}\r\nnav.nav-extended[_ngcontent-%COMP%]   .nav-wrapper[_ngcontent-%COMP%] {\r\n  min-height: 56px;\r\n  height: auto;\r\n}\r\nnav.nav-extended[_ngcontent-%COMP%]   .nav-content[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  line-height: normal;\r\n}\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\nnav[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   [class^=\"mdi-\"][_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   [class*=\"mdi-\"][_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   i.material-icons[_ngcontent-%COMP%] {\r\n  display: block;\r\n  font-size: 24px;\r\n  height: 56px;\r\n  line-height: 56px;\r\n}\r\nnav[_ngcontent-%COMP%]   .nav-wrapper[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 100%;\r\n}\r\n@media only screen and (min-width: 993px) {\r\n  nav[_ngcontent-%COMP%]   a.sidenav-trigger[_ngcontent-%COMP%] {\r\n    display: none;\r\n  }\r\n}\r\nnav[_ngcontent-%COMP%]   .sidenav-trigger[_ngcontent-%COMP%] {\r\n  float: left;\r\n  position: relative;\r\n  z-index: 1;\r\n  height: 56px;\r\n  margin: 0 18px;\r\n}\r\nnav[_ngcontent-%COMP%]   .sidenav-trigger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  height: 56px;\r\n  line-height: 56px;\r\n}\r\nnav[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  color: #fff;\r\n  display: inline-block;\r\n  font-size: 25px;\r\n  padding: 0;\r\n}\r\nnav[_ngcontent-%COMP%]   .brand-logo.center[_ngcontent-%COMP%] {\r\n  left: 50%;\r\n  transform: translateX(-50%);\r\n}\r\n@media only screen and (max-width: 992px) {\r\n  nav[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%] {\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n  }\r\n  nav[_ngcontent-%COMP%]   .brand-logo.left[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .brand-logo.right[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    transform: none;\r\n  }\r\n  nav[_ngcontent-%COMP%]   .brand-logo.left[_ngcontent-%COMP%] {\r\n    left: 0.5rem;\r\n  }\r\n  nav[_ngcontent-%COMP%]   .brand-logo.right[_ngcontent-%COMP%] {\r\n    right: 0.5rem;\r\n    left: auto;\r\n  }\r\n}\r\nnav[_ngcontent-%COMP%]   .brand-logo.right[_ngcontent-%COMP%] {\r\n  right: 0.5rem;\r\n  padding: 0;\r\n}\r\nnav[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   [class^=\"mdi-\"][_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   [class*=\"mdi-\"][_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .brand-logo[_ngcontent-%COMP%]   i.material-icons[_ngcontent-%COMP%] {\r\n  float: left;\r\n  margin-right: 15px;\r\n}\r\nnav[_ngcontent-%COMP%]   .nav-title[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-size: 32px;\r\n  padding: 28px 0;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  transition: background-color .3s;\r\n  float: left;\r\n  padding: 0;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  transition: background-color .3s;\r\n  font-size: 1rem;\r\n  color: #fff;\r\n  display: block;\r\n  padding: 0 15px;\r\n  cursor: pointer;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.btn[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.btn-large[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.btn-small[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.btn-large[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.btn-flat[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.btn-floating[_ngcontent-%COMP%] {\r\n  margin-top: -2px;\r\n  margin-left: 15px;\r\n  margin-right: 15px;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.btn[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.btn-large[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.btn-small[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.btn-large[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.btn-flat[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a.btn-floating[_ngcontent-%COMP%]    > .material-icons[_ngcontent-%COMP%] {\r\n  height: inherit;\r\n  line-height: inherit;\r\n}\r\nnav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n}\r\nnav[_ngcontent-%COMP%]   ul.left[_ngcontent-%COMP%] {\r\n  float: left;\r\n}\r\nnav[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n}\r\nnav[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  height: 100%;\r\n}\r\nnav[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  font-size: 1.2rem;\r\n  border: none;\r\n  padding-left: 2rem;\r\n}\r\nnav[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, nav[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:valid, nav[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[type=password][_ngcontent-%COMP%]:valid, nav[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[type=email][_ngcontent-%COMP%]:valid, nav[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[type=url][_ngcontent-%COMP%]:valid, nav[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%]:valid {\r\n  border: none;\r\n  box-shadow: none;\r\n}\r\nnav[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  top: 0;\r\n  left: 0;\r\n}\r\nnav[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: rgba(255, 255, 255, 0.7);\r\n  transition: color .3s;\r\n}\r\nnav[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   label.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\n.navbar-fixed[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 56px;\r\n  z-index: 997;\r\n}\r\n.navbar-fixed[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n}\r\n@media only screen and (min-width: 601px) {\r\n  nav.nav-extended[_ngcontent-%COMP%]   .nav-wrapper[_ngcontent-%COMP%] {\r\n    min-height: 64px;\r\n  }\r\n  nav[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   .nav-wrapper[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   a.sidenav-trigger[_ngcontent-%COMP%], nav[_ngcontent-%COMP%]   a.sidenav-trigger[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    height: 64px;\r\n    line-height: 64px;\r\n  }\r\n  .navbar-fixed[_ngcontent-%COMP%] {\r\n    height: 64px;\r\n  }\r\n}\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n}\r\n\r\n.table-of-contents.fixed[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n}\r\n.table-of-contents[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  padding: 2px 0;\r\n}\r\n.table-of-contents[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-weight: 300;\r\n  color: #757575;\r\n  padding-left: 16px;\r\n  height: 1.5rem;\r\n  line-height: 1.5rem;\r\n  letter-spacing: .4;\r\n  display: inline-block;\r\n}\r\n.table-of-contents[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\r\n  color: #a8a8a8;\r\n  padding-left: 15px;\r\n  border-left: 1px solid #ee6e73;\r\n}\r\n.table-of-contents[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  padding-left: 14px;\r\n  border-left: 2px solid #ee6e73;\r\n}\r\n.sidenav[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  width: 300px;\r\n  left: 0;\r\n  top: 0;\r\n  margin: 0;\r\n  transform: translateX(-100%);\r\n  height: 100%;\r\n  height: calc(100% + 60px);\r\n  height: -moz-calc(100%);\r\n  padding-bottom: 60px;\r\n  background-color: #fff;\r\n  z-index: 999;\r\n  overflow-y: auto;\r\n  will-change: transform;\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  transform: translateX(-105%);\r\n}\r\n.sidenav.right-aligned[_ngcontent-%COMP%] {\r\n  right: 0;\r\n  transform: translateX(105%);\r\n  left: auto;\r\n  transform: translateX(100%);\r\n}\r\n.sidenav[_ngcontent-%COMP%]   .collapsible[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n}\r\n.sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  float: none;\r\n  line-height: 48px;\r\n}\r\n.sidenav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] {\r\n  background-color: rgba(0, 0, 0, 0.05);\r\n}\r\n.sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  color: rgba(0, 0, 0, 0.87);\r\n  display: block;\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  height: 48px;\r\n  line-height: 48px;\r\n  padding: 0 32px;\r\n}\r\n.sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n  background-color: rgba(0, 0, 0, 0.05);\r\n}\r\n.sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a.btn[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a.btn-large[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a.btn-small[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a.btn-large[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a.btn-flat[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a.btn-floating[_ngcontent-%COMP%] {\r\n  margin: 10px 15px;\r\n}\r\n.sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a.btn[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a.btn-large[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a.btn-small[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a.btn-large[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a.btn-floating[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\n.sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a.btn-flat[_ngcontent-%COMP%] {\r\n  color: #343434;\r\n}\r\n.sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a.btn[_ngcontent-%COMP%]:hover, .sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a.btn-large[_ngcontent-%COMP%]:hover, .sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a.btn-small[_ngcontent-%COMP%]:hover, .sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a.btn-large[_ngcontent-%COMP%]:hover {\r\n  background-color: #2bbbad;\r\n}\r\n.sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a.btn-floating[_ngcontent-%COMP%]:hover {\r\n  background-color: #26a69a;\r\n}\r\n.sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > [class^=\"mdi-\"][_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > [class*=\"mdi-\"][_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > i.material-icons[_ngcontent-%COMP%] {\r\n  float: left;\r\n  height: 48px;\r\n  line-height: 48px;\r\n  margin: 0 32px 0 0;\r\n  width: 24px;\r\n  color: rgba(0, 0, 0, 0.54);\r\n}\r\n.sidenav[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\r\n  margin: 8px 0 0 0;\r\n}\r\n.sidenav[_ngcontent-%COMP%]   .subheader[_ngcontent-%COMP%] {\r\n  cursor: initial;\r\n  pointer-events: none;\r\n  color: rgba(0, 0, 0, 0.54);\r\n  font-size: 14px;\r\n  font-weight: 500;\r\n  line-height: 48px;\r\n}\r\n.sidenav[_ngcontent-%COMP%]   .subheader[_ngcontent-%COMP%]:hover {\r\n  background-color: transparent;\r\n}\r\n.sidenav[_ngcontent-%COMP%]   .user-view[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  padding: 32px 32px 0;\r\n  margin-bottom: 8px;\r\n}\r\n.sidenav[_ngcontent-%COMP%]   .user-view[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n  height: auto;\r\n  padding: 0;\r\n}\r\n.sidenav[_ngcontent-%COMP%]   .user-view[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\r\n  background-color: transparent;\r\n}\r\n.sidenav[_ngcontent-%COMP%]   .user-view[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: -1;\r\n}\r\n.sidenav[_ngcontent-%COMP%]   .user-view[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]   .user-view[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]   .user-view[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n.sidenav[_ngcontent-%COMP%]   .user-view[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\r\n  height: 64px;\r\n  width: 64px;\r\n}\r\n.sidenav[_ngcontent-%COMP%]   .user-view[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%]   .user-view[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  line-height: 24px;\r\n}\r\n.sidenav[_ngcontent-%COMP%]   .user-view[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\r\n  margin-top: 16px;\r\n  font-weight: 500;\r\n}\r\n.sidenav[_ngcontent-%COMP%]   .user-view[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\r\n  padding-bottom: 16px;\r\n  font-weight: 400;\r\n}\r\n.drag-target[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  width: 10px;\r\n  position: fixed;\r\n  top: 0;\r\n  z-index: 998;\r\n}\r\nnav[_ngcontent-%COMP%]{\r\n  background-color: #38547b;\r\n}\r\n.drag-target.right-aligned[_ngcontent-%COMP%] {\r\n  right: 0;\r\n}\r\n.sidenav.sidenav-fixed[_ngcontent-%COMP%] {\r\n  left: 0;\r\n  transform: translateX(0);\r\n  position: fixed;\r\n}\r\n.sidenav.sidenav-fixed.right-aligned[_ngcontent-%COMP%] {\r\n  right: 0;\r\n  left: auto;\r\n}\r\n@media only screen and (max-width: 992px) {\r\n  .sidenav.sidenav-fixed[_ngcontent-%COMP%] {\r\n    transform: translateX(-105%);\r\n  }\r\n  .sidenav.sidenav-fixed.right-aligned[_ngcontent-%COMP%] {\r\n    transform: translateX(105%);\r\n  }\r\n  .sidenav[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\r\n    padding: 0 16px;\r\n  }\r\n  .sidenav[_ngcontent-%COMP%]   .user-view[_ngcontent-%COMP%] {\r\n    padding: 16px 16px 0;\r\n  }\r\n}\r\n.sidenav[_ngcontent-%COMP%]   .collapsible-body[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]:not(.collapsible)    > li.active[_ngcontent-%COMP%], .sidenav.sidenav-fixed[_ngcontent-%COMP%]   .collapsible-body[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]:not(.collapsible)    > li.active[_ngcontent-%COMP%] {\r\n  background-color: #ee6e73;\r\n}\r\n.sidenav[_ngcontent-%COMP%]   .collapsible-body[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]:not(.collapsible)    > li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .sidenav.sidenav-fixed[_ngcontent-%COMP%]   .collapsible-body[_ngcontent-%COMP%]    > ul[_ngcontent-%COMP%]:not(.collapsible)    > li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\n.sidenav[_ngcontent-%COMP%]   .collapsible-body[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n.sidenav-overlay[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  opacity: 0;\r\n  height: 120vh;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  z-index: 997;\r\n  display: none;\r\n}\r\n@keyframes left-spin {\r\n  from {\r\n    transform: rotate(130deg);\r\n  }\r\n  50% {\r\n    transform: rotate(-5deg);\r\n  }\r\n  to {\r\n    transform: rotate(130deg);\r\n  }\r\n}\r\n@keyframes right-spin {\r\n  from {\r\n    transform: rotate(-130deg);\r\n  }\r\n  50% {\r\n    transform: rotate(5deg);\r\n  }\r\n  to {\r\n    transform: rotate(-130deg);\r\n  }\r\n}\r\nnav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n  background-color:#639cd9;\r\n}\r\n.active[_ngcontent-%COMP%]{\r\n  background-color: #639cd9;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7O0VBRUU7QUFDRjtFQUNFLGFBQWE7QUFDZjtBQUVBOytFQUMrRTtBQUMvRTs7RUFFRTtBQUNGO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFFVSxzQkFBc0I7QUFDaEM7QUFFQTtFQUVVLG1CQUFtQjtBQUM3QjtBQUVBOzs7OztFQUtFLGdJQUFnSTtBQUNsSTtBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHdDQUF3QztBQUMxQztBQUVBO0VBSUUsYUFBYTtFQUlMLG1CQUFtQjtBQUM3QjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFFVSwyQkFBMkI7QUFDckM7QUFFQSwwQkFBMEI7QUFDMUI7RUFFVSwrR0FBK0c7QUFDekg7QUFFQTtFQUVVLCtHQUErRztBQUN6SDtBQUVBLDBCQUEwQjtBQUMxQjtFQUVVLGdIQUFnSDtBQUMxSDtBQUVBLDJCQUEyQjtBQUMzQjtFQUVVLHFIQUFxSDtBQUMvSDtBQUVBLG1CQUFtQjtBQUNuQjtFQUVVLHVIQUF1SDtBQUNqSTtBQUVBLG1CQUFtQjtBQUNuQjtFQUVVLHdIQUF3SDtBQUNsSTtBQUVBO0VBR0UsMkJBQTJCO0FBRTdCO0FBRUE7RUFFVSw2RUFBNkU7QUFDdkY7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7O21CQUVtQjtBQUNuQjtFQUNFLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7QUFFQTs7RUFFRSx5QkFBeUI7VUFHakIsaUJBQWlCO0FBQzNCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGNBQWM7RUFDZCxZQUFZO0VBRUosc0JBQXNCO0FBQ2hDO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osNEJBQTRCO0FBQzlCO0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjtBQUVBLG1GQUFtRjtBQUNuRjtFQUNFLGtDQUFrQztFQUcxQiw2QkFBNkI7QUFDdkM7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsVUFBVTtBQUNaO0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGO0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiO0FBRUE7RUFDRSxXQUFXO0VBRUgsc0JBQXNCO0VBQzlCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsV0FBVztBQUNiO0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsV0FBVztBQUNiO0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsV0FBVztBQUNiO0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsV0FBVztBQUNiO0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixXQUFXO0FBQ2I7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxTQUFTO0FBQ1g7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxTQUFTO0FBQ1g7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxTQUFTO0FBQ1g7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFO0lBQ0Usb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsV0FBVztFQUNiO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0VBQ2I7RUFDQTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFdBQVc7RUFDYjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsV0FBVztFQUNiO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0VBQ2I7RUFDQTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFdBQVc7RUFDYjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsV0FBVztFQUNiO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0VBQ2I7RUFDQTtJQUNFLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFdBQVc7RUFDYjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsV0FBVztFQUNiO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFdBQVc7RUFDYjtFQUNBO0lBQ0UsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFNBQVM7RUFDWDtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsMkJBQTJCO0VBQzdCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGO0FBRUE7RUFDRTtJQUNFLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFdBQVc7RUFDYjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsV0FBVztFQUNiO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0VBQ2I7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFdBQVc7RUFDYjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsV0FBVztFQUNiO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0VBQ2I7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFdBQVc7RUFDYjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsV0FBVztFQUNiO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0VBQ2I7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFdBQVc7RUFDYjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsV0FBVztFQUNiO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0VBQ2I7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLDJCQUEyQjtFQUM3QjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxvQkFBb0I7RUFDdEI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7QUFDRjtBQUVBO0VBQ0U7SUFDRSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0VBQ2I7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFdBQVc7RUFDYjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsV0FBVztFQUNiO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0VBQ2I7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFdBQVc7RUFDYjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsV0FBVztFQUNiO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0VBQ2I7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFdBQVc7RUFDYjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsV0FBVztFQUNiO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixXQUFXO0VBQ2I7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsV0FBVztFQUNiO0VBQ0E7SUFDRSwwQkFBMEI7RUFDNUI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFVBQVU7RUFDWjtFQUNBO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSwyQkFBMkI7RUFDN0I7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFFBQVE7RUFDUixPQUFPO0VBQ1AsVUFBVTtBQUNaO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7QUFFQTtFQUNFLFdBQVc7QUFDYjtBQUVBOzs7RUFHRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsVUFBVTtBQUNaO0FBRUE7RUFDRSxTQUFTO0VBRUQsMkJBQTJCO0FBQ3JDO0FBRUE7RUFDRTtJQUNFLFNBQVM7SUFFRCwyQkFBMkI7RUFDckM7RUFDQTtJQUNFLFVBQVU7SUFFRixlQUFlO0VBQ3pCO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGFBQWE7SUFDYixVQUFVO0VBQ1o7QUFDRjtBQUVBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7QUFDWjtBQUVBOzs7RUFHRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFFQTtFQUNFLFNBQVM7QUFDWDtBQUVBO0VBRUUsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxVQUFVO0FBQ1o7QUFFQTtFQUNFLG9DQUFvQztBQUN0QztBQUVBO0VBRUUsZ0NBQWdDO0VBQ2hDLGVBQWU7RUFDZixXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsU0FBUztFQUNULFlBQVk7QUFDZDtBQUVBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0VBRUosZ0JBQWdCO0FBQzFCO0FBRUE7RUFDRSxNQUFNO0VBQ04sT0FBTztBQUNUO0FBRUE7RUFDRSwrQkFBK0I7RUFFL0IscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtBQUNkO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QjtBQU1BOztlQUVlO0FBQ2Y7RUFDRSxlQUFlO0FBQ2pCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiw4QkFBOEI7QUFDaEM7QUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osT0FBTztFQUNQLE1BQU07RUFDTixTQUFTO0VBRUQsNEJBQTRCO0VBQ3BDLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsbUNBQW1DO1VBQzNCLDJCQUEyQjtFQUUzQiw0QkFBNEI7QUFDdEM7QUFFQTtFQUNFLFFBQVE7RUFFQSwyQkFBMkI7RUFDbkMsVUFBVTtFQUVGLDJCQUEyQjtBQUNyQztBQUVBO0VBQ0UsU0FBUztBQUNYO0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFFQTtFQUNFLHFDQUFxQztBQUN2QztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7OztFQUdFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsMEJBQTBCO0FBQzVCO0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtBQUNaO0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLFdBQVc7QUFDYjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFDYjtBQUVBOztFQUVFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLE1BQU07RUFDTixZQUFZO0FBQ2Q7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsUUFBUTtBQUNWO0FBRUE7RUFDRSxPQUFPO0VBRUMsd0JBQXdCO0VBQ2hDLGVBQWU7QUFDakI7QUFFQTtFQUNFLFFBQVE7RUFDUixVQUFVO0FBQ1o7QUFFQTtFQUNFO0lBRVUsNEJBQTRCO0VBQ3RDO0VBQ0E7SUFFVSwyQkFBMkI7RUFDckM7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtBQUNGO0FBRUE7O0VBRUUseUJBQXlCO0FBQzNCO0FBRUE7O0VBRUUsV0FBVztBQUNiO0FBRUE7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixVQUFVO0VBQ1YsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBY0E7RUFDRTtJQUVVLHlCQUF5QjtFQUNuQztFQUNBO0lBRVUsd0JBQXdCO0VBQ2xDO0VBQ0E7SUFFVSx5QkFBeUI7RUFDbkM7QUFDRjtBQWNBO0VBQ0U7SUFFVSwwQkFBMEI7RUFDcEM7RUFDQTtJQUVVLHVCQUF1QjtFQUNqQztFQUNBO0lBRVUsMEJBQTBCO0VBQ3BDO0FBQ0Y7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6Im5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vKipcclxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUuXHJcbiAqL1xyXG50ZW1wbGF0ZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLyogSGlkZGVuXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi8qKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC0uXHJcbiAqL1xyXG5baGlkZGVuXSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogaW5oZXJpdDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbn1cclxuXHJcbmJ1dHRvbixcclxuaW5wdXQsXHJcbm9wdGdyb3VwLFxyXG5zZWxlY3QsXHJcbnRleHRhcmVhIHtcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLVNhbnMsIFVidW50dSwgQ2FudGFyZWxsLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbnVsOm5vdCguYnJvd3Nlci1kZWZhdWx0KSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxudWw6bm90KC5icm93c2VyLWRlZmF1bHQpID4gbGkge1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6ICMwMzliZTU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi52YWxpZ24td3JhcHBlciB7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcclxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2xlYXJmaXgge1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uei1kZXB0aC0wIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogMmRwIGVsZXZhdGlvbiBtb2RpZmllZCovXHJcbi56LWRlcHRoLTEsIG5hdiwgLmNhcmQtcGFuZWwsIC5jYXJkLCAudG9hc3QsIC5idG4sIC5idG4tbGFyZ2UsIC5idG4tc21hbGwsIC5idG4tZmxvYXRpbmcsIC5kcm9wZG93bi1jb250ZW50LCAuY29sbGFwc2libGUsIC5zaWRlbmF2IHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLnotZGVwdGgtMS1oYWxmLCAuYnRuOmhvdmVyLCAuYnRuLWxhcmdlOmhvdmVyLCAuYnRuLXNtYWxsOmhvdmVyLCAuYnRuLWZsb2F0aW5nOmhvdmVyIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDdweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgM3B4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDdweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgM3B4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLyogNmRwIGVsZXZhdGlvbiBtb2RpZmllZCovXHJcbi56LWRlcHRoLTIge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCA0cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi8qIDEyZHAgZWxldmF0aW9uIG1vZGlmaWVkKi9cclxuLnotZGVwdGgtMyB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDhweCAxN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDhweCAxN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuXHJcbi8qIDE2ZHAgZWxldmF0aW9uICovXHJcbi56LWRlcHRoLTQge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgNnB4IDMwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgOHB4IDEwcHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLyogMjRkcCBlbGV2YXRpb24gKi9cclxuLnotZGVwdGgtNSwgLm1vZGFsIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMjRweCAzOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMjRweCAzOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLmhvdmVyYWJsZSB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LWJveC1zaGFkb3cgLjI1cztcclxuICB0cmFuc2l0aW9uOiAtd2Via2l0LWJveC1zaGFkb3cgLjI1cztcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IC4yNXM7XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAuMjVzLCAtd2Via2l0LWJveC1zaGFkb3cgLjI1cztcclxufVxyXG5cclxuLmhvdmVyYWJsZTpob3ZlciB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDhweCAxN3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDE3cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcblxyXG4uZGl2aWRlciB7XHJcbiAgaGVpZ2h0OiAxcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xyXG59XHJcblxyXG5ibG9ja3F1b3RlIHtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBwYWRkaW5nLWxlZnQ6IDEuNXJlbTtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICNlZTZlNzM7XHJcbn1cclxuXHJcbmkge1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcblxyXG5pLmxlZnQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuaS5yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG5pLnRpbnkge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuaS5zbWFsbCB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG59XHJcblxyXG5pLm1lZGl1bSB7XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG59XHJcblxyXG5pLmxhcmdlIHtcclxuICBmb250LXNpemU6IDZyZW07XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqXHJcbiAgVXRpbGl0eSBDbGFzc2VzXHJcbioqKioqKioqKioqKioqKioqKiovXHJcbi5oaWRlIHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5sZWZ0LWFsaWduIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ucmlnaHQtYWxpZ24ge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uY2VudGVyLCAuY2VudGVyLWFsaWduIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sZWZ0IHtcclxuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucmlnaHQge1xyXG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubm8tc2VsZWN0LCBpbnB1dFt0eXBlPXJhbmdlXSxcclxuaW5wdXRbdHlwZT1yYW5nZV0gKyAudGh1bWIge1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5jaXJjbGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmNlbnRlci1ibG9jayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4udHJ1bmNhdGUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLm5vLXBhZGRpbmcge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuc3Bhbi5iYWRnZSB7XHJcbiAgbWluLXdpZHRoOiAzcmVtO1xyXG4gIHBhZGRpbmc6IDAgNnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG4gIGNvbG9yOiAjNzU3NTc1O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5zcGFuLmJhZGdlLm5ldyB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZhNjlhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuc3Bhbi5iYWRnZS5uZXc6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIG5ld1wiO1xyXG59XHJcblxyXG5zcGFuLmJhZGdlW2RhdGEtYmFkZ2UtY2FwdGlvbl06OmFmdGVyIHtcclxuICBjb250ZW50OiBcIiBcIiBhdHRyKGRhdGEtYmFkZ2UtY2FwdGlvbik7XHJcbn1cclxuXHJcbm5hdiB1bCBhIHNwYW4uYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmbG9hdDogbm9uZTtcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIGhlaWdodDogMjJweDtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xyXG59XHJcblxyXG4uY29sbGVjdGlvbi1pdGVtIHNwYW4uYmFkZ2Uge1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoMC43NXJlbSAtIDExcHgpO1xyXG59XHJcblxyXG4uY29sbGFwc2libGUgc3Bhbi5iYWRnZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5zaWRlbmF2IHNwYW4uYmFkZ2Uge1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoMjRweCAtIDExcHgpO1xyXG59XHJcblxyXG50YWJsZSBzcGFuLmJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi8qIFRoaXMgaXMgbmVlZGVkIGZvciBzb21lIG1vYmlsZSBwaG9uZXMgdG8gZGlzcGxheSB0aGUgR29vZ2xlIEljb24gZm9udCBwcm9wZXJseSAqL1xyXG4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcbiAgLXdlYmtpdC1mb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcclxuICAgICAtbW96LWZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnO1xyXG4gICAgICAgICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogMTI4MHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5M3B4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbCAucm93IHtcclxuICBtYXJnaW4tbGVmdDogLTAuNzVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMC43NXJlbTtcclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uc2VjdGlvbi5uby1wYWQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5zZWN0aW9uLm5vLXBhZC1ib3Qge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG4uc2VjdGlvbi5uby1wYWQtdG9wIHtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5yb3c6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5yb3cgLmNvbCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAwIDAuNzVyZW07XHJcbiAgbWluLWhlaWdodDogMXB4O1xyXG59XHJcblxyXG4ucm93IC5jb2xbY2xhc3MqPVwicHVzaC1cIl0sIC5yb3cgLmNvbFtjbGFzcyo9XCJwdWxsLVwiXSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucm93IC5jb2wuczEge1xyXG4gIHdpZHRoOiA4LjMzMzMzMzMzMzMlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5yb3cgLmNvbC5zMiB7XHJcbiAgd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5yb3cgLmNvbC5zMyB7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBsZWZ0OiBhdXRvO1xyXG4gIHJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ucm93IC5jb2wuczQge1xyXG4gIHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBsZWZ0OiBhdXRvO1xyXG4gIHJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ucm93IC5jb2wuczUge1xyXG4gIHdpZHRoOiA0MS42NjY2NjY2NjY3JTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBsZWZ0OiBhdXRvO1xyXG4gIHJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ucm93IC5jb2wuczYge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbGVmdDogYXV0bztcclxuICByaWdodDogYXV0bztcclxufVxyXG5cclxuLnJvdyAuY29sLnM3IHtcclxuICB3aWR0aDogNTguMzMzMzMzMzMzMyU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbGVmdDogYXV0bztcclxuICByaWdodDogYXV0bztcclxufVxyXG5cclxuLnJvdyAuY29sLnM4IHtcclxuICB3aWR0aDogNjYuNjY2NjY2NjY2NyU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbGVmdDogYXV0bztcclxuICByaWdodDogYXV0bztcclxufVxyXG5cclxuLnJvdyAuY29sLnM5IHtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5yb3cgLmNvbC5zMTAge1xyXG4gIHdpZHRoOiA4My4zMzMzMzMzMzMzJTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBsZWZ0OiBhdXRvO1xyXG4gIHJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ucm93IC5jb2wuczExIHtcclxuICB3aWR0aDogOTEuNjY2NjY2NjY2NyU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbGVmdDogYXV0bztcclxuICByaWdodDogYXV0bztcclxufVxyXG5cclxuLnJvdyAuY29sLnMxMiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbGVmdDogYXV0bztcclxuICByaWdodDogYXV0bztcclxufVxyXG5cclxuLnJvdyAuY29sLm9mZnNldC1zMSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMzMyU7XHJcbn1cclxuXHJcbi5yb3cgLmNvbC5wdWxsLXMxIHtcclxuICByaWdodDogOC4zMzMzMzMzMzMzJTtcclxufVxyXG5cclxuLnJvdyAuY29sLnB1c2gtczEge1xyXG4gIGxlZnQ6IDguMzMzMzMzMzMzMyU7XHJcbn1cclxuXHJcbi5yb3cgLmNvbC5vZmZzZXQtczIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NjY3JTtcclxufVxyXG5cclxuLnJvdyAuY29sLnB1bGwtczIge1xyXG4gIHJpZ2h0OiAxNi42NjY2NjY2NjY3JTtcclxufVxyXG5cclxuLnJvdyAuY29sLnB1c2gtczIge1xyXG4gIGxlZnQ6IDE2LjY2NjY2NjY2NjclO1xyXG59XHJcblxyXG4ucm93IC5jb2wub2Zmc2V0LXMzIHtcclxuICBtYXJnaW4tbGVmdDogMjUlO1xyXG59XHJcblxyXG4ucm93IC5jb2wucHVsbC1zMyB7XHJcbiAgcmlnaHQ6IDI1JTtcclxufVxyXG5cclxuLnJvdyAuY29sLnB1c2gtczMge1xyXG4gIGxlZnQ6IDI1JTtcclxufVxyXG5cclxuLnJvdyAuY29sLm9mZnNldC1zNCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzMzMlO1xyXG59XHJcblxyXG4ucm93IC5jb2wucHVsbC1zNCB7XHJcbiAgcmlnaHQ6IDMzLjMzMzMzMzMzMzMlO1xyXG59XHJcblxyXG4ucm93IC5jb2wucHVzaC1zNCB7XHJcbiAgbGVmdDogMzMuMzMzMzMzMzMzMyU7XHJcbn1cclxuXHJcbi5yb3cgLmNvbC5vZmZzZXQtczUge1xyXG4gIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NjY3JTtcclxufVxyXG5cclxuLnJvdyAuY29sLnB1bGwtczUge1xyXG4gIHJpZ2h0OiA0MS42NjY2NjY2NjY3JTtcclxufVxyXG5cclxuLnJvdyAuY29sLnB1c2gtczUge1xyXG4gIGxlZnQ6IDQxLjY2NjY2NjY2NjclO1xyXG59XHJcblxyXG4ucm93IC5jb2wub2Zmc2V0LXM2IHtcclxuICBtYXJnaW4tbGVmdDogNTAlO1xyXG59XHJcblxyXG4ucm93IC5jb2wucHVsbC1zNiB7XHJcbiAgcmlnaHQ6IDUwJTtcclxufVxyXG5cclxuLnJvdyAuY29sLnB1c2gtczYge1xyXG4gIGxlZnQ6IDUwJTtcclxufVxyXG5cclxuLnJvdyAuY29sLm9mZnNldC1zNyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzMzMlO1xyXG59XHJcblxyXG4ucm93IC5jb2wucHVsbC1zNyB7XHJcbiAgcmlnaHQ6IDU4LjMzMzMzMzMzMzMlO1xyXG59XHJcblxyXG4ucm93IC5jb2wucHVzaC1zNyB7XHJcbiAgbGVmdDogNTguMzMzMzMzMzMzMyU7XHJcbn1cclxuXHJcbi5yb3cgLmNvbC5vZmZzZXQtczgge1xyXG4gIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NjY3JTtcclxufVxyXG5cclxuLnJvdyAuY29sLnB1bGwtczgge1xyXG4gIHJpZ2h0OiA2Ni42NjY2NjY2NjY3JTtcclxufVxyXG5cclxuLnJvdyAuY29sLnB1c2gtczgge1xyXG4gIGxlZnQ6IDY2LjY2NjY2NjY2NjclO1xyXG59XHJcblxyXG4ucm93IC5jb2wub2Zmc2V0LXM5IHtcclxuICBtYXJnaW4tbGVmdDogNzUlO1xyXG59XHJcblxyXG4ucm93IC5jb2wucHVsbC1zOSB7XHJcbiAgcmlnaHQ6IDc1JTtcclxufVxyXG5cclxuLnJvdyAuY29sLnB1c2gtczkge1xyXG4gIGxlZnQ6IDc1JTtcclxufVxyXG5cclxuLnJvdyAuY29sLm9mZnNldC1zMTAge1xyXG4gIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMzMzJTtcclxufVxyXG5cclxuLnJvdyAuY29sLnB1bGwtczEwIHtcclxuICByaWdodDogODMuMzMzMzMzMzMzMyU7XHJcbn1cclxuXHJcbi5yb3cgLmNvbC5wdXNoLXMxMCB7XHJcbiAgbGVmdDogODMuMzMzMzMzMzMzMyU7XHJcbn1cclxuXHJcbi5yb3cgLmNvbC5vZmZzZXQtczExIHtcclxuICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjY2NyU7XHJcbn1cclxuXHJcbi5yb3cgLmNvbC5wdWxsLXMxMSB7XHJcbiAgcmlnaHQ6IDkxLjY2NjY2NjY2NjclO1xyXG59XHJcblxyXG4ucm93IC5jb2wucHVzaC1zMTEge1xyXG4gIGxlZnQ6IDkxLjY2NjY2NjY2NjclO1xyXG59XHJcblxyXG4ucm93IC5jb2wub2Zmc2V0LXMxMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwMCU7XHJcbn1cclxuXHJcbi5yb3cgLmNvbC5wdWxsLXMxMiB7XHJcbiAgcmlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5yb3cgLmNvbC5wdXNoLXMxMiB7XHJcbiAgbGVmdDogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDFweCkge1xyXG4gIC5yb3cgLmNvbC5tMSB7XHJcbiAgICB3aWR0aDogOC4zMzMzMzMzMzMzJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAucm93IC5jb2wubTIge1xyXG4gICAgd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5tMyB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5tNCB7XHJcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogYXV0bztcclxuICB9XHJcbiAgLnJvdyAuY29sLm01IHtcclxuICAgIHdpZHRoOiA0MS42NjY2NjY2NjY3JTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAucm93IC5jb2wubTYge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAucm93IC5jb2wubTcge1xyXG4gICAgd2lkdGg6IDU4LjMzMzMzMzMzMzMlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5tOCB7XHJcbiAgICB3aWR0aDogNjYuNjY2NjY2NjY2NyU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogYXV0bztcclxuICB9XHJcbiAgLnJvdyAuY29sLm05IHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogYXV0bztcclxuICB9XHJcbiAgLnJvdyAuY29sLm0xMCB7XHJcbiAgICB3aWR0aDogODMuMzMzMzMzMzMzMyU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogYXV0bztcclxuICB9XHJcbiAgLnJvdyAuY29sLm0xMSB7XHJcbiAgICB3aWR0aDogOTEuNjY2NjY2NjY2NyU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogYXV0bztcclxuICB9XHJcbiAgLnJvdyAuY29sLm0xMiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAucm93IC5jb2wub2Zmc2V0LW0xIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzMzMlO1xyXG4gIH1cclxuICAucm93IC5jb2wucHVsbC1tMSB7XHJcbiAgICByaWdodDogOC4zMzMzMzMzMzMzJTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1c2gtbTEge1xyXG4gICAgbGVmdDogOC4zMzMzMzMzMzMzJTtcclxuICB9XHJcbiAgLnJvdyAuY29sLm9mZnNldC1tMiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjY2NyU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5wdWxsLW0yIHtcclxuICAgIHJpZ2h0OiAxNi42NjY2NjY2NjY3JTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1c2gtbTIge1xyXG4gICAgbGVmdDogMTYuNjY2NjY2NjY2NyU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5vZmZzZXQtbTMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1bGwtbTMge1xyXG4gICAgcmlnaHQ6IDI1JTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1c2gtbTMge1xyXG4gICAgbGVmdDogMjUlO1xyXG4gIH1cclxuICAucm93IC5jb2wub2Zmc2V0LW00IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMzMzJTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1bGwtbTQge1xyXG4gICAgcmlnaHQ6IDMzLjMzMzMzMzMzMzMlO1xyXG4gIH1cclxuICAucm93IC5jb2wucHVzaC1tNCB7XHJcbiAgICBsZWZ0OiAzMy4zMzMzMzMzMzMzJTtcclxuICB9XHJcbiAgLnJvdyAuY29sLm9mZnNldC1tNSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjY2NyU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5wdWxsLW01IHtcclxuICAgIHJpZ2h0OiA0MS42NjY2NjY2NjY3JTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1c2gtbTUge1xyXG4gICAgbGVmdDogNDEuNjY2NjY2NjY2NyU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5vZmZzZXQtbTYge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1bGwtbTYge1xyXG4gICAgcmlnaHQ6IDUwJTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1c2gtbTYge1xyXG4gICAgbGVmdDogNTAlO1xyXG4gIH1cclxuICAucm93IC5jb2wub2Zmc2V0LW03IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMzMzJTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1bGwtbTcge1xyXG4gICAgcmlnaHQ6IDU4LjMzMzMzMzMzMzMlO1xyXG4gIH1cclxuICAucm93IC5jb2wucHVzaC1tNyB7XHJcbiAgICBsZWZ0OiA1OC4zMzMzMzMzMzMzJTtcclxuICB9XHJcbiAgLnJvdyAuY29sLm9mZnNldC1tOCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjY2NyU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5wdWxsLW04IHtcclxuICAgIHJpZ2h0OiA2Ni42NjY2NjY2NjY3JTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1c2gtbTgge1xyXG4gICAgbGVmdDogNjYuNjY2NjY2NjY2NyU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5vZmZzZXQtbTkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1bGwtbTkge1xyXG4gICAgcmlnaHQ6IDc1JTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1c2gtbTkge1xyXG4gICAgbGVmdDogNzUlO1xyXG4gIH1cclxuICAucm93IC5jb2wub2Zmc2V0LW0xMCB7XHJcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMzMyU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5wdWxsLW0xMCB7XHJcbiAgICByaWdodDogODMuMzMzMzMzMzMzMyU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5wdXNoLW0xMCB7XHJcbiAgICBsZWZ0OiA4My4zMzMzMzMzMzMzJTtcclxuICB9XHJcbiAgLnJvdyAuY29sLm9mZnNldC1tMTEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY2NjclO1xyXG4gIH1cclxuICAucm93IC5jb2wucHVsbC1tMTEge1xyXG4gICAgcmlnaHQ6IDkxLjY2NjY2NjY2NjclO1xyXG4gIH1cclxuICAucm93IC5jb2wucHVzaC1tMTEge1xyXG4gICAgbGVmdDogOTEuNjY2NjY2NjY2NyU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5vZmZzZXQtbTEyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xyXG4gIH1cclxuICAucm93IC5jb2wucHVsbC1tMTIge1xyXG4gICAgcmlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5wdXNoLW0xMiB7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTNweCkge1xyXG4gIC5yb3cgLmNvbC5sMSB7XHJcbiAgICB3aWR0aDogOC4zMzMzMzMzMzMzJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAucm93IC5jb2wubDIge1xyXG4gICAgd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5sMyB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5sNCB7XHJcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMzMyU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogYXV0bztcclxuICB9XHJcbiAgLnJvdyAuY29sLmw1IHtcclxuICAgIHdpZHRoOiA0MS42NjY2NjY2NjY3JTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAucm93IC5jb2wubDYge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAucm93IC5jb2wubDcge1xyXG4gICAgd2lkdGg6IDU4LjMzMzMzMzMzMzMlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5sOCB7XHJcbiAgICB3aWR0aDogNjYuNjY2NjY2NjY2NyU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogYXV0bztcclxuICB9XHJcbiAgLnJvdyAuY29sLmw5IHtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogYXV0bztcclxuICB9XHJcbiAgLnJvdyAuY29sLmwxMCB7XHJcbiAgICB3aWR0aDogODMuMzMzMzMzMzMzMyU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogYXV0bztcclxuICB9XHJcbiAgLnJvdyAuY29sLmwxMSB7XHJcbiAgICB3aWR0aDogOTEuNjY2NjY2NjY2NyU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogYXV0bztcclxuICB9XHJcbiAgLnJvdyAuY29sLmwxMiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAucm93IC5jb2wub2Zmc2V0LWwxIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4LjMzMzMzMzMzMzMlO1xyXG4gIH1cclxuICAucm93IC5jb2wucHVsbC1sMSB7XHJcbiAgICByaWdodDogOC4zMzMzMzMzMzMzJTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1c2gtbDEge1xyXG4gICAgbGVmdDogOC4zMzMzMzMzMzMzJTtcclxuICB9XHJcbiAgLnJvdyAuY29sLm9mZnNldC1sMiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjY2NyU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5wdWxsLWwyIHtcclxuICAgIHJpZ2h0OiAxNi42NjY2NjY2NjY3JTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1c2gtbDIge1xyXG4gICAgbGVmdDogMTYuNjY2NjY2NjY2NyU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5vZmZzZXQtbDMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1bGwtbDMge1xyXG4gICAgcmlnaHQ6IDI1JTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1c2gtbDMge1xyXG4gICAgbGVmdDogMjUlO1xyXG4gIH1cclxuICAucm93IC5jb2wub2Zmc2V0LWw0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMzMzJTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1bGwtbDQge1xyXG4gICAgcmlnaHQ6IDMzLjMzMzMzMzMzMzMlO1xyXG4gIH1cclxuICAucm93IC5jb2wucHVzaC1sNCB7XHJcbiAgICBsZWZ0OiAzMy4zMzMzMzMzMzMzJTtcclxuICB9XHJcbiAgLnJvdyAuY29sLm9mZnNldC1sNSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjY2NyU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5wdWxsLWw1IHtcclxuICAgIHJpZ2h0OiA0MS42NjY2NjY2NjY3JTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1c2gtbDUge1xyXG4gICAgbGVmdDogNDEuNjY2NjY2NjY2NyU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5vZmZzZXQtbDYge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1bGwtbDYge1xyXG4gICAgcmlnaHQ6IDUwJTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1c2gtbDYge1xyXG4gICAgbGVmdDogNTAlO1xyXG4gIH1cclxuICAucm93IC5jb2wub2Zmc2V0LWw3IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMzMzJTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1bGwtbDcge1xyXG4gICAgcmlnaHQ6IDU4LjMzMzMzMzMzMzMlO1xyXG4gIH1cclxuICAucm93IC5jb2wucHVzaC1sNyB7XHJcbiAgICBsZWZ0OiA1OC4zMzMzMzMzMzMzJTtcclxuICB9XHJcbiAgLnJvdyAuY29sLm9mZnNldC1sOCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNjYuNjY2NjY2NjY2NyU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5wdWxsLWw4IHtcclxuICAgIHJpZ2h0OiA2Ni42NjY2NjY2NjY3JTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1c2gtbDgge1xyXG4gICAgbGVmdDogNjYuNjY2NjY2NjY2NyU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5vZmZzZXQtbDkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1bGwtbDkge1xyXG4gICAgcmlnaHQ6IDc1JTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1c2gtbDkge1xyXG4gICAgbGVmdDogNzUlO1xyXG4gIH1cclxuICAucm93IC5jb2wub2Zmc2V0LWwxMCB7XHJcbiAgICBtYXJnaW4tbGVmdDogODMuMzMzMzMzMzMzMyU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5wdWxsLWwxMCB7XHJcbiAgICByaWdodDogODMuMzMzMzMzMzMzMyU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5wdXNoLWwxMCB7XHJcbiAgICBsZWZ0OiA4My4zMzMzMzMzMzMzJTtcclxuICB9XHJcbiAgLnJvdyAuY29sLm9mZnNldC1sMTEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY2NjclO1xyXG4gIH1cclxuICAucm93IC5jb2wucHVsbC1sMTEge1xyXG4gICAgcmlnaHQ6IDkxLjY2NjY2NjY2NjclO1xyXG4gIH1cclxuICAucm93IC5jb2wucHVzaC1sMTEge1xyXG4gICAgbGVmdDogOTEuNjY2NjY2NjY2NyU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5vZmZzZXQtbDEyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDAlO1xyXG4gIH1cclxuICAucm93IC5jb2wucHVsbC1sMTIge1xyXG4gICAgcmlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5wdXNoLWwxMiB7XHJcbiAgICBsZWZ0OiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAxcHgpIHtcclxuICAucm93IC5jb2wueGwxIHtcclxuICAgIHdpZHRoOiA4LjMzMzMzMzMzMzMlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC54bDIge1xyXG4gICAgd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC54bDMge1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAucm93IC5jb2wueGw0IHtcclxuICAgIHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAucm93IC5jb2wueGw1IHtcclxuICAgIHdpZHRoOiA0MS42NjY2NjY2NjY3JTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAucm93IC5jb2wueGw2IHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogYXV0bztcclxuICB9XHJcbiAgLnJvdyAuY29sLnhsNyB7XHJcbiAgICB3aWR0aDogNTguMzMzMzMzMzMzMyU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogYXV0bztcclxuICB9XHJcbiAgLnJvdyAuY29sLnhsOCB7XHJcbiAgICB3aWR0aDogNjYuNjY2NjY2NjY2NyU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogYXV0bztcclxuICB9XHJcbiAgLnJvdyAuY29sLnhsOSB7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC54bDEwIHtcclxuICAgIHdpZHRoOiA4My4zMzMzMzMzMzMzJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAucm93IC5jb2wueGwxMSB7XHJcbiAgICB3aWR0aDogOTEuNjY2NjY2NjY2NyU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogYXV0bztcclxuICB9XHJcbiAgLnJvdyAuY29sLnhsMTIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIGxlZnQ6IGF1dG87XHJcbiAgICByaWdodDogYXV0bztcclxuICB9XHJcbiAgLnJvdyAuY29sLm9mZnNldC14bDEge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMzMyU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5wdWxsLXhsMSB7XHJcbiAgICByaWdodDogOC4zMzMzMzMzMzMzJTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1c2gteGwxIHtcclxuICAgIGxlZnQ6IDguMzMzMzMzMzMzMyU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5vZmZzZXQteGwyIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NjY3JTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1bGwteGwyIHtcclxuICAgIHJpZ2h0OiAxNi42NjY2NjY2NjY3JTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1c2gteGwyIHtcclxuICAgIGxlZnQ6IDE2LjY2NjY2NjY2NjclO1xyXG4gIH1cclxuICAucm93IC5jb2wub2Zmc2V0LXhsMyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gIH1cclxuICAucm93IC5jb2wucHVsbC14bDMge1xyXG4gICAgcmlnaHQ6IDI1JTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1c2gteGwzIHtcclxuICAgIGxlZnQ6IDI1JTtcclxuICB9XHJcbiAgLnJvdyAuY29sLm9mZnNldC14bDQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzMzMlO1xyXG4gIH1cclxuICAucm93IC5jb2wucHVsbC14bDQge1xyXG4gICAgcmlnaHQ6IDMzLjMzMzMzMzMzMzMlO1xyXG4gIH1cclxuICAucm93IC5jb2wucHVzaC14bDQge1xyXG4gICAgbGVmdDogMzMuMzMzMzMzMzMzMyU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5vZmZzZXQteGw1IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NjY3JTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1bGwteGw1IHtcclxuICAgIHJpZ2h0OiA0MS42NjY2NjY2NjY3JTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1c2gteGw1IHtcclxuICAgIGxlZnQ6IDQxLjY2NjY2NjY2NjclO1xyXG4gIH1cclxuICAucm93IC5jb2wub2Zmc2V0LXhsNiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gIH1cclxuICAucm93IC5jb2wucHVsbC14bDYge1xyXG4gICAgcmlnaHQ6IDUwJTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1c2gteGw2IHtcclxuICAgIGxlZnQ6IDUwJTtcclxuICB9XHJcbiAgLnJvdyAuY29sLm9mZnNldC14bDcge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzMzMlO1xyXG4gIH1cclxuICAucm93IC5jb2wucHVsbC14bDcge1xyXG4gICAgcmlnaHQ6IDU4LjMzMzMzMzMzMzMlO1xyXG4gIH1cclxuICAucm93IC5jb2wucHVzaC14bDcge1xyXG4gICAgbGVmdDogNTguMzMzMzMzMzMzMyU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5vZmZzZXQteGw4IHtcclxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NjY3JTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1bGwteGw4IHtcclxuICAgIHJpZ2h0OiA2Ni42NjY2NjY2NjY3JTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1c2gteGw4IHtcclxuICAgIGxlZnQ6IDY2LjY2NjY2NjY2NjclO1xyXG4gIH1cclxuICAucm93IC5jb2wub2Zmc2V0LXhsOSB7XHJcbiAgICBtYXJnaW4tbGVmdDogNzUlO1xyXG4gIH1cclxuICAucm93IC5jb2wucHVsbC14bDkge1xyXG4gICAgcmlnaHQ6IDc1JTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1c2gteGw5IHtcclxuICAgIGxlZnQ6IDc1JTtcclxuICB9XHJcbiAgLnJvdyAuY29sLm9mZnNldC14bDEwIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMzMzJTtcclxuICB9XHJcbiAgLnJvdyAuY29sLnB1bGwteGwxMCB7XHJcbiAgICByaWdodDogODMuMzMzMzMzMzMzMyU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5wdXNoLXhsMTAge1xyXG4gICAgbGVmdDogODMuMzMzMzMzMzMzMyU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5vZmZzZXQteGwxMSB7XHJcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjY2NyU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5wdWxsLXhsMTEge1xyXG4gICAgcmlnaHQ6IDkxLjY2NjY2NjY2NjclO1xyXG4gIH1cclxuICAucm93IC5jb2wucHVzaC14bDExIHtcclxuICAgIGxlZnQ6IDkxLjY2NjY2NjY2NjclO1xyXG4gIH1cclxuICAucm93IC5jb2wub2Zmc2V0LXhsMTIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5wdWxsLXhsMTIge1xyXG4gICAgcmlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC5yb3cgLmNvbC5wdXNoLXhsMTIge1xyXG4gICAgbGVmdDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbm5hdiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlNmU3MztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDAlO1xyXG4gIHRvcDogMCU7XHJcbiAgei1pbmRleDogODtcclxufVxyXG5cclxubmF2Lm5hdi1leHRlbmRlZCB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5uYXYubmF2LWV4dGVuZGVkIC5uYXYtd3JhcHBlciB7XHJcbiAgbWluLWhlaWdodDogNTZweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbm5hdi5uYXYtZXh0ZW5kZWQgLm5hdi1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxubmF2IGEge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5uYXYgaSxcclxubmF2IFtjbGFzc149XCJtZGktXCJdLCBuYXYgW2NsYXNzKj1cIm1kaS1cIl0sXHJcbm5hdiBpLm1hdGVyaWFsLWljb25zIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA1NnB4O1xyXG59XHJcblxyXG5uYXYgLm5hdi13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5M3B4KSB7XHJcbiAgbmF2IGEuc2lkZW5hdi10cmlnZ2VyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5uYXYgLnNpZGVuYXYtdHJpZ2dlciB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIG1hcmdpbjogMCAxOHB4O1xyXG59XHJcblxyXG5uYXYgLnNpZGVuYXYtdHJpZ2dlciBpIHtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDU2cHg7XHJcbn1cclxuXHJcbm5hdiAuYnJhbmQtbG9nbyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxubmF2IC5icmFuZC1sb2dvLmNlbnRlciB7XHJcbiAgbGVmdDogNTAlO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgbmF2IC5icmFuZC1sb2dvIHtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgfVxyXG4gIG5hdiAuYnJhbmQtbG9nby5sZWZ0LCBuYXYgLmJyYW5kLWxvZ28ucmlnaHQge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG4gIG5hdiAuYnJhbmQtbG9nby5sZWZ0IHtcclxuICAgIGxlZnQ6IDAuNXJlbTtcclxuICB9XHJcbiAgbmF2IC5icmFuZC1sb2dvLnJpZ2h0IHtcclxuICAgIHJpZ2h0OiAwLjVyZW07XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxubmF2IC5icmFuZC1sb2dvLnJpZ2h0IHtcclxuICByaWdodDogMC41cmVtO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbm5hdiAuYnJhbmQtbG9nbyBpLFxyXG5uYXYgLmJyYW5kLWxvZ28gW2NsYXNzXj1cIm1kaS1cIl0sIG5hdiAuYnJhbmQtbG9nbyBbY2xhc3MqPVwibWRpLVwiXSxcclxubmF2IC5icmFuZC1sb2dvIGkubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxubmF2IC5uYXYtdGl0bGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgcGFkZGluZzogMjhweCAwO1xyXG59XHJcblxyXG5uYXYgdWwge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxubmF2IHVsIGxpIHtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgLjNzO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbm5hdiB1bCBsaS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxubmF2IHVsIGEge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAuM3M7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBhZGRpbmc6IDAgMTVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbm5hdiB1bCBhLmJ0biwgbmF2IHVsIGEuYnRuLWxhcmdlLCBuYXYgdWwgYS5idG4tc21hbGwsIG5hdiB1bCBhLmJ0bi1sYXJnZSwgbmF2IHVsIGEuYnRuLWZsYXQsIG5hdiB1bCBhLmJ0bi1mbG9hdGluZyB7XHJcbiAgbWFyZ2luLXRvcDogLTJweDtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbm5hdiB1bCBhLmJ0biA+IC5tYXRlcmlhbC1pY29ucywgbmF2IHVsIGEuYnRuLWxhcmdlID4gLm1hdGVyaWFsLWljb25zLCBuYXYgdWwgYS5idG4tc21hbGwgPiAubWF0ZXJpYWwtaWNvbnMsIG5hdiB1bCBhLmJ0bi1sYXJnZSA+IC5tYXRlcmlhbC1pY29ucywgbmF2IHVsIGEuYnRuLWZsYXQgPiAubWF0ZXJpYWwtaWNvbnMsIG5hdiB1bCBhLmJ0bi1mbG9hdGluZyA+IC5tYXRlcmlhbC1pY29ucyB7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcblxyXG5uYXYgdWwgYTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG5uYXYgdWwubGVmdCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbm5hdiBmb3JtIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbm5hdiAuaW5wdXQtZmllbGQge1xyXG4gIG1hcmdpbjogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbm5hdiAuaW5wdXQtZmllbGQgaW5wdXQge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG5uYXYgLmlucHV0LWZpZWxkIGlucHV0OmZvY3VzLCBuYXYgLmlucHV0LWZpZWxkIGlucHV0W3R5cGU9dGV4dF06dmFsaWQsIG5hdiAuaW5wdXQtZmllbGQgaW5wdXRbdHlwZT1wYXNzd29yZF06dmFsaWQsIG5hdiAuaW5wdXQtZmllbGQgaW5wdXRbdHlwZT1lbWFpbF06dmFsaWQsIG5hdiAuaW5wdXQtZmllbGQgaW5wdXRbdHlwZT11cmxdOnZhbGlkLCBuYXYgLmlucHV0LWZpZWxkIGlucHV0W3R5cGU9ZGF0ZV06dmFsaWQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG5uYXYgLmlucHV0LWZpZWxkIGxhYmVsIHtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxubmF2IC5pbnB1dC1maWVsZCBsYWJlbCBpIHtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgLjNzO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIC4zcztcclxufVxyXG5cclxubmF2IC5pbnB1dC1maWVsZCBsYWJlbC5hY3RpdmUgaSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5uYXZiYXItZml4ZWQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgei1pbmRleDogOTk3O1xyXG59XHJcblxyXG4ubmF2YmFyLWZpeGVkIG5hdiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMXB4KSB7XHJcbiAgbmF2Lm5hdi1leHRlbmRlZCAubmF2LXdyYXBwZXIge1xyXG4gICAgbWluLWhlaWdodDogNjRweDtcclxuICB9XHJcbiAgbmF2LCBuYXYgLm5hdi13cmFwcGVyIGksIG5hdiBhLnNpZGVuYXYtdHJpZ2dlciwgbmF2IGEuc2lkZW5hdi10cmlnZ2VyIGkge1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDY0cHg7XHJcbiAgfVxyXG4gIC5uYXZiYXItZml4ZWQge1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG4gIH1cclxufVxyXG5cclxuYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKlxyXG4gICAgTmF2IExpc3RcclxuKioqKioqKioqKioqKioqL1xyXG4udGFibGUtb2YtY29udGVudHMuZml4ZWQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxufVxyXG5cclxuLnRhYmxlLW9mLWNvbnRlbnRzIGxpIHtcclxuICBwYWRkaW5nOiAycHggMDtcclxufVxyXG5cclxuLnRhYmxlLW9mLWNvbnRlbnRzIGEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGNvbG9yOiAjNzU3NTc1O1xyXG4gIHBhZGRpbmctbGVmdDogMTZweDtcclxuICBoZWlnaHQ6IDEuNXJlbTtcclxuICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAuNDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi50YWJsZS1vZi1jb250ZW50cyBhOmhvdmVyIHtcclxuICBjb2xvcjogI2E4YThhODtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWU2ZTczO1xyXG59XHJcblxyXG4udGFibGUtb2YtY29udGVudHMgYS5hY3RpdmUge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNHB4O1xyXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2VlNmU3MztcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGhlaWdodDogY2FsYygxMDAlICsgNjBweCk7XHJcbiAgaGVpZ2h0OiAtbW96LWNhbGMoMTAwJSk7XHJcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDUlKTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTA1JSk7XHJcbn1cclxuXHJcbi5zaWRlbmF2LnJpZ2h0LWFsaWduZWQge1xyXG4gIHJpZ2h0OiAwO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwNSUpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwNSUpO1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbn1cclxuXHJcbi5zaWRlbmF2IC5jb2xsYXBzaWJsZSB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uc2lkZW5hdiBsaSB7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2IGxpLmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxufVxyXG5cclxuLnNpZGVuYXYgbGkgPiBhIHtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgcGFkZGluZzogMCAzMnB4O1xyXG59XHJcblxyXG4uc2lkZW5hdiBsaSA+IGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbn1cclxuXHJcbi5zaWRlbmF2IGxpID4gYS5idG4sIC5zaWRlbmF2IGxpID4gYS5idG4tbGFyZ2UsIC5zaWRlbmF2IGxpID4gYS5idG4tc21hbGwsIC5zaWRlbmF2IGxpID4gYS5idG4tbGFyZ2UsIC5zaWRlbmF2IGxpID4gYS5idG4tZmxhdCwgLnNpZGVuYXYgbGkgPiBhLmJ0bi1mbG9hdGluZyB7XHJcbiAgbWFyZ2luOiAxMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2IGxpID4gYS5idG4sIC5zaWRlbmF2IGxpID4gYS5idG4tbGFyZ2UsIC5zaWRlbmF2IGxpID4gYS5idG4tc21hbGwsIC5zaWRlbmF2IGxpID4gYS5idG4tbGFyZ2UsIC5zaWRlbmF2IGxpID4gYS5idG4tZmxvYXRpbmcge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uc2lkZW5hdiBsaSA+IGEuYnRuLWZsYXQge1xyXG4gIGNvbG9yOiAjMzQzNDM0O1xyXG59XHJcblxyXG4uc2lkZW5hdiBsaSA+IGEuYnRuOmhvdmVyLCAuc2lkZW5hdiBsaSA+IGEuYnRuLWxhcmdlOmhvdmVyLCAuc2lkZW5hdiBsaSA+IGEuYnRuLXNtYWxsOmhvdmVyLCAuc2lkZW5hdiBsaSA+IGEuYnRuLWxhcmdlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmJiYmFkO1xyXG59XHJcblxyXG4uc2lkZW5hdiBsaSA+IGEuYnRuLWZsb2F0aW5nOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZhNjlhO1xyXG59XHJcblxyXG4uc2lkZW5hdiBsaSA+IGEgPiBpLFxyXG4uc2lkZW5hdiBsaSA+IGEgPiBbY2xhc3NePVwibWRpLVwiXSwgLnNpZGVuYXYgbGkgPiBhIGxpID4gYSA+IFtjbGFzcyo9XCJtZGktXCJdLFxyXG4uc2lkZW5hdiBsaSA+IGEgPiBpLm1hdGVyaWFsLWljb25zIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgbWFyZ2luOiAwIDMycHggMCAwO1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xyXG59XHJcblxyXG4uc2lkZW5hdiAuZGl2aWRlciB7XHJcbiAgbWFyZ2luOiA4cHggMCAwIDA7XHJcbn1cclxuXHJcbi5zaWRlbmF2IC5zdWJoZWFkZXIge1xyXG4gIGN1cnNvcjogaW5pdGlhbDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogNDhweDtcclxufVxyXG5cclxuLnNpZGVuYXYgLnN1YmhlYWRlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi5zaWRlbmF2IC51c2VyLXZpZXcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAzMnB4IDMycHggMDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi5zaWRlbmF2IC51c2VyLXZpZXcgPiBhIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnNpZGVuYXYgLnVzZXItdmlldyA+IGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uc2lkZW5hdiAudXNlci12aWV3IC5iYWNrZ3JvdW5kIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5zaWRlbmF2IC51c2VyLXZpZXcgLmNpcmNsZSwgLnNpZGVuYXYgLnVzZXItdmlldyAubmFtZSwgLnNpZGVuYXYgLnVzZXItdmlldyAuZW1haWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc2lkZW5hdiAudXNlci12aWV3IC5jaXJjbGUge1xyXG4gIGhlaWdodDogNjRweDtcclxuICB3aWR0aDogNjRweDtcclxufVxyXG5cclxuLnNpZGVuYXYgLnVzZXItdmlldyAubmFtZSxcclxuLnNpZGVuYXYgLnVzZXItdmlldyAuZW1haWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxufVxyXG5cclxuLnNpZGVuYXYgLnVzZXItdmlldyAubmFtZSB7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uc2lkZW5hdiAudXNlci12aWV3IC5lbWFpbCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuLmRyYWctdGFyZ2V0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiA5OTg7XHJcbn1cclxuXHJcbm5hdntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg1NDdiO1xyXG59XHJcblxyXG4uZHJhZy10YXJnZXQucmlnaHQtYWxpZ25lZCB7XHJcbiAgcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5zaWRlbmF2LnNpZGVuYXYtZml4ZWQge1xyXG4gIGxlZnQ6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG59XHJcblxyXG4uc2lkZW5hdi5zaWRlbmF2LWZpeGVkLnJpZ2h0LWFsaWduZWQge1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAuc2lkZW5hdi5zaWRlbmF2LWZpeGVkIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDUlKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDUlKTtcclxuICB9XHJcbiAgLnNpZGVuYXYuc2lkZW5hdi1maXhlZC5yaWdodC1hbGlnbmVkIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwNSUpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTA1JSk7XHJcbiAgfVxyXG4gIC5zaWRlbmF2ID4gYSB7XHJcbiAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgfVxyXG4gIC5zaWRlbmF2IC51c2VyLXZpZXcge1xyXG4gICAgcGFkZGluZzogMTZweCAxNnB4IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uc2lkZW5hdiAuY29sbGFwc2libGUtYm9keSA+IHVsOm5vdCguY29sbGFwc2libGUpID4gbGkuYWN0aXZlLFxyXG4uc2lkZW5hdi5zaWRlbmF2LWZpeGVkIC5jb2xsYXBzaWJsZS1ib2R5ID4gdWw6bm90KC5jb2xsYXBzaWJsZSkgPiBsaS5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZTZlNzM7XHJcbn1cclxuXHJcbi5zaWRlbmF2IC5jb2xsYXBzaWJsZS1ib2R5ID4gdWw6bm90KC5jb2xsYXBzaWJsZSkgPiBsaS5hY3RpdmUgYSxcclxuLnNpZGVuYXYuc2lkZW5hdi1maXhlZCAuY29sbGFwc2libGUtYm9keSA+IHVsOm5vdCguY29sbGFwc2libGUpID4gbGkuYWN0aXZlIGEge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uc2lkZW5hdiAuY29sbGFwc2libGUtYm9keSB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLnNpZGVuYXYtb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgaGVpZ2h0OiAxMjB2aDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgei1pbmRleDogOTk3O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBsZWZ0LXNwaW4ge1xyXG4gIGZyb20ge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzBkZWcpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTMwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgbGVmdC1zcGluIHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTMwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTMwZGVnKTtcclxuICB9XHJcbiAgNTAlIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNWRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTMwZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTMwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyByaWdodC1zcGluIHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzMGRlZyk7XHJcbiAgfVxyXG4gIDUwJSB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDVkZWcpO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyByaWdodC1zcGluIHtcclxuICBmcm9tIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzBkZWcpO1xyXG4gIH1cclxuICA1MCUge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNWRlZyk7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzMGRlZyk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzBkZWcpO1xyXG4gIH1cclxufVxyXG5cclxubmF2IGxpIGE6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojNjM5Y2Q5O1xyXG59IFxyXG5cclxuLmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjM5Y2Q5O1xyXG59Il19 */"] });


/***/ }),

/***/ "NuUg":
/*!**************************************************!*\
  !*** ./src/app/shared/services/order.service.ts ***!
  \**************************************************/
/*! exports provided: OrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderService", function() { return OrderService; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");




class OrderService {
    constructor(http, toaster) {
        this.http = http;
        this.toaster = toaster;
        this.cartItems = [];
        this.apiUrl = 'http://localhost:52238/api/order';
        this.checkOutForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]),
            pincode: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[1-9][0-9]{5}')]),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('[7-9][0-9]{9}')])
        });
    }
    addOrder() {
        if (localStorage.getItem('user') == null) {
            this.toaster.error('Please login');
        }
        else {
            let formData = new FormData();
            formData.set('user', localStorage.getItem('user'));
            formData.set('cartTotal', this.cartTotal);
            formData.set('address', this.checkOutForm.value.address);
            formData.set('pincode', this.checkOutForm.value.pincode);
            formData.set('mobile', this.checkOutForm.value.mobile);
            formData.set('ordersLength', this.orders.length);
            for (var i = 0; i < this.orders.length; i++) {
                formData.set('orders' + [i] + '.product_id', this.orders[i].product_id);
                formData.set('orders' + [i] + '.product_name', this.orders[i].product_name);
                formData.set('orders' + [i] + '.product_quantity', this.orders[i].product_quantity);
            }
            this.http.post(this.apiUrl + '/createorder', formData)
                .subscribe(res => {
                this.orderId = res.code;
                this.toaster.success('New order placed');
                this.checkOutForm.reset();
                localStorage.removeItem('cart');
                this.cartTotal = 0;
                this.cartItems = [];
            });
        }
    }
    getOrders() {
        return this.http.get(this.apiUrl + '/getcustomerorders').toPromise().then(res => this.orderList = res);
    }
    getOrderDetails(id) {
        return this.http.get(this.apiUrl + '/getorderdetails/' + id).toPromise().then(res => this.orderDetails = res);
    }
    addProductToCart(product) {
        let productExists = false;
        for (let i in this.cartItems) {
            if (this.cartItems[i].product_id === product.product_id) {
                productExists = true;
                if (product.product_quantity <= this.cartItems[i].product_quantity) {
                    this.toaster.error('Maximum quantity exceeded');
                }
                else {
                    this.cartItems[i].product_quantity++;
                    break;
                }
            }
        }
        if (!productExists) {
            this.cartItems.push({
                product_id: product.product_id,
                product_name: product.product_name,
                product_price: product.product_price,
                product_quantity: 1
            });
        }
        this.cartTotal = 0;
        this.cartItems.forEach(item => {
            this.cartTotal += (item.product_quantity * item.product_price);
        });
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
    }
    removeProductFromCart(cartItem) {
        console.log(cartItem);
        for (let i in this.cartItems) {
            if (this.cartItems[i].product_id === cartItem.product_id) {
                this.cartItems[i].product_quantity--;
                if (this.cartItems[i].product_quantity <= 0) {
                    this.cartItems = this.cartItems.filter(x => x.product_id != cartItem.product_id);
                }
            }
        }
        this.cartTotal = 0;
        this.cartItems.forEach(item => {
            this.cartTotal += (item.product_quantity * item.product_price);
        });
        localStorage.setItem('cart', JSON.stringify(this.cartItems));
        if (this.cartItems.length == 0) {
            localStorage.removeItem('cart');
        }
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
OrderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'TestApp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["input.ng-invalid[_ngcontent-%COMP%]{\r\n    border-left: 5px solid red;\r\n}\r\n\r\n*[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVFQUF1RTs7QUFFdkU7SUFDSSwwQkFBMEI7QUFDOUI7O0FBR0E7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBAaW1wb3J0IFwifkBhbmd1bGFyL21hdGVyaWFsL3ByZWJ1aWx0LXRoZW1lcy9kZWVwcHVycGxlLWFtYmVyLmNzc1wiOyAqL1xyXG5cclxuaW5wdXQubmctaW52YWxpZHtcclxuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgcmVkO1xyXG59XHJcblxyXG5cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "TRGY":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_customer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/customer.service */ "svLH");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _shared_shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared-components/nav/nav.component */ "NV/E");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









function AdminComponent_tr_29_span_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_tr_29_span_13_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const customer_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.blockUser(customer_r1.customer_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminComponent_tr_29_span_14_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminComponent_tr_29_span_14_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const customer_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.unBlockUser(customer_r1.customer_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "lock_open");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdminComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, AdminComponent_tr_29_span_13_Template, 5, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, AdminComponent_tr_29_span_14_Template, 5, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const customer_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r1.customer_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r1.customer_email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r1.customer_firstname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r1.customer_lastname);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r1.customer_mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](customer_r1.customer_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", customer_r1.customer_status != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", customer_r1.customer_status == 0);
} }
class AdminComponent {
    constructor(customerService, router, toaster) {
        this.customerService = customerService;
        this.router = router;
        this.toaster = toaster;
    }
    ngOnInit() {
        if (localStorage.getItem('user') != 'admin@gmail.com') {
            this.router.navigate(['login']);
        }
        this.customerService.getCustomers().then(response => {
            if (!response) {
                console.log(Error);
            }
            else {
                this.completeList = response;
                this.completeList = this.completeList.filter(x => x.customer_email != "admin@gmail.com");
                this.list = this.completeList.filter(x => x.customer_email != "admin@gmail.com");
            }
        });
    }
    logout() {
        localStorage.removeItem("jwt");
        localStorage.removeItem("user");
        location.reload();
    }
    blockUser(id) {
        this.customerService.blockUser(id)
            .then(response => {
            if (!response) {
                console.log(Error);
            }
            else {
                if (response > 0) {
                    this.toaster.success("User blocked");
                    setTimeout(function () {
                        location.reload();
                    }, 500);
                }
                else {
                    if (confirm('Something went wrong')) {
                        location.reload();
                    }
                }
            }
        });
    }
    Search() {
        if (this.customer_email == "") {
            this.ngOnInit();
        }
        else {
            this.list = this.completeList.filter(res => {
                if (res.customer_email != null)
                    return res.customer_email.toLocaleLowerCase().match(this.customer_email.toLocaleLowerCase());
            });
        }
    }
    unBlockUser(id) {
        this.customerService.unBlockUser(id).then(response => {
            if (!response) {
                console.log(Error);
            }
            else {
                if (response > 0) {
                    this.toaster.success("User UnBlocked");
                    setTimeout(function () {
                        location.reload();
                    }, 500);
                }
                else {
                    if (confirm('Something went wrong')) {
                        location.reload();
                    }
                }
            }
        });
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_customer_service__WEBPACK_IMPORTED_MODULE_1__["CustomerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 30, vars: 2, consts: [[1, "container", "center-align"], [1, "hcenter"], [1, "table-header"], [2, "margin-left", "2%"], [1, "search"], ["name", "customer_email", "type", "text", "placeholder", "Search . . .", 3, "ngModel", "ngModelChange"], [1, "table"], ["ngclass", "btn-primary"], [1, "tbl2"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["title", "Block User", "href", "javascript:void(0);", 2, "font-size", "20px", "color", "red", "margin-right", "10px", 3, "click"], ["title", "UnBlock User", "href", "javascript:void(0);", 2, "font-size", "20px", "color", "blue", "margin-right", "10px", 3, "click"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AdminComponent_Template_input_ngModelChange_12_listener($event) { return ctx.customer_email = $event; })("ngModelChange", function AdminComponent_Template_input_ngModelChange_12_listener() { return ctx.Search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AdminComponent_tr_29_Template, 15, 8, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.customer_email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
    } }, directives: [_shared_shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_4__["NavComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"]], styles: ["h2[_ngcontent-%COMP%]{\r\n  text-decoration: underline;\r\n}\r\nnav[_ngcontent-%COMP%]{\r\n    background-color: #38547b;\r\n  }\r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{\r\n  padding: 5px 15px;\r\n\r\n}\r\n\r\n*[_ngcontent-%COMP%] {\r\n    padding: 0;\r\n    margin: 0;\r\n  }\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n.flexbox[_ngcontent-%COMP%] {\r\n    background:rgb(253, 249, 249); \r\n    width: 100%;\r\n    height: 10%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n.search[_ngcontent-%COMP%] {\r\n    margin: 20px;\r\n  }\r\n.search[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\r\n    font-weight: normal;\r\n  }\r\n.search[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%], .search[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\r\n    color: white;\r\n    margin-bottom: 15px;\r\n    text-shadow: 0 1px #0091c2;\r\n  }\r\n.search[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: relative;\r\n    filter: drop-shadow(0 1px #0091c2);\r\n  }\r\n.search[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:after {\r\n    content: \"\";\r\n    background: rgb(0, 0, 0);\r\n    width: 4px;\r\n    height: 20px;\r\n    position: absolute;\r\n    top: 40px;\r\n    right: 2px;\r\n    transform: rotate(135deg);\r\n  }\r\n.search[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\r\n    color: rgb(0, 0, 0);\r\n    font-size: 16px;\r\n    background: transparent;\r\n    width: 25px;\r\n    height: 25px;\r\n    padding: 10px;\r\n    border: solid 3px rgb(0, 0, 0);\r\n    outline: none;\r\n    border-radius: 35px;\r\n    transition: width 0.5s;\r\n  }\r\n.table-header[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-flow: row;\r\n    align-items: baseline;\r\n    justify-content: space-between;\r\n  }\r\n.search[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]::placeholder {\r\n    color: #000000;\r\n    opacity: 0;\r\n    transition: opacity 150ms ease-out;\r\n  }\r\n.search[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:focus::placeholder {\r\n    opacity: 1;\r\n  }\r\n.search[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:focus, .search[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:not(:placeholder-shown) {\r\n    width: 250px;\r\n  }\r\n.hcenter[_ngcontent-%COMP%] {\r\n    display: table;\r\n    margin: 0 auto;\r\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0lBQ0kseUJBQXlCO0VBQzNCO0FBQ0Y7RUFDRSxpQkFBaUI7O0FBRW5CO0FBQ0UsV0FBVztBQUVYO0lBQ0UsVUFBVTtJQUNWLFNBQVM7RUFDWDtBQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDtBQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7QUFFQTtJQUNFLFlBQVk7RUFDZDtBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBRUE7O0lBRUUsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQiwwQkFBMEI7RUFDNUI7QUFFQTtJQUNFLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsa0NBQWtDO0VBQ3BDO0FBRUE7SUFDRSxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YseUJBQXlCO0VBQzNCO0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7RUFDeEI7QUFFQTtJQUNFLGFBQWE7SUFDYixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLDhCQUE4QjtFQUNoQztBQUVBO0lBQ0UsY0FBYztJQUNkLFVBQVU7SUFDVixrQ0FBa0M7RUFDcEM7QUFFQTtJQUNFLFVBQVU7RUFDWjtBQUVBOztJQUVFLFlBQVk7RUFDZDtBQUVBO0lBQ0UsY0FBYztJQUNkLGNBQWM7R0FDZiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5oMntcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5uYXZ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg1NDdiO1xyXG4gIH1cclxudGQsdGh7XHJcbiAgcGFkZGluZzogNXB4IDE1cHg7XHJcblxyXG59XHJcbiAgLyogU2VhcmNoICovXHJcblxyXG4gICoge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgaHRtbCwgYm9keSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmZsZXhib3gge1xyXG4gICAgYmFja2dyb3VuZDpyZ2IoMjUzLCAyNDksIDI0OSk7IFxyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2gge1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoID4gaDMge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaCA+IGgxLFxyXG4gIC5zZWFyY2ggPiBoMyB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4ICMwMDkxYzI7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2ggPiBkaXYge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDFweCAjMDA5MWMyKTtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaCA+IGRpdjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDAsIDAsIDApO1xyXG4gICAgd2lkdGg6IDRweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDBweDtcclxuICAgIHJpZ2h0OiAycHg7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoID4gZGl2ID4gaW5wdXQge1xyXG4gICAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAzcHggcmdiKDAsIDAsIDApO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzO1xyXG4gIH1cclxuXHJcbiAgLnRhYmxlLWhlYWRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWZsb3c6IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaCA+IGRpdiA+IGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDE1MG1zIGVhc2Utb3V0O1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoID4gZGl2ID4gaW5wdXQ6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWFyY2ggPiBkaXYgPiBpbnB1dDpmb2N1cyxcclxuICAuc2VhcmNoID4gZGl2ID4gaW5wdXQ6bm90KDpwbGFjZWhvbGRlci1zaG93bikge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gIH1cclxuICBcclxuICAuaGNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICB9Il19 */"] });


/***/ }),

/***/ "Up0N":
/*!************************************************************!*\
  !*** ./src/app/admin/product/product/product.component.ts ***!
  \************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _listproducts_listproducts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../listproducts/listproducts.component */ "MLpR");


class ProductComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductComponent.ɵfac = function ProductComponent_Factory(t) { return new (t || ProductComponent)(); };
ProductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductComponent, selectors: [["app-product"]], decls: 2, vars: 0, consts: [["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"]], template: function ProductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-listproducts");
    } }, directives: [_listproducts_listproducts_component__WEBPACK_IMPORTED_MODULE_1__["ListproductsComponent"]], styles: [".container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: right;\r\n    justify-content: center;\r\n}\r\n.container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{\r\n    width: 40%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiByaWdodDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5jb250YWluZXI+KntcclxuICAgIHdpZHRoOiA0MCU7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "Vjiv":
/*!******************************************************************!*\
  !*** ./src/app/admin/product/addproduct/addproduct.component.ts ***!
  \******************************************************************/
/*! exports provided: AddproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddproductComponent", function() { return AddproductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/product.service */ "mB2O");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared-components/nav/nav.component */ "NV/E");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "bTqV");













function AddproductComponent_mat_hint_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddproductComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid product name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddproductComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddproductComponent_mat_hint_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Quantity required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddproductComponent_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid product quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddproductComponent_mat_error_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Quantity required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddproductComponent_mat_hint_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Price required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddproductComponent_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid product price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddproductComponent_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Price required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddproductComponent_mat_hint_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Description required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddproductComponent_mat_error_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " description required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddproductComponent {
    constructor(productService, router, route) {
        this.productService = productService;
        this.router = router;
        this.route = route;
        this.title = "Create";
        this.selectedFile = null;
        this.route.params.subscribe(params => {
            this.value = params['value'];
        });
    }
    ngOnInit() {
        if (this.value == "edit") {
            this.productService.productForm.patchValue({
                id: this.productService.product.product_id,
                name: this.productService.product.product_name,
                category: this.productService.product.product_category,
                quantity: this.productService.product.product_quantity,
                price: this.productService.product.product_price,
                description: this.productService.product.product_description
            });
        }
        else {
            this.productService.productForm.reset();
        }
    }
    addProduct(data) {
        this.productService.addProduct(data, this.selectedFile);
    }
    logout() {
        localStorage.removeItem("jwt");
        localStorage.removeItem("user");
        location.reload();
    }
    handleFileInput(fileInput) {
        this.selectedFile = fileInput.target.files[0];
    }
    resetProductForm() {
        this.productService.productForm.reset();
    }
}
AddproductComponent.ɵfac = function AddproductComponent_Factory(t) { return new (t || AddproductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
AddproductComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddproductComponent, selectors: [["app-addproduct"]], decls: 58, vars: 13, consts: [[1, "center-align", "hcenter"], [1, "center-align"], [3, "formGroup", "ngSubmit"], ["formControlName", "id", "hidden", "", "value", "0"], [1, "row"], [1, "col", "s6"], ["matInput", "", "placeholder", "Name", "formControlName", "name"], [4, "ngIf"], [1, "col", "s6", 2, "margin-top", "3px"], ["name", "category", "formControlName", "category"], ["value", "Watches"], ["value", "Headphones"], ["value", "Speakers"], ["value", "Lighting"], ["matInput", "", "placeholder", "Quantity", "formControlName", "quantity"], ["matInput", "", "placeholder", "Price", "formControlName", "price"], [2, "width", "91%"], ["matInput", "", "placeholder", "Description", "formControlName", "description", "cdkAutosizeMinRows", "3"], [1, "file-field", "input-field", 2, "position", "relative", "margin-left", "32%"], [1, "btn", 2, "width", "40%", "border-radius", "50%", "background-color", "white", "color", "blue"], ["type", "file", "formControlName", "image", "accept", ".jpg,.jpeg", 3, "change"], [1, "file-path-wrapper"], ["type", "text", 1, "file-path", "validate"], ["mat-flat-button", "", "type", "submit", 2, "width", "15vw", 3, "disabled"], ["mat-flat-button", "", "color", "primary", "type", "reset", 2, "width", "15vw"]], template: function AddproductComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddproductComponent_Template_form_ngSubmit_4_listener() { return ctx.addProduct(ctx.productService.productForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AddproductComponent_mat_hint_10_Template, 2, 0, "mat-hint", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddproductComponent_mat_error_11_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddproductComponent_mat_error_12_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Product category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Watches ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Headphones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Speakers ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Lighting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AddproductComponent_mat_hint_30_Template, 2, 0, "mat-hint", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AddproductComponent_mat_error_31_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AddproductComponent_mat_error_32_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, AddproductComponent_mat_hint_36_Template, 2, 0, "mat-hint", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AddproductComponent_mat_error_37_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AddproductComponent_mat_error_38_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, AddproductComponent_mat_hint_41_Template, 2, 0, "mat-hint", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, AddproductComponent_mat_error_42_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddproductComponent_Template_input_change_47_listener($event) { return ctx.handleFileInput($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.productService.productForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productService.productForm.controls.name.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productService.productForm.controls.name.hasError("pattern") && !ctx.productService.productForm.controls.name.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productService.productForm.controls.name.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productService.productForm.controls.quantity.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productService.productForm.controls.quantity.hasError("pattern") && !ctx.productService.productForm.controls.name.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productService.productForm.controls.quantity.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productService.productForm.controls.price.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productService.productForm.controls.price.hasError("pattern") && !ctx.productService.productForm.controls.price.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productService.productForm.controls.price.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productService.productForm.controls.description.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productService.productForm.controls.description.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.productService.productForm.valid);
    } }, directives: [_shared_shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatOption"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: [".hcenter[_ngcontent-%COMP%] {\r\n  display: table;\r\n  margin: 0 auto;\r\n }\r\n\r\n textarea[_ngcontent-%COMP%]\r\n {\r\n  resize: none;\r\n }\r\n\r\n .materialize-red-text[_ngcontent-%COMP%] {\r\n  color: #e51c23 !important;\r\n}\r\n\r\n \r\n\r\n [type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=\"number\"][_ngcontent-%COMP%]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n \r\n\r\n [type=\"search\"][_ngcontent-%COMP%] {\r\n  -webkit-appearance: textfield;\r\n  \r\n  outline-offset: -2px;\r\n  \r\n}\r\n\r\n \r\n\r\n [type=\"search\"][_ngcontent-%COMP%]::-webkit-search-cancel-button, [type=\"search\"][_ngcontent-%COMP%]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n \r\n\r\n [_ngcontent-%COMP%]::-webkit-file-upload-button {\r\n  -webkit-appearance: button;\r\n  \r\n  font: inherit;\r\n  \r\n}\r\n\r\n \r\n\r\n \r\n\r\n details[_ngcontent-%COMP%], menu[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n \r\n\r\n summary[_ngcontent-%COMP%] {\r\n  display: list-item;\r\n}\r\n\r\n \r\n\r\n \r\n\r\n canvas[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n\r\n \r\n\r\n template[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n \r\n\r\n \r\n\r\n [hidden][_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n html[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n}\r\n\r\n *[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\r\n  box-sizing: inherit;\r\n}\r\n\r\n ul[_ngcontent-%COMP%]:not(.browser-default) {\r\n  padding-left: 0;\r\n  list-style-type: none;\r\n}\r\n\r\n ul[_ngcontent-%COMP%]:not(.browser-default)    > li[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n}\r\n\r\n a[_ngcontent-%COMP%] {\r\n  color: #039be5;\r\n  text-decoration: none;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n .valign-wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n .clearfix[_ngcontent-%COMP%] {\r\n  clear: both;\r\n}\r\n\r\n .z-depth-0[_ngcontent-%COMP%] {\r\n  box-shadow: none !important;\r\n}\r\n\r\n \r\n\r\n .z-depth-1[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], .card-panel[_ngcontent-%COMP%], .card[_ngcontent-%COMP%], .toast[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%], .btn-large[_ngcontent-%COMP%], .btn-small[_ngcontent-%COMP%], .btn-floating[_ngcontent-%COMP%], .dropdown-content[_ngcontent-%COMP%], .collapsible[_ngcontent-%COMP%], .sidenav[_ngcontent-%COMP%] {\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n .z-depth-1-half[_ngcontent-%COMP%], .btn[_ngcontent-%COMP%]:hover, .btn-large[_ngcontent-%COMP%]:hover, .btn-small[_ngcontent-%COMP%]:hover, .btn-floating[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n \r\n\r\n .z-depth-2[_ngcontent-%COMP%] {\r\n  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n \r\n\r\n .z-depth-3[_ngcontent-%COMP%] {\r\n  box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n \r\n\r\n .z-depth-4[_ngcontent-%COMP%] {\r\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n \r\n\r\n .z-depth-5[_ngcontent-%COMP%], .modal[_ngcontent-%COMP%] {\r\n  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n \r\n\r\n .hide[_ngcontent-%COMP%] {\r\n  display: none !important;\r\n}\r\n\r\n .left-align[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n}\r\n\r\n .right-align[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n}\r\n\r\n .center[_ngcontent-%COMP%], .center-align[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n .left[_ngcontent-%COMP%] {\r\n  float: left !important;\r\n}\r\n\r\n .right[_ngcontent-%COMP%] {\r\n  float: right !important;\r\n}\r\n\r\n .no-select[_ngcontent-%COMP%], input[type=range][_ngcontent-%COMP%], input[type=range][_ngcontent-%COMP%]    + .thumb[_ngcontent-%COMP%] {\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n}\r\n\r\n .circle[_ngcontent-%COMP%] {\r\n  border-radius: 50%;\r\n}\r\n\r\n .center-block[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n\r\n .truncate[_ngcontent-%COMP%] {\r\n  display: block;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n .no-padding[_ngcontent-%COMP%] {\r\n  padding: 0 !important;\r\n}\r\n\r\n span.badge[_ngcontent-%COMP%] {\r\n  min-width: 3rem;\r\n  padding: 0 6px;\r\n  margin-left: 14px;\r\n  text-align: center;\r\n  font-size: 1rem;\r\n  line-height: 22px;\r\n  height: 22px;\r\n  color: #757575;\r\n  float: right;\r\n  box-sizing: border-box;\r\n}\r\n\r\n span.badge.new[_ngcontent-%COMP%] {\r\n  font-weight: 300;\r\n  font-size: 0.8rem;\r\n  color: #fff;\r\n  background-color: #26a69a;\r\n  border-radius: 2px;\r\n}\r\n\r\n span.badge.new[_ngcontent-%COMP%]:after {\r\n  content: \" new\";\r\n}\r\n\r\n span.badge[data-badge-caption][_ngcontent-%COMP%]::after {\r\n  content: \" \" attr(data-badge-caption);\r\n}\r\n\r\n nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span.badge[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  float: none;\r\n  margin-left: 4px;\r\n  line-height: 22px;\r\n  height: 22px;\r\n  -webkit-font-smoothing: auto;\r\n}\r\n\r\n .collection-item[_ngcontent-%COMP%]   span.badge[_ngcontent-%COMP%] {\r\n  margin-top: calc(0.75rem - 11px);\r\n}\r\n\r\n .collapsible[_ngcontent-%COMP%]   span.badge[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n}\r\n\r\n .sidenav[_ngcontent-%COMP%]   span.badge[_ngcontent-%COMP%] {\r\n  margin-top: calc(24px - 11px);\r\n}\r\n\r\n table[_ngcontent-%COMP%]   span.badge[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  float: none;\r\n  margin-left: auto;\r\n}\r\n\r\n \r\n\r\n .material-icons[_ngcontent-%COMP%] {\r\n  text-rendering: optimizeLegibility;\r\n  font-feature-settings: 'liga';\r\n}\r\n\r\n .container[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  max-width: 1280px;\r\n  width: 90%;\r\n}\r\n\r\n @media only screen and (min-width: 601px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    width: 85%;\r\n  }\r\n}\r\n\r\n @media only screen and (min-width: 993px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    width: 70%;\r\n  }\r\n}\r\n\r\n .col[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n  margin-left: -0.75rem;\r\n  margin-right: -0.75rem;\r\n}\r\n\r\n .section[_ngcontent-%COMP%] {\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n .section.no-pad[_ngcontent-%COMP%] {\r\n  padding: 0;\r\n}\r\n\r\n .section.no-pad-bot[_ngcontent-%COMP%] {\r\n  padding-bottom: 0;\r\n}\r\n\r\n .section.no-pad-top[_ngcontent-%COMP%] {\r\n  padding-top: 0;\r\n}\r\n\r\n .row[_ngcontent-%COMP%] {\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\r\n  float: left;\r\n  box-sizing: border-box;\r\n  padding: 0 0.75rem;\r\n  min-height: 1px;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col[class*=\"push-\"][_ngcontent-%COMP%], .row[_ngcontent-%COMP%]   .col[class*=\"pull-\"][_ngcontent-%COMP%] {\r\n  position: relative;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.s1[_ngcontent-%COMP%] {\r\n  width: 8.3333333333%;\r\n  margin-left: auto;\r\n  left: auto;\r\n  right: auto;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.s2[_ngcontent-%COMP%] {\r\n  width: 16.6666666667%;\r\n  margin-left: auto;\r\n  left: auto;\r\n  right: auto;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.s3[_ngcontent-%COMP%] {\r\n  width: 25%;\r\n  margin-left: auto;\r\n  left: auto;\r\n  right: auto;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.s4[_ngcontent-%COMP%] {\r\n  width: 33.3333333333%;\r\n  margin-left: auto;\r\n  left: auto;\r\n  right: auto;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.s5[_ngcontent-%COMP%] {\r\n  width: 41.6666666667%;\r\n  margin-left: auto;\r\n  left: auto;\r\n  right: auto;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.s6[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n  margin-left: auto;\r\n  left: auto;\r\n  right: auto;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.s7[_ngcontent-%COMP%] {\r\n  width: 58.3333333333%;\r\n  margin-left: auto;\r\n  left: auto;\r\n  right: auto;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.s8[_ngcontent-%COMP%] {\r\n  width: 66.6666666667%;\r\n  margin-left: auto;\r\n  left: auto;\r\n  right: auto;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.s9[_ngcontent-%COMP%] {\r\n  width: 75%;\r\n  margin-left: auto;\r\n  left: auto;\r\n  right: auto;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.s10[_ngcontent-%COMP%] {\r\n  width: 83.3333333333%;\r\n  margin-left: auto;\r\n  left: auto;\r\n  right: auto;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.s11[_ngcontent-%COMP%] {\r\n  width: 91.6666666667%;\r\n  margin-left: auto;\r\n  left: auto;\r\n  right: auto;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.s12[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin-left: auto;\r\n  left: auto;\r\n  right: auto;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.offset-s1[_ngcontent-%COMP%] {\r\n  margin-left: 8.3333333333%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.pull-s1[_ngcontent-%COMP%] {\r\n  right: 8.3333333333%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.push-s1[_ngcontent-%COMP%] {\r\n  left: 8.3333333333%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.offset-s2[_ngcontent-%COMP%] {\r\n  margin-left: 16.6666666667%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.pull-s2[_ngcontent-%COMP%] {\r\n  right: 16.6666666667%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.push-s2[_ngcontent-%COMP%] {\r\n  left: 16.6666666667%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.offset-s3[_ngcontent-%COMP%] {\r\n  margin-left: 25%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.pull-s3[_ngcontent-%COMP%] {\r\n  right: 25%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.push-s3[_ngcontent-%COMP%] {\r\n  left: 25%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.offset-s4[_ngcontent-%COMP%] {\r\n  margin-left: 33.3333333333%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.pull-s4[_ngcontent-%COMP%] {\r\n  right: 33.3333333333%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.push-s4[_ngcontent-%COMP%] {\r\n  left: 33.3333333333%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.offset-s5[_ngcontent-%COMP%] {\r\n  margin-left: 41.6666666667%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.pull-s5[_ngcontent-%COMP%] {\r\n  right: 41.6666666667%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.push-s5[_ngcontent-%COMP%] {\r\n  left: 41.6666666667%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.offset-s6[_ngcontent-%COMP%] {\r\n  margin-left: 50%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.pull-s6[_ngcontent-%COMP%] {\r\n  right: 50%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.push-s6[_ngcontent-%COMP%] {\r\n  left: 50%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.offset-s7[_ngcontent-%COMP%] {\r\n  margin-left: 58.3333333333%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.pull-s7[_ngcontent-%COMP%] {\r\n  right: 58.3333333333%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.push-s7[_ngcontent-%COMP%] {\r\n  left: 58.3333333333%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.offset-s8[_ngcontent-%COMP%] {\r\n  margin-left: 66.6666666667%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.pull-s8[_ngcontent-%COMP%] {\r\n  right: 66.6666666667%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.push-s8[_ngcontent-%COMP%] {\r\n  left: 66.6666666667%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.offset-s9[_ngcontent-%COMP%] {\r\n  margin-left: 75%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.pull-s9[_ngcontent-%COMP%] {\r\n  right: 75%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.push-s9[_ngcontent-%COMP%] {\r\n  left: 75%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.offset-s10[_ngcontent-%COMP%] {\r\n  margin-left: 83.3333333333%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.pull-s10[_ngcontent-%COMP%] {\r\n  right: 83.3333333333%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.push-s10[_ngcontent-%COMP%] {\r\n  left: 83.3333333333%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.offset-s11[_ngcontent-%COMP%] {\r\n  margin-left: 91.6666666667%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.pull-s11[_ngcontent-%COMP%] {\r\n  right: 91.6666666667%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.push-s11[_ngcontent-%COMP%] {\r\n  left: 91.6666666667%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.offset-s12[_ngcontent-%COMP%] {\r\n  margin-left: 100%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.pull-s12[_ngcontent-%COMP%] {\r\n  right: 100%;\r\n}\r\n\r\n .row[_ngcontent-%COMP%]   .col.push-s12[_ngcontent-%COMP%] {\r\n  left: 100%;\r\n}\r\n\r\n .btn[_ngcontent-%COMP%], .btn-large[_ngcontent-%COMP%], .btn-small[_ngcontent-%COMP%], .btn-flat[_ngcontent-%COMP%] {\r\n  border: none;\r\n  border-radius: 2px;\r\n  display: inline-block;\r\n  height: 36px;\r\n  line-height: 36px;\r\n  padding: 0 16px;\r\n  text-transform: uppercase;\r\n  vertical-align: middle;\r\n  -webkit-tap-highlight-color: transparent;\r\n}\r\n\r\n \r\n\r\n input[_ngcontent-%COMP%]:not([type]), input[type=text][_ngcontent-%COMP%]:not(.browser-default), input[type=password][_ngcontent-%COMP%]:not(.browser-default), input[type=email][_ngcontent-%COMP%]:not(.browser-default), input[type=url][_ngcontent-%COMP%]:not(.browser-default), input[type=time][_ngcontent-%COMP%]:not(.browser-default), input[type=date][_ngcontent-%COMP%]:not(.browser-default), input[type=datetime][_ngcontent-%COMP%]:not(.browser-default), input[type=datetime-local][_ngcontent-%COMP%]:not(.browser-default), input[type=tel][_ngcontent-%COMP%]:not(.browser-default), input[type=number][_ngcontent-%COMP%]:not(.browser-default), input[type=search][_ngcontent-%COMP%]:not(.browser-default), textarea.materialize-textarea[_ngcontent-%COMP%] {\r\n  background-color: transparent;\r\n  border: none;\r\n  border-radius: 0;\r\n  outline: none;\r\n  width: 100%;\r\n  font-size: 16px;\r\n  padding: 0;\r\n  box-shadow: none;\r\n  box-sizing: content-box;\r\n  transition: box-shadow .3s, border .3s;\r\n}\r\n\r\n input[_ngcontent-%COMP%]:not([type]):disabled, input[_ngcontent-%COMP%]:not([type])[readonly=\"readonly\"], input[type=text][_ngcontent-%COMP%]:not(.browser-default):disabled, input[type=text][_ngcontent-%COMP%]:not(.browser-default)[readonly=\"readonly\"], input[type=password][_ngcontent-%COMP%]:not(.browser-default):disabled, input[type=password][_ngcontent-%COMP%]:not(.browser-default)[readonly=\"readonly\"], input[type=email][_ngcontent-%COMP%]:not(.browser-default):disabled, input[type=email][_ngcontent-%COMP%]:not(.browser-default)[readonly=\"readonly\"], input[type=url][_ngcontent-%COMP%]:not(.browser-default):disabled, input[type=url][_ngcontent-%COMP%]:not(.browser-default)[readonly=\"readonly\"], input[type=time][_ngcontent-%COMP%]:not(.browser-default):disabled, input[type=time][_ngcontent-%COMP%]:not(.browser-default)[readonly=\"readonly\"], input[type=date][_ngcontent-%COMP%]:not(.browser-default):disabled, input[type=date][_ngcontent-%COMP%]:not(.browser-default)[readonly=\"readonly\"], input[type=datetime][_ngcontent-%COMP%]:not(.browser-default):disabled, input[type=datetime][_ngcontent-%COMP%]:not(.browser-default)[readonly=\"readonly\"], input[type=datetime-local][_ngcontent-%COMP%]:not(.browser-default):disabled, input[type=datetime-local][_ngcontent-%COMP%]:not(.browser-default)[readonly=\"readonly\"], input[type=tel][_ngcontent-%COMP%]:not(.browser-default):disabled, input[type=tel][_ngcontent-%COMP%]:not(.browser-default)[readonly=\"readonly\"], input[type=number][_ngcontent-%COMP%]:not(.browser-default):disabled, input[type=number][_ngcontent-%COMP%]:not(.browser-default)[readonly=\"readonly\"], input[type=search][_ngcontent-%COMP%]:not(.browser-default):disabled, input[type=search][_ngcontent-%COMP%]:not(.browser-default)[readonly=\"readonly\"], textarea.materialize-textarea[_ngcontent-%COMP%]:disabled, textarea.materialize-textarea[readonly=\"readonly\"][_ngcontent-%COMP%] {\r\n  color: rgba(0, 0, 0, 0.42);\r\n  border-bottom: 1px dotted rgba(0, 0, 0, 0.42);\r\n}\r\n\r\n input[_ngcontent-%COMP%]:not([type]):disabled    + label[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:not([type])[readonly=\"readonly\"]    + label[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]:not(.browser-default):disabled    + label[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]:not(.browser-default)[readonly=\"readonly\"]    + label[_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]:not(.browser-default):disabled    + label[_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]:not(.browser-default)[readonly=\"readonly\"]    + label[_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%]:not(.browser-default):disabled    + label[_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%]:not(.browser-default)[readonly=\"readonly\"]    + label[_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%]:not(.browser-default):disabled    + label[_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%]:not(.browser-default)[readonly=\"readonly\"]    + label[_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%]:not(.browser-default):disabled    + label[_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%]:not(.browser-default)[readonly=\"readonly\"]    + label[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]:not(.browser-default):disabled    + label[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]:not(.browser-default)[readonly=\"readonly\"]    + label[_ngcontent-%COMP%], input[type=datetime][_ngcontent-%COMP%]:not(.browser-default):disabled    + label[_ngcontent-%COMP%], input[type=datetime][_ngcontent-%COMP%]:not(.browser-default)[readonly=\"readonly\"]    + label[_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%]:not(.browser-default):disabled    + label[_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%]:not(.browser-default)[readonly=\"readonly\"]    + label[_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%]:not(.browser-default):disabled    + label[_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%]:not(.browser-default)[readonly=\"readonly\"]    + label[_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]:not(.browser-default):disabled    + label[_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]:not(.browser-default)[readonly=\"readonly\"]    + label[_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%]:not(.browser-default):disabled    + label[_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%]:not(.browser-default)[readonly=\"readonly\"]    + label[_ngcontent-%COMP%], textarea.materialize-textarea[_ngcontent-%COMP%]:disabled    + label[_ngcontent-%COMP%], textarea.materialize-textarea[readonly=\"readonly\"][_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\r\n  color: rgba(0, 0, 0, 0.42);\r\n}\r\n\r\n input[_ngcontent-%COMP%]:not([type]):focus:not([readonly]), input[type=text][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly]), input[type=password][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly]), input[type=email][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly]), input[type=url][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly]), input[type=time][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly]), input[type=date][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly]), input[type=datetime][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly]), input[type=datetime-local][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly]), input[type=tel][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly]), input[type=number][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly]), input[type=search][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly]), textarea.materialize-textarea[_ngcontent-%COMP%]:focus:not([readonly]) {\r\n\r\n}\r\n\r\n input[_ngcontent-%COMP%]:not([type]):focus:not([readonly])    + label[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly])    + label[_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly])    + label[_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly])    + label[_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly])    + label[_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly])    + label[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly])    + label[_ngcontent-%COMP%], input[type=datetime][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly])    + label[_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly])    + label[_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly])    + label[_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly])    + label[_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%]:not(.browser-default):focus:not([readonly])    + label[_ngcontent-%COMP%], textarea.materialize-textarea[_ngcontent-%COMP%]:focus:not([readonly])    + label[_ngcontent-%COMP%] {\r\n  color: #26a69a;\r\n}\r\n\r\n input[_ngcontent-%COMP%]:not([type]):focus.valid    ~ label[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ label[_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ label[_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ label[_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ label[_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ label[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ label[_ngcontent-%COMP%], input[type=datetime][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ label[_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ label[_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ label[_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ label[_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ label[_ngcontent-%COMP%], textarea.materialize-textarea[_ngcontent-%COMP%]:focus.valid    ~ label[_ngcontent-%COMP%] {\r\n  color: #4CAF50;\r\n}\r\n\r\n input[_ngcontent-%COMP%]:not([type]):focus.invalid    ~ label[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ label[_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ label[_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ label[_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ label[_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ label[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ label[_ngcontent-%COMP%], input[type=datetime][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ label[_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ label[_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ label[_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ label[_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ label[_ngcontent-%COMP%], textarea.materialize-textarea[_ngcontent-%COMP%]:focus.invalid    ~ label[_ngcontent-%COMP%] {\r\n  color: #F44336;\r\n}\r\n\r\n input[_ngcontent-%COMP%]:not([type]).validate    + label[_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]:not(.browser-default).validate    + label[_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]:not(.browser-default).validate    + label[_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%]:not(.browser-default).validate    + label[_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%]:not(.browser-default).validate    + label[_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%]:not(.browser-default).validate    + label[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]:not(.browser-default).validate    + label[_ngcontent-%COMP%], input[type=datetime][_ngcontent-%COMP%]:not(.browser-default).validate    + label[_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%]:not(.browser-default).validate    + label[_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%]:not(.browser-default).validate    + label[_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]:not(.browser-default).validate    + label[_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%]:not(.browser-default).validate    + label[_ngcontent-%COMP%], textarea.materialize-textarea.validate[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n \r\n\r\n input.valid[_ngcontent-%COMP%]:not([type]), input.valid[_ngcontent-%COMP%]:not([type]):focus, input.valid[type=text][_ngcontent-%COMP%]:not(.browser-default), input.valid[type=text][_ngcontent-%COMP%]:not(.browser-default):focus, input.valid[type=password][_ngcontent-%COMP%]:not(.browser-default), input.valid[type=password][_ngcontent-%COMP%]:not(.browser-default):focus, input.valid[type=email][_ngcontent-%COMP%]:not(.browser-default), input.valid[type=email][_ngcontent-%COMP%]:not(.browser-default):focus, input.valid[type=url][_ngcontent-%COMP%]:not(.browser-default), input.valid[type=url][_ngcontent-%COMP%]:not(.browser-default):focus, input.valid[type=time][_ngcontent-%COMP%]:not(.browser-default), input.valid[type=time][_ngcontent-%COMP%]:not(.browser-default):focus, input.valid[type=date][_ngcontent-%COMP%]:not(.browser-default), input.valid[type=date][_ngcontent-%COMP%]:not(.browser-default):focus, input.valid[type=datetime][_ngcontent-%COMP%]:not(.browser-default), input.valid[type=datetime][_ngcontent-%COMP%]:not(.browser-default):focus, input.valid[type=datetime-local][_ngcontent-%COMP%]:not(.browser-default), input.valid[type=datetime-local][_ngcontent-%COMP%]:not(.browser-default):focus, input.valid[type=tel][_ngcontent-%COMP%]:not(.browser-default), input.valid[type=tel][_ngcontent-%COMP%]:not(.browser-default):focus, input.valid[type=number][_ngcontent-%COMP%]:not(.browser-default), input.valid[type=number][_ngcontent-%COMP%]:not(.browser-default):focus, input.valid[type=search][_ngcontent-%COMP%]:not(.browser-default), input.valid[type=search][_ngcontent-%COMP%]:not(.browser-default):focus, textarea.materialize-textarea.valid[_ngcontent-%COMP%], textarea.materialize-textarea.valid[_ngcontent-%COMP%]:focus, .select-wrapper.valid[_ngcontent-%COMP%]    > input.select-dropdown[_ngcontent-%COMP%] {\r\n  border-bottom: 1px solid #4CAF50;\r\n  box-shadow: 0 1px 0 0 #4CAF50;\r\n}\r\n\r\n input.invalid[_ngcontent-%COMP%]:not([type]), input.invalid[_ngcontent-%COMP%]:not([type]):focus, input.invalid[type=text][_ngcontent-%COMP%]:not(.browser-default), input.invalid[type=text][_ngcontent-%COMP%]:not(.browser-default):focus, input.invalid[type=password][_ngcontent-%COMP%]:not(.browser-default), input.invalid[type=password][_ngcontent-%COMP%]:not(.browser-default):focus, input.invalid[type=email][_ngcontent-%COMP%]:not(.browser-default), input.invalid[type=email][_ngcontent-%COMP%]:not(.browser-default):focus, input.invalid[type=url][_ngcontent-%COMP%]:not(.browser-default), input.invalid[type=url][_ngcontent-%COMP%]:not(.browser-default):focus, input.invalid[type=time][_ngcontent-%COMP%]:not(.browser-default), input.invalid[type=time][_ngcontent-%COMP%]:not(.browser-default):focus, input.invalid[type=date][_ngcontent-%COMP%]:not(.browser-default), input.invalid[type=date][_ngcontent-%COMP%]:not(.browser-default):focus, input.invalid[type=datetime][_ngcontent-%COMP%]:not(.browser-default), input.invalid[type=datetime][_ngcontent-%COMP%]:not(.browser-default):focus, input.invalid[type=datetime-local][_ngcontent-%COMP%]:not(.browser-default), input.invalid[type=datetime-local][_ngcontent-%COMP%]:not(.browser-default):focus, input.invalid[type=tel][_ngcontent-%COMP%]:not(.browser-default), input.invalid[type=tel][_ngcontent-%COMP%]:not(.browser-default):focus, input.invalid[type=number][_ngcontent-%COMP%]:not(.browser-default), input.invalid[type=number][_ngcontent-%COMP%]:not(.browser-default):focus, input.invalid[type=search][_ngcontent-%COMP%]:not(.browser-default), input.invalid[type=search][_ngcontent-%COMP%]:not(.browser-default):focus, textarea.materialize-textarea.invalid[_ngcontent-%COMP%], textarea.materialize-textarea.invalid[_ngcontent-%COMP%]:focus, .select-wrapper.invalid[_ngcontent-%COMP%]    > input.select-dropdown[_ngcontent-%COMP%], .select-wrapper.invalid[_ngcontent-%COMP%]    > input.select-dropdown[_ngcontent-%COMP%]:focus {\r\n  border-bottom: 1px solid #F44336;\r\n  box-shadow: 0 1px 0 0 #F44336;\r\n}\r\n\r\n input[_ngcontent-%COMP%]:not([type]).valid    ~ .helper-text[data-success][_ngcontent-%COMP%], input[_ngcontent-%COMP%]:not([type]):focus.valid    ~ .helper-text[data-success][_ngcontent-%COMP%], input[_ngcontent-%COMP%]:not([type]).invalid    ~ .helper-text[data-error][_ngcontent-%COMP%], input[_ngcontent-%COMP%]:not([type]):focus.invalid    ~ .helper-text[data-error][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]:not(.browser-default).valid    ~ .helper-text[data-success][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ .helper-text[data-success][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]:not(.browser-default).invalid    ~ .helper-text[data-error][_ngcontent-%COMP%], input[type=text][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ .helper-text[data-error][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]:not(.browser-default).valid    ~ .helper-text[data-success][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ .helper-text[data-success][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]:not(.browser-default).invalid    ~ .helper-text[data-error][_ngcontent-%COMP%], input[type=password][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ .helper-text[data-error][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%]:not(.browser-default).valid    ~ .helper-text[data-success][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ .helper-text[data-success][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%]:not(.browser-default).invalid    ~ .helper-text[data-error][_ngcontent-%COMP%], input[type=email][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ .helper-text[data-error][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%]:not(.browser-default).valid    ~ .helper-text[data-success][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ .helper-text[data-success][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%]:not(.browser-default).invalid    ~ .helper-text[data-error][_ngcontent-%COMP%], input[type=url][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ .helper-text[data-error][_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%]:not(.browser-default).valid    ~ .helper-text[data-success][_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ .helper-text[data-success][_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%]:not(.browser-default).invalid    ~ .helper-text[data-error][_ngcontent-%COMP%], input[type=time][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ .helper-text[data-error][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]:not(.browser-default).valid    ~ .helper-text[data-success][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ .helper-text[data-success][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]:not(.browser-default).invalid    ~ .helper-text[data-error][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ .helper-text[data-error][_ngcontent-%COMP%], input[type=datetime][_ngcontent-%COMP%]:not(.browser-default).valid    ~ .helper-text[data-success][_ngcontent-%COMP%], input[type=datetime][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ .helper-text[data-success][_ngcontent-%COMP%], input[type=datetime][_ngcontent-%COMP%]:not(.browser-default).invalid    ~ .helper-text[data-error][_ngcontent-%COMP%], input[type=datetime][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ .helper-text[data-error][_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%]:not(.browser-default).valid    ~ .helper-text[data-success][_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ .helper-text[data-success][_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%]:not(.browser-default).invalid    ~ .helper-text[data-error][_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ .helper-text[data-error][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%]:not(.browser-default).valid    ~ .helper-text[data-success][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ .helper-text[data-success][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%]:not(.browser-default).invalid    ~ .helper-text[data-error][_ngcontent-%COMP%], input[type=tel][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ .helper-text[data-error][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]:not(.browser-default).valid    ~ .helper-text[data-success][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ .helper-text[data-success][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]:not(.browser-default).invalid    ~ .helper-text[data-error][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ .helper-text[data-error][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%]:not(.browser-default).valid    ~ .helper-text[data-success][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ .helper-text[data-success][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%]:not(.browser-default).invalid    ~ .helper-text[data-error][_ngcontent-%COMP%], input[type=search][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ .helper-text[data-error][_ngcontent-%COMP%], textarea.materialize-textarea.valid[_ngcontent-%COMP%]    ~ .helper-text[data-success][_ngcontent-%COMP%], textarea.materialize-textarea[_ngcontent-%COMP%]:focus.valid    ~ .helper-text[data-success][_ngcontent-%COMP%], textarea.materialize-textarea.invalid[_ngcontent-%COMP%]    ~ .helper-text[data-error][_ngcontent-%COMP%], textarea.materialize-textarea[_ngcontent-%COMP%]:focus.invalid    ~ .helper-text[data-error][_ngcontent-%COMP%], .select-wrapper.valid[_ngcontent-%COMP%]   .helper-text[data-success][_ngcontent-%COMP%], .select-wrapper.invalid[_ngcontent-%COMP%]    ~ .helper-text[data-error][_ngcontent-%COMP%] {\r\n  color: transparent;\r\n  -webkit-user-select: none;\r\n          user-select: none;\r\n  pointer-events: none;\r\n}\r\n\r\n input[_ngcontent-%COMP%]:not([type]).valid    ~ .helper-text[_ngcontent-%COMP%]:after, input[_ngcontent-%COMP%]:not([type]):focus.valid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=text][_ngcontent-%COMP%]:not(.browser-default).valid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=text][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=password][_ngcontent-%COMP%]:not(.browser-default).valid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=password][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=email][_ngcontent-%COMP%]:not(.browser-default).valid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=email][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=url][_ngcontent-%COMP%]:not(.browser-default).valid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=url][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=time][_ngcontent-%COMP%]:not(.browser-default).valid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=time][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=date][_ngcontent-%COMP%]:not(.browser-default).valid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=date][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=datetime][_ngcontent-%COMP%]:not(.browser-default).valid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=datetime][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=datetime-local][_ngcontent-%COMP%]:not(.browser-default).valid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=datetime-local][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=tel][_ngcontent-%COMP%]:not(.browser-default).valid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=tel][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=number][_ngcontent-%COMP%]:not(.browser-default).valid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=number][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=search][_ngcontent-%COMP%]:not(.browser-default).valid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=search][_ngcontent-%COMP%]:not(.browser-default):focus.valid    ~ .helper-text[_ngcontent-%COMP%]:after, textarea.materialize-textarea.valid[_ngcontent-%COMP%]    ~ .helper-text[_ngcontent-%COMP%]:after, textarea.materialize-textarea[_ngcontent-%COMP%]:focus.valid    ~ .helper-text[_ngcontent-%COMP%]:after, .select-wrapper.valid[_ngcontent-%COMP%]    ~ .helper-text[_ngcontent-%COMP%]:after {\r\n  content: attr(data-success);\r\n  color: #4CAF50;\r\n}\r\n\r\n input[_ngcontent-%COMP%]:not([type]).invalid    ~ .helper-text[_ngcontent-%COMP%]:after, input[_ngcontent-%COMP%]:not([type]):focus.invalid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=text][_ngcontent-%COMP%]:not(.browser-default).invalid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=text][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=password][_ngcontent-%COMP%]:not(.browser-default).invalid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=password][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=email][_ngcontent-%COMP%]:not(.browser-default).invalid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=email][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=url][_ngcontent-%COMP%]:not(.browser-default).invalid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=url][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=time][_ngcontent-%COMP%]:not(.browser-default).invalid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=time][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=date][_ngcontent-%COMP%]:not(.browser-default).invalid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=date][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=datetime][_ngcontent-%COMP%]:not(.browser-default).invalid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=datetime][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=datetime-local][_ngcontent-%COMP%]:not(.browser-default).invalid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=datetime-local][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=tel][_ngcontent-%COMP%]:not(.browser-default).invalid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=tel][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=number][_ngcontent-%COMP%]:not(.browser-default).invalid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=number][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=search][_ngcontent-%COMP%]:not(.browser-default).invalid    ~ .helper-text[_ngcontent-%COMP%]:after, input[type=search][_ngcontent-%COMP%]:not(.browser-default):focus.invalid    ~ .helper-text[_ngcontent-%COMP%]:after, textarea.materialize-textarea.invalid[_ngcontent-%COMP%]    ~ .helper-text[_ngcontent-%COMP%]:after, textarea.materialize-textarea[_ngcontent-%COMP%]:focus.invalid    ~ .helper-text[_ngcontent-%COMP%]:after, .select-wrapper.invalid[_ngcontent-%COMP%]    ~ .helper-text[_ngcontent-%COMP%]:after {\r\n  content: attr(data-error);\r\n  color: #F44336;\r\n}\r\n\r\n input[_ngcontent-%COMP%]:not([type])    + label[_ngcontent-%COMP%]:after, input[type=text][_ngcontent-%COMP%]:not(.browser-default)    + label[_ngcontent-%COMP%]:after, input[type=password][_ngcontent-%COMP%]:not(.browser-default)    + label[_ngcontent-%COMP%]:after, input[type=email][_ngcontent-%COMP%]:not(.browser-default)    + label[_ngcontent-%COMP%]:after, input[type=url][_ngcontent-%COMP%]:not(.browser-default)    + label[_ngcontent-%COMP%]:after, input[type=time][_ngcontent-%COMP%]:not(.browser-default)    + label[_ngcontent-%COMP%]:after, input[type=date][_ngcontent-%COMP%]:not(.browser-default)    + label[_ngcontent-%COMP%]:after, input[type=datetime][_ngcontent-%COMP%]:not(.browser-default)    + label[_ngcontent-%COMP%]:after, input[type=datetime-local][_ngcontent-%COMP%]:not(.browser-default)    + label[_ngcontent-%COMP%]:after, input[type=tel][_ngcontent-%COMP%]:not(.browser-default)    + label[_ngcontent-%COMP%]:after, input[type=number][_ngcontent-%COMP%]:not(.browser-default)    + label[_ngcontent-%COMP%]:after, input[type=search][_ngcontent-%COMP%]:not(.browser-default)    + label[_ngcontent-%COMP%]:after, textarea.materialize-textarea[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after, .select-wrapper[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%]:after {\r\n  display: block;\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 0;\r\n  opacity: 0;\r\n  transition: .2s opacity ease-out, .2s color ease-out;\r\n}\r\n\r\n .input-field[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin-top: 1rem;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n .input-field.inline[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  margin-left: 5px;\r\n}\r\n\r\n .input-field.inline[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .input-field.inline[_ngcontent-%COMP%]   .select-dropdown[_ngcontent-%COMP%] {\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n .input-field.col[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\r\n  left: 0.75rem;\r\n}\r\n\r\n .input-field.col[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%]    ~ label[_ngcontent-%COMP%], .input-field.col[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%]    ~ .validate[_ngcontent-%COMP%]    ~ label[_ngcontent-%COMP%] {\r\n  width: calc(100% - 3rem - 1.5rem);\r\n}\r\n\r\n .input-field[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%] {\r\n  color: #9e9e9e;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  font-size: 1rem;\r\n  cursor: text;\r\n  transition: transform .2s ease-out, color .2s ease-out;\r\n  transform-origin: 0% 100%;\r\n  text-align: initial;\r\n  transform: translateY(12px);\r\n}\r\n\r\n .input-field[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:not(.label-icon).active {\r\n  transform: translateY(-14px) scale(0.8);\r\n  transform-origin: 0 0;\r\n}\r\n\r\n .input-field[_ngcontent-%COMP%]    > input[type][_ngcontent-%COMP%]:-webkit-autofill:not(.browser-default):not([type=\"search\"])    + label[_ngcontent-%COMP%], .input-field[_ngcontent-%COMP%]    > input[type=date][_ngcontent-%COMP%]:not(.browser-default)    + label[_ngcontent-%COMP%], .input-field[_ngcontent-%COMP%]    > input[type=time][_ngcontent-%COMP%]:not(.browser-default)    + label[_ngcontent-%COMP%] {\r\n  transform: translateY(-14px) scale(0.8);\r\n  transform-origin: 0 0;\r\n}\r\n\r\n .input-field[_ngcontent-%COMP%]   .helper-text[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  min-height: 18px;\r\n  display: block;\r\n  font-size: 12px;\r\n  color: rgba(0, 0, 0, 0.54);\r\n}\r\n\r\n .input-field[_ngcontent-%COMP%]   .helper-text[_ngcontent-%COMP%]::after {\r\n  opacity: 1;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n\r\n .input-field[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 3rem;\r\n  font-size: 2rem;\r\n  transition: color .2s;\r\n  top: 0.5rem;\r\n}\r\n\r\n .input-field[_ngcontent-%COMP%]   .prefix.active[_ngcontent-%COMP%] {\r\n  color: #26a69a;\r\n}\r\n\r\n .input-field[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%]    ~ input[_ngcontent-%COMP%], .input-field[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%]    ~ textarea[_ngcontent-%COMP%], .input-field[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%]    ~ label[_ngcontent-%COMP%], .input-field[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%]    ~ .validate[_ngcontent-%COMP%]    ~ label[_ngcontent-%COMP%], .input-field[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%]    ~ .helper-text[_ngcontent-%COMP%], .input-field[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%]    ~ .autocomplete-content[_ngcontent-%COMP%] {\r\n  margin-left: 3rem;\r\n  width: 92%;\r\n  width: calc(100% - 3rem);\r\n}\r\n\r\n .input-field[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%]    ~ label[_ngcontent-%COMP%] {\r\n  margin-left: 3rem;\r\n}\r\n\r\n @media only screen and (max-width: 992px) {\r\n  .input-field[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%]    ~ input[_ngcontent-%COMP%] {\r\n    width: 86%;\r\n    width: calc(100% - 3rem);\r\n  }\r\n}\r\n\r\n @media only screen and (max-width: 600px) {\r\n  .input-field[_ngcontent-%COMP%]   .prefix[_ngcontent-%COMP%]    ~ input[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    width: calc(100% - 3rem);\r\n  }\r\n}\r\n\r\n \r\n\r\n .input-field[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%] {\r\n  display: block;\r\n  line-height: inherit;\r\n  transition: .3s background-color;\r\n}\r\n\r\n .nav-wrapper[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%] {\r\n  height: inherit;\r\n  padding-left: 4rem;\r\n  width: calc(100% - 4rem);\r\n  border: 0;\r\n  box-shadow: none;\r\n}\r\n\r\n .input-field[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%]:focus:not(.browser-default) {\r\n  background-color: #fff;\r\n  border: 0;\r\n  box-shadow: none;\r\n  color: #444;\r\n}\r\n\r\n .input-field[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%]:focus:not(.browser-default)    + label[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], .input-field[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%]:focus:not(.browser-default)    ~ .mdi-navigation-close[_ngcontent-%COMP%], .input-field[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%]:focus:not(.browser-default)    ~ .material-icons[_ngcontent-%COMP%] {\r\n  color: #444;\r\n}\r\n\r\n .input-field[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%]    + .label-icon[_ngcontent-%COMP%] {\r\n  transform: none;\r\n  left: 1rem;\r\n}\r\n\r\n .input-field[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%]    ~ .mdi-navigation-close[_ngcontent-%COMP%], .input-field[_ngcontent-%COMP%]   input[type=search][_ngcontent-%COMP%]    ~ .material-icons[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 1rem;\r\n  color: transparent;\r\n  cursor: pointer;\r\n  font-size: 2rem;\r\n  transition: .3s color;\r\n}\r\n\r\n \r\n\r\n textarea[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: transparent;\r\n}\r\n\r\n textarea.materialize-textarea[_ngcontent-%COMP%] {\r\n  line-height: normal;\r\n  overflow-y: hidden;\r\n  \r\n  padding: .8rem 0 .8rem 0;\r\n  \r\n  resize: none;\r\n  min-height: 3rem;\r\n  box-sizing: border-box;\r\n}\r\n\r\n .hiddendiv[_ngcontent-%COMP%] {\r\n  visibility: hidden;\r\n  white-space: pre-wrap;\r\n  word-wrap: break-word;\r\n  overflow-wrap: break-word;\r\n  \r\n  padding-top: 1.2rem;\r\n  \r\n  position: absolute;\r\n  top: 0;\r\n  z-index: -1;\r\n}\r\n\r\n \r\n\r\n .autocomplete-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\r\n  color: #444;\r\n}\r\n\r\n .autocomplete-content[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  height: 40px;\r\n  width: 40px;\r\n  margin: 5px 15px;\r\n}\r\n\r\n \r\n\r\n .character-counter[_ngcontent-%COMP%] {\r\n  min-height: 18px;\r\n}\r\n\r\n \r\n\r\n .file-field[_ngcontent-%COMP%] {\r\n  position: relative;\r\n\r\n}\r\n\r\n .file-field[_ngcontent-%COMP%]   .file-path-wrapper[_ngcontent-%COMP%] {\r\n  overflow: hidden;\r\n  padding-left: 10px;\r\n}\r\n\r\n .file-field[_ngcontent-%COMP%]   input.file-path[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n .file-field[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .file-field[_ngcontent-%COMP%]   .btn-large[_ngcontent-%COMP%], .file-field[_ngcontent-%COMP%]   .btn-small[_ngcontent-%COMP%] {\r\n  float: left;\r\n  line-height: 3rem;\r\n}\r\n\r\n .file-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n .file-field[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  opacity: 0;\r\n  filter: alpha(opacity=0);\r\n}\r\n\r\n .file-field[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%]::-webkit-file-upload-button {\r\n  display: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZHByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxjQUFjO0NBQ2Y7O0NBRUE7O0VBRUMsWUFBWTtDQUNiOztDQUNEO0VBQ0UseUJBQXlCO0FBQzNCOztDQUdBOztFQUVFOztDQUNGOztFQUVFLFlBQVk7QUFDZDs7Q0FFQTs7O0VBR0U7O0NBQ0Y7RUFDRSw2QkFBNkI7RUFDN0IsTUFBTTtFQUNOLG9CQUFvQjtFQUNwQixNQUFNO0FBQ1I7O0NBRUE7O0VBRUU7O0NBQ0Y7O0VBRUUsd0JBQXdCO0FBQzFCOztDQUVBOzs7RUFHRTs7Q0FDRjtFQUNFLDBCQUEwQjtFQUMxQixNQUFNO0VBQ04sYUFBYTtFQUNiLE1BQU07QUFDUjs7Q0FFQTsrRUFDK0U7O0NBQy9FOzs7RUFHRTs7Q0FDRjs7RUFFRSxjQUFjO0FBQ2hCOztDQUVBOztFQUVFOztDQUNGO0VBQ0Usa0JBQWtCO0FBQ3BCOztDQUVBOytFQUMrRTs7Q0FDL0U7O0VBRUU7O0NBQ0Y7RUFDRSxxQkFBcUI7QUFDdkI7O0NBRUE7O0VBRUU7O0NBQ0Y7RUFDRSxhQUFhO0FBQ2Y7O0NBRUE7K0VBQytFOztDQUMvRTs7RUFFRTs7Q0FDRjtFQUNFLGFBQWE7QUFDZjs7Q0FFQTtFQUVVLHNCQUFzQjtBQUNoQzs7Q0FFQTtFQUVVLG1CQUFtQjtBQUM3Qjs7Q0FHQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0NBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0NBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLHdDQUF3QztBQUMxQzs7Q0FFQTtFQUlFLGFBQWE7RUFJTCxtQkFBbUI7QUFDN0I7O0NBRUE7RUFDRSxXQUFXO0FBQ2I7O0NBRUE7RUFFVSwyQkFBMkI7QUFDckM7O0NBRUEsMEJBQTBCOztDQUMxQjtFQUVVLCtHQUErRztBQUN6SDs7Q0FFQTtFQUVVLCtHQUErRztBQUN6SDs7Q0FFQSwwQkFBMEI7O0NBQzFCO0VBRVUsZ0hBQWdIO0FBQzFIOztDQUVBLDJCQUEyQjs7Q0FDM0I7RUFFVSxxSEFBcUg7QUFDL0g7O0NBRUEsbUJBQW1COztDQUNuQjtFQUVVLHVIQUF1SDtBQUNqSTs7Q0FFQSxtQkFBbUI7O0NBQ25CO0VBRVUsd0hBQXdIO0FBQ2xJOztDQUdBOzttQkFFbUI7O0NBQ25CO0VBQ0Usd0JBQXdCO0FBQzFCOztDQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztDQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztDQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztDQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztDQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztDQWVBOztFQUVFLHlCQUF5QjtVQUdqQixpQkFBaUI7QUFDM0I7O0NBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0NBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7Q0FFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7Q0FFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7Q0FFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixjQUFjO0VBQ2QsWUFBWTtFQUVKLHNCQUFzQjtBQUNoQzs7Q0FFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0NBRUE7RUFDRSxlQUFlO0FBQ2pCOztDQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztDQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWiw0QkFBNEI7QUFDOUI7O0NBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0NBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0NBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0NBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7Q0FFQSxtRkFBbUY7O0NBQ25GO0VBQ0Usa0NBQWtDO0VBRzFCLDZCQUE2QjtBQUN2Qzs7Q0FFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztDQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7QUFDRjs7Q0FFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0NBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOztDQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7Q0FFQTtFQUNFLFVBQVU7QUFDWjs7Q0FFQTtFQUNFLGlCQUFpQjtBQUNuQjs7Q0FFQTtFQUNFLGNBQWM7QUFDaEI7O0NBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7Q0FFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsV0FBVztBQUNiOztDQUVBO0VBQ0UsV0FBVztFQUVILHNCQUFzQjtFQUM5QixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7Q0FFQTtFQUNFLGtCQUFrQjtBQUNwQjs7Q0FFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7Q0FFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7Q0FFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7Q0FFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7Q0FFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7Q0FFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7Q0FFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7Q0FFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7Q0FFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7Q0FFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7Q0FFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7Q0FFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFdBQVc7QUFDYjs7Q0FFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7Q0FFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7Q0FFQTtFQUNFLG1CQUFtQjtBQUNyQjs7Q0FFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7Q0FFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7Q0FFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7Q0FFQTtFQUNFLGdCQUFnQjtBQUNsQjs7Q0FFQTtFQUNFLFVBQVU7QUFDWjs7Q0FFQTtFQUNFLFNBQVM7QUFDWDs7Q0FFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7Q0FFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7Q0FFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7Q0FFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7Q0FFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7Q0FFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7Q0FFQTtFQUNFLGdCQUFnQjtBQUNsQjs7Q0FFQTtFQUNFLFVBQVU7QUFDWjs7Q0FFQTtFQUNFLFNBQVM7QUFDWDs7Q0FFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7Q0FFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7Q0FFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7Q0FFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7Q0FFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7Q0FFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7Q0FFQTtFQUNFLGdCQUFnQjtBQUNsQjs7Q0FFQTtFQUNFLFVBQVU7QUFDWjs7Q0FFQTtFQUNFLFNBQVM7QUFDWDs7Q0FFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7Q0FFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7Q0FFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7Q0FFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7Q0FFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7Q0FFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7Q0FFQTtFQUNFLGlCQUFpQjtBQUNuQjs7Q0FFQTtFQUNFLFdBQVc7QUFDYjs7Q0FFQTtFQUNFLFVBQVU7QUFDWjs7Q0FRQTs7RUFFRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHdDQUF3QztBQUMxQzs7Q0FJQSxnQkFBZ0I7O0NBQ2hCOzs7Ozs7Ozs7Ozs7O0VBYUUsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0VBQ2YsVUFBVTtFQUVGLGdCQUFnQjtFQUVoQix1QkFBdUI7RUFHL0Isc0NBQXNDO0FBRXhDOztDQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBeUJFLDBCQUEwQjtFQUMxQiw2Q0FBNkM7QUFDL0M7O0NBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMEJFLDBCQUEwQjtBQUM1Qjs7Q0FFQTs7Ozs7Ozs7Ozs7Ozs7QUFjQTs7Q0FFQTs7Ozs7Ozs7Ozs7OztFQWFFLGNBQWM7QUFDaEI7O0NBRUE7Ozs7Ozs7Ozs7Ozs7RUFhRSxjQUFjO0FBQ2hCOztDQUVBOzs7Ozs7Ozs7Ozs7O0VBYUUsY0FBYztBQUNoQjs7Q0FFQTs7Ozs7Ozs7Ozs7OztFQWFFLFdBQVc7QUFDYjs7Q0FFQSxpQ0FBaUM7O0NBQ2pDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBeUJFLGdDQUFnQztFQUV4Qiw2QkFBNkI7QUFDdkM7O0NBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMEJFLGdDQUFnQztFQUV4Qiw2QkFBNkI7QUFDdkM7O0NBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBcURFLGtCQUFrQjtFQUNsQix5QkFBeUI7VUFHakIsaUJBQWlCO0VBQ3pCLG9CQUFvQjtBQUN0Qjs7Q0FFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEwQkUsMkJBQTJCO0VBQzNCLGNBQWM7QUFDaEI7O0NBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMEJFLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztDQUVBOzs7Ozs7Ozs7Ozs7O0VBYUUsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxVQUFVO0VBRVYsb0RBQW9EO0FBQ3REOztDQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7O0NBRUE7RUFDRSxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7Q0FFQTs7RUFFRSxtQkFBbUI7QUFDckI7O0NBRUE7RUFDRSxhQUFhO0FBQ2Y7O0NBRUE7O0VBRUUsaUNBQWlDO0FBQ25DOztDQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLGVBQWU7RUFDZixZQUFZO0VBR1osc0RBQXNEO0VBRzlDLHlCQUF5QjtFQUNqQyxtQkFBbUI7RUFFWCwyQkFBMkI7QUFDckM7O0NBRUE7RUFFVSx1Q0FBdUM7RUFFdkMscUJBQXFCO0FBQy9COztDQUVBOzs7RUFJVSx1Q0FBdUM7RUFFdkMscUJBQXFCO0FBQy9COztDQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsZUFBZTtFQUNmLDBCQUEwQjtBQUM1Qjs7Q0FFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87QUFDVDs7Q0FFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUVmLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0NBRUE7RUFDRSxjQUFjO0FBQ2hCOztDQUVBOzs7Ozs7RUFNRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLHdCQUF3QjtBQUMxQjs7Q0FFQTtFQUNFLGlCQUFpQjtBQUNuQjs7Q0FFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLHdCQUF3QjtFQUMxQjtBQUNGOztDQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1Ysd0JBQXdCO0VBQzFCO0FBQ0Y7O0NBRUEsaUJBQWlCOztDQUNqQjtFQUNFLGNBQWM7RUFDZCxvQkFBb0I7RUFFcEIsZ0NBQWdDO0FBQ2xDOztDQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsU0FBUztFQUVELGdCQUFnQjtBQUMxQjs7Q0FFQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBRUQsZ0JBQWdCO0VBQ3hCLFdBQVc7QUFDYjs7Q0FFQTs7O0VBR0UsV0FBVztBQUNiOztDQUVBO0VBRVUsZUFBZTtFQUN2QixVQUFVO0FBQ1o7O0NBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBRWYscUJBQXFCO0FBQ3ZCOztDQUVBLGFBQWE7O0NBQ2I7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0FBQy9COztDQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw4QkFBOEI7RUFDOUIsd0JBQXdCO0VBQ3hCLHlDQUF5QztFQUN6QyxZQUFZO0VBQ1osZ0JBQWdCO0VBRVIsc0JBQXNCO0FBQ2hDOztDQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLDZDQUE2QztFQUM3QyxtQkFBbUI7RUFDbkIseUNBQXlDO0VBQ3pDLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztBQUNiOztDQUlBLGlCQUFpQjs7Q0FDakI7RUFDRSxXQUFXO0FBQ2I7O0NBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7Q0FFQSxzQkFBc0I7O0NBQ3RCO0VBQ0UsZ0JBQWdCO0FBQ2xCOztDQU1BOytFQUMrRTs7Q0FDL0U7RUFDRSxrQkFBa0I7O0FBRXBCOztDQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7Q0FFQTtFQUNFLFdBQVc7QUFDYjs7Q0FFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0NBRUE7RUFDRSxlQUFlO0FBQ2pCOztDQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7RUFDVixlQUFlO0VBQ2YsZUFBZTtFQUNmLFVBQVU7RUFDVix3QkFBd0I7QUFDMUI7O0NBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoiYWRkcHJvZHVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhjZW50ZXIge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gfVxyXG5cclxuIHRleHRhcmVhXHJcbiB7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gfVxyXG4ubWF0ZXJpYWxpemUtcmVkLXRleHQge1xyXG4gIGNvbG9yOiAjZTUxYzIzICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxyXG4gKi9cclxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi8qKlxyXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cclxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXHJcbiAqL1xyXG5bdHlwZT1cInNlYXJjaFwiXSB7XHJcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XHJcbiAgLyogMSAqL1xyXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4O1xyXG4gIC8qIDIgKi9cclxufVxyXG5cclxuLyoqXHJcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBhbmQgY2FuY2VsIGJ1dHRvbnMgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXHJcbiAqL1xyXG5bdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcclxuW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXHJcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cclxuICovXHJcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xyXG4gIC8qIDEgKi9cclxuICBmb250OiBpbmhlcml0O1xyXG4gIC8qIDIgKi9cclxufVxyXG5cclxuLyogSW50ZXJhY3RpdmVcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuLypcclxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXHJcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFLCBhbmQgRmlyZWZveC5cclxuICovXHJcbmRldGFpbHMsXHJcbm1lbnUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKlxyXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXHJcbiAqL1xyXG5zdW1tYXJ5IHtcclxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XHJcbn1cclxuXHJcbi8qIFNjcmlwdGluZ1xyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4vKipcclxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgOS0uXHJcbiAqL1xyXG5jYW52YXMge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFLlxyXG4gKi9cclxudGVtcGxhdGUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi8qIEhpZGRlblxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4vKipcclxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAtLlxyXG4gKi9cclxuW2hpZGRlbl0ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGluaGVyaXQ7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG59XHJcblxyXG5cclxudWw6bm90KC5icm93c2VyLWRlZmF1bHQpIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG51bDpub3QoLmJyb3dzZXItZGVmYXVsdCkgPiBsaSB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogIzAzOWJlNTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnZhbGlnbi13cmFwcGVyIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XHJcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xyXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jbGVhcmZpeCB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi56LWRlcHRoLTAge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiAyZHAgZWxldmF0aW9uIG1vZGlmaWVkKi9cclxuLnotZGVwdGgtMSwgbmF2LCAuY2FyZC1wYW5lbCwgLmNhcmQsIC50b2FzdCwgLmJ0biwgLmJ0bi1sYXJnZSwgLmJ0bi1zbWFsbCwgLmJ0bi1mbG9hdGluZywgLmRyb3Bkb3duLWNvbnRlbnQsIC5jb2xsYXBzaWJsZSwgLnNpZGVuYXYge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4uei1kZXB0aC0xLWhhbGYsIC5idG46aG92ZXIsIC5idG4tbGFyZ2U6aG92ZXIsIC5idG4tc21hbGw6aG92ZXIsIC5idG4tZmxvYXRpbmc6aG92ZXIge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggN3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAzcHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggN3B4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAzcHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4vKiA2ZHAgZWxldmF0aW9uIG1vZGlmaWVkKi9cclxuLnotZGVwdGgtMiB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuLyogMTJkcCBlbGV2YXRpb24gbW9kaWZpZWQqL1xyXG4uei1kZXB0aC0zIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgOHB4IDE3cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgOHB4IDE3cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5cclxuLyogMTZkcCBlbGV2YXRpb24gKi9cclxuLnotZGVwdGgtNCB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA4cHggMTBweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgMTZweCAyNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4vKiAyNGRwIGVsZXZhdGlvbiAqL1xyXG4uei1kZXB0aC01LCAubW9kYWwge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKipcclxuICBVdGlsaXR5IENsYXNzZXNcclxuKioqKioqKioqKioqKioqKioqKi9cclxuLmhpZGUge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxlZnQtYWxpZ24ge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5yaWdodC1hbGlnbiB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5jZW50ZXIsIC5jZW50ZXItYWxpZ24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxlZnQge1xyXG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4ubm8tc2VsZWN0LCBpbnB1dFt0eXBlPXJhbmdlXSxcclxuaW5wdXRbdHlwZT1yYW5nZV0gKyAudGh1bWIge1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbn1cclxuXHJcbi5jaXJjbGUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmNlbnRlci1ibG9jayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4udHJ1bmNhdGUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLm5vLXBhZGRpbmcge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuc3Bhbi5iYWRnZSB7XHJcbiAgbWluLXdpZHRoOiAzcmVtO1xyXG4gIHBhZGRpbmc6IDAgNnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgaGVpZ2h0OiAyMnB4O1xyXG4gIGNvbG9yOiAjNzU3NTc1O1xyXG4gIGZsb2F0OiByaWdodDtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5zcGFuLmJhZGdlLm5ldyB7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjZhNjlhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuc3Bhbi5iYWRnZS5uZXc6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiIG5ld1wiO1xyXG59XHJcblxyXG5zcGFuLmJhZGdlW2RhdGEtYmFkZ2UtY2FwdGlvbl06OmFmdGVyIHtcclxuICBjb250ZW50OiBcIiBcIiBhdHRyKGRhdGEtYmFkZ2UtY2FwdGlvbik7XHJcbn1cclxuXHJcbm5hdiB1bCBhIHNwYW4uYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmbG9hdDogbm9uZTtcclxuICBtYXJnaW4tbGVmdDogNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIGhlaWdodDogMjJweDtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhdXRvO1xyXG59XHJcblxyXG4uY29sbGVjdGlvbi1pdGVtIHNwYW4uYmFkZ2Uge1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoMC43NXJlbSAtIDExcHgpO1xyXG59XHJcblxyXG4uY29sbGFwc2libGUgc3Bhbi5iYWRnZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi5zaWRlbmF2IHNwYW4uYmFkZ2Uge1xyXG4gIG1hcmdpbi10b3A6IGNhbGMoMjRweCAtIDExcHgpO1xyXG59XHJcblxyXG50YWJsZSBzcGFuLmJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuXHJcbi8qIFRoaXMgaXMgbmVlZGVkIGZvciBzb21lIG1vYmlsZSBwaG9uZXMgdG8gZGlzcGxheSB0aGUgR29vZ2xlIEljb24gZm9udCBwcm9wZXJseSAqL1xyXG4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcbiAgLXdlYmtpdC1mb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcclxuICAgICAtbW96LWZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnO1xyXG4gICAgICAgICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIG1heC13aWR0aDogMTI4MHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAxcHgpIHtcclxuICAuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5M3B4KSB7XHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gIH1cclxufVxyXG5cclxuLmNvbCAucm93IHtcclxuICBtYXJnaW4tbGVmdDogLTAuNzVyZW07XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMC43NXJlbTtcclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uc2VjdGlvbi5uby1wYWQge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5zZWN0aW9uLm5vLXBhZC1ib3Qge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG4uc2VjdGlvbi5uby1wYWQtdG9wIHtcclxuICBwYWRkaW5nLXRvcDogMDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5yb3c6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5yb3cgLmNvbCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAwIDAuNzVyZW07XHJcbiAgbWluLWhlaWdodDogMXB4O1xyXG59XHJcblxyXG4ucm93IC5jb2xbY2xhc3MqPVwicHVzaC1cIl0sIC5yb3cgLmNvbFtjbGFzcyo9XCJwdWxsLVwiXSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucm93IC5jb2wuczEge1xyXG4gIHdpZHRoOiA4LjMzMzMzMzMzMzMlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5yb3cgLmNvbC5zMiB7XHJcbiAgd2lkdGg6IDE2LjY2NjY2NjY2NjclO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5yb3cgLmNvbC5zMyB7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBsZWZ0OiBhdXRvO1xyXG4gIHJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ucm93IC5jb2wuczQge1xyXG4gIHdpZHRoOiAzMy4zMzMzMzMzMzMzJTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBsZWZ0OiBhdXRvO1xyXG4gIHJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ucm93IC5jb2wuczUge1xyXG4gIHdpZHRoOiA0MS42NjY2NjY2NjY3JTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBsZWZ0OiBhdXRvO1xyXG4gIHJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ucm93IC5jb2wuczYge1xyXG4gIHdpZHRoOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbGVmdDogYXV0bztcclxuICByaWdodDogYXV0bztcclxufVxyXG5cclxuLnJvdyAuY29sLnM3IHtcclxuICB3aWR0aDogNTguMzMzMzMzMzMzMyU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbGVmdDogYXV0bztcclxuICByaWdodDogYXV0bztcclxufVxyXG5cclxuLnJvdyAuY29sLnM4IHtcclxuICB3aWR0aDogNjYuNjY2NjY2NjY2NyU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbGVmdDogYXV0bztcclxuICByaWdodDogYXV0bztcclxufVxyXG5cclxuLnJvdyAuY29sLnM5IHtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIGxlZnQ6IGF1dG87XHJcbiAgcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5yb3cgLmNvbC5zMTAge1xyXG4gIHdpZHRoOiA4My4zMzMzMzMzMzMzJTtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBsZWZ0OiBhdXRvO1xyXG4gIHJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ucm93IC5jb2wuczExIHtcclxuICB3aWR0aDogOTEuNjY2NjY2NjY2NyU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbGVmdDogYXV0bztcclxuICByaWdodDogYXV0bztcclxufVxyXG5cclxuLnJvdyAuY29sLnMxMiB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbGVmdDogYXV0bztcclxuICByaWdodDogYXV0bztcclxufVxyXG5cclxuLnJvdyAuY29sLm9mZnNldC1zMSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMzMyU7XHJcbn1cclxuXHJcbi5yb3cgLmNvbC5wdWxsLXMxIHtcclxuICByaWdodDogOC4zMzMzMzMzMzMzJTtcclxufVxyXG5cclxuLnJvdyAuY29sLnB1c2gtczEge1xyXG4gIGxlZnQ6IDguMzMzMzMzMzMzMyU7XHJcbn1cclxuXHJcbi5yb3cgLmNvbC5vZmZzZXQtczIge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NjY3JTtcclxufVxyXG5cclxuLnJvdyAuY29sLnB1bGwtczIge1xyXG4gIHJpZ2h0OiAxNi42NjY2NjY2NjY3JTtcclxufVxyXG5cclxuLnJvdyAuY29sLnB1c2gtczIge1xyXG4gIGxlZnQ6IDE2LjY2NjY2NjY2NjclO1xyXG59XHJcblxyXG4ucm93IC5jb2wub2Zmc2V0LXMzIHtcclxuICBtYXJnaW4tbGVmdDogMjUlO1xyXG59XHJcblxyXG4ucm93IC5jb2wucHVsbC1zMyB7XHJcbiAgcmlnaHQ6IDI1JTtcclxufVxyXG5cclxuLnJvdyAuY29sLnB1c2gtczMge1xyXG4gIGxlZnQ6IDI1JTtcclxufVxyXG5cclxuLnJvdyAuY29sLm9mZnNldC1zNCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzMzMlO1xyXG59XHJcblxyXG4ucm93IC5jb2wucHVsbC1zNCB7XHJcbiAgcmlnaHQ6IDMzLjMzMzMzMzMzMzMlO1xyXG59XHJcblxyXG4ucm93IC5jb2wucHVzaC1zNCB7XHJcbiAgbGVmdDogMzMuMzMzMzMzMzMzMyU7XHJcbn1cclxuXHJcbi5yb3cgLmNvbC5vZmZzZXQtczUge1xyXG4gIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NjY3JTtcclxufVxyXG5cclxuLnJvdyAuY29sLnB1bGwtczUge1xyXG4gIHJpZ2h0OiA0MS42NjY2NjY2NjY3JTtcclxufVxyXG5cclxuLnJvdyAuY29sLnB1c2gtczUge1xyXG4gIGxlZnQ6IDQxLjY2NjY2NjY2NjclO1xyXG59XHJcblxyXG4ucm93IC5jb2wub2Zmc2V0LXM2IHtcclxuICBtYXJnaW4tbGVmdDogNTAlO1xyXG59XHJcblxyXG4ucm93IC5jb2wucHVsbC1zNiB7XHJcbiAgcmlnaHQ6IDUwJTtcclxufVxyXG5cclxuLnJvdyAuY29sLnB1c2gtczYge1xyXG4gIGxlZnQ6IDUwJTtcclxufVxyXG5cclxuLnJvdyAuY29sLm9mZnNldC1zNyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDU4LjMzMzMzMzMzMzMlO1xyXG59XHJcblxyXG4ucm93IC5jb2wucHVsbC1zNyB7XHJcbiAgcmlnaHQ6IDU4LjMzMzMzMzMzMzMlO1xyXG59XHJcblxyXG4ucm93IC5jb2wucHVzaC1zNyB7XHJcbiAgbGVmdDogNTguMzMzMzMzMzMzMyU7XHJcbn1cclxuXHJcbi5yb3cgLmNvbC5vZmZzZXQtczgge1xyXG4gIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NjY3JTtcclxufVxyXG5cclxuLnJvdyAuY29sLnB1bGwtczgge1xyXG4gIHJpZ2h0OiA2Ni42NjY2NjY2NjY3JTtcclxufVxyXG5cclxuLnJvdyAuY29sLnB1c2gtczgge1xyXG4gIGxlZnQ6IDY2LjY2NjY2NjY2NjclO1xyXG59XHJcblxyXG4ucm93IC5jb2wub2Zmc2V0LXM5IHtcclxuICBtYXJnaW4tbGVmdDogNzUlO1xyXG59XHJcblxyXG4ucm93IC5jb2wucHVsbC1zOSB7XHJcbiAgcmlnaHQ6IDc1JTtcclxufVxyXG5cclxuLnJvdyAuY29sLnB1c2gtczkge1xyXG4gIGxlZnQ6IDc1JTtcclxufVxyXG5cclxuLnJvdyAuY29sLm9mZnNldC1zMTAge1xyXG4gIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMzMzJTtcclxufVxyXG5cclxuLnJvdyAuY29sLnB1bGwtczEwIHtcclxuICByaWdodDogODMuMzMzMzMzMzMzMyU7XHJcbn1cclxuXHJcbi5yb3cgLmNvbC5wdXNoLXMxMCB7XHJcbiAgbGVmdDogODMuMzMzMzMzMzMzMyU7XHJcbn1cclxuXHJcbi5yb3cgLmNvbC5vZmZzZXQtczExIHtcclxuICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjY2NyU7XHJcbn1cclxuXHJcbi5yb3cgLmNvbC5wdWxsLXMxMSB7XHJcbiAgcmlnaHQ6IDkxLjY2NjY2NjY2NjclO1xyXG59XHJcblxyXG4ucm93IC5jb2wucHVzaC1zMTEge1xyXG4gIGxlZnQ6IDkxLjY2NjY2NjY2NjclO1xyXG59XHJcblxyXG4ucm93IC5jb2wub2Zmc2V0LXMxMiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwMCU7XHJcbn1cclxuXHJcbi5yb3cgLmNvbC5wdWxsLXMxMiB7XHJcbiAgcmlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5yb3cgLmNvbC5wdXNoLXMxMiB7XHJcbiAgbGVmdDogMTAwJTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLmJ0biwgLmJ0bi1sYXJnZSwgLmJ0bi1zbWFsbCxcclxuLmJ0bi1mbGF0IHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBoZWlnaHQ6IDM2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgcGFkZGluZzogMCAxNnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIFRleHQgaW5wdXRzICovXHJcbmlucHV0Om5vdChbdHlwZV0pLFxyXG5pbnB1dFt0eXBlPXRleHRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSxcclxuaW5wdXRbdHlwZT1wYXNzd29yZF06bm90KC5icm93c2VyLWRlZmF1bHQpLFxyXG5pbnB1dFt0eXBlPWVtYWlsXTpub3QoLmJyb3dzZXItZGVmYXVsdCksXHJcbmlucHV0W3R5cGU9dXJsXTpub3QoLmJyb3dzZXItZGVmYXVsdCksXHJcbmlucHV0W3R5cGU9dGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpLFxyXG5pbnB1dFt0eXBlPWRhdGVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSxcclxuaW5wdXRbdHlwZT1kYXRldGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpLFxyXG5pbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXTpub3QoLmJyb3dzZXItZGVmYXVsdCksXHJcbmlucHV0W3R5cGU9dGVsXTpub3QoLmJyb3dzZXItZGVmYXVsdCksXHJcbmlucHV0W3R5cGU9bnVtYmVyXTpub3QoLmJyb3dzZXItZGVmYXVsdCksXHJcbmlucHV0W3R5cGU9c2VhcmNoXTpub3QoLmJyb3dzZXItZGVmYXVsdCksXHJcbnRleHRhcmVhLm1hdGVyaWFsaXplLXRleHRhcmVhIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYm9yZGVyIC4zcywgLXdlYmtpdC1ib3gtc2hhZG93IC4zcztcclxuICB0cmFuc2l0aW9uOiBib3JkZXIgLjNzLCAtd2Via2l0LWJveC1zaGFkb3cgLjNzO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjNzLCBib3JkZXIgLjNzO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjNzLCBib3JkZXIgLjNzLCAtd2Via2l0LWJveC1zaGFkb3cgLjNzO1xyXG59XHJcblxyXG5pbnB1dDpub3QoW3R5cGVdKTpkaXNhYmxlZCwgaW5wdXQ6bm90KFt0eXBlXSlbcmVhZG9ubHk9XCJyZWFkb25seVwiXSxcclxuaW5wdXRbdHlwZT10ZXh0XTpub3QoLmJyb3dzZXItZGVmYXVsdCk6ZGlzYWJsZWQsXHJcbmlucHV0W3R5cGU9dGV4dF06bm90KC5icm93c2VyLWRlZmF1bHQpW3JlYWRvbmx5PVwicmVhZG9ubHlcIl0sXHJcbmlucHV0W3R5cGU9cGFzc3dvcmRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpkaXNhYmxlZCxcclxuaW5wdXRbdHlwZT1wYXNzd29yZF06bm90KC5icm93c2VyLWRlZmF1bHQpW3JlYWRvbmx5PVwicmVhZG9ubHlcIl0sXHJcbmlucHV0W3R5cGU9ZW1haWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpkaXNhYmxlZCxcclxuaW5wdXRbdHlwZT1lbWFpbF06bm90KC5icm93c2VyLWRlZmF1bHQpW3JlYWRvbmx5PVwicmVhZG9ubHlcIl0sXHJcbmlucHV0W3R5cGU9dXJsXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6ZGlzYWJsZWQsXHJcbmlucHV0W3R5cGU9dXJsXTpub3QoLmJyb3dzZXItZGVmYXVsdClbcmVhZG9ubHk9XCJyZWFkb25seVwiXSxcclxuaW5wdXRbdHlwZT10aW1lXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6ZGlzYWJsZWQsXHJcbmlucHV0W3R5cGU9dGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpW3JlYWRvbmx5PVwicmVhZG9ubHlcIl0sXHJcbmlucHV0W3R5cGU9ZGF0ZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmRpc2FibGVkLFxyXG5pbnB1dFt0eXBlPWRhdGVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KVtyZWFkb25seT1cInJlYWRvbmx5XCJdLFxyXG5pbnB1dFt0eXBlPWRhdGV0aW1lXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6ZGlzYWJsZWQsXHJcbmlucHV0W3R5cGU9ZGF0ZXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KVtyZWFkb25seT1cInJlYWRvbmx5XCJdLFxyXG5pbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6ZGlzYWJsZWQsXHJcbmlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KVtyZWFkb25seT1cInJlYWRvbmx5XCJdLFxyXG5pbnB1dFt0eXBlPXRlbF06bm90KC5icm93c2VyLWRlZmF1bHQpOmRpc2FibGVkLFxyXG5pbnB1dFt0eXBlPXRlbF06bm90KC5icm93c2VyLWRlZmF1bHQpW3JlYWRvbmx5PVwicmVhZG9ubHlcIl0sXHJcbmlucHV0W3R5cGU9bnVtYmVyXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6ZGlzYWJsZWQsXHJcbmlucHV0W3R5cGU9bnVtYmVyXTpub3QoLmJyb3dzZXItZGVmYXVsdClbcmVhZG9ubHk9XCJyZWFkb25seVwiXSxcclxuaW5wdXRbdHlwZT1zZWFyY2hdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpkaXNhYmxlZCxcclxuaW5wdXRbdHlwZT1zZWFyY2hdOm5vdCguYnJvd3Nlci1kZWZhdWx0KVtyZWFkb25seT1cInJlYWRvbmx5XCJdLFxyXG50ZXh0YXJlYS5tYXRlcmlhbGl6ZS10ZXh0YXJlYTpkaXNhYmxlZCxcclxudGV4dGFyZWEubWF0ZXJpYWxpemUtdGV4dGFyZWFbcmVhZG9ubHk9XCJyZWFkb25seVwiXSB7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40Mik7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZCByZ2JhKDAsIDAsIDAsIDAuNDIpO1xyXG59XHJcblxyXG5pbnB1dDpub3QoW3R5cGVdKTpkaXNhYmxlZCArIGxhYmVsLFxyXG5pbnB1dDpub3QoW3R5cGVdKVtyZWFkb25seT1cInJlYWRvbmx5XCJdICsgbGFiZWwsXHJcbmlucHV0W3R5cGU9dGV4dF06bm90KC5icm93c2VyLWRlZmF1bHQpOmRpc2FibGVkICsgbGFiZWwsXHJcbmlucHV0W3R5cGU9dGV4dF06bm90KC5icm93c2VyLWRlZmF1bHQpW3JlYWRvbmx5PVwicmVhZG9ubHlcIl0gKyBsYWJlbCxcclxuaW5wdXRbdHlwZT1wYXNzd29yZF06bm90KC5icm93c2VyLWRlZmF1bHQpOmRpc2FibGVkICsgbGFiZWwsXHJcbmlucHV0W3R5cGU9cGFzc3dvcmRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KVtyZWFkb25seT1cInJlYWRvbmx5XCJdICsgbGFiZWwsXHJcbmlucHV0W3R5cGU9ZW1haWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpkaXNhYmxlZCArIGxhYmVsLFxyXG5pbnB1dFt0eXBlPWVtYWlsXTpub3QoLmJyb3dzZXItZGVmYXVsdClbcmVhZG9ubHk9XCJyZWFkb25seVwiXSArIGxhYmVsLFxyXG5pbnB1dFt0eXBlPXVybF06bm90KC5icm93c2VyLWRlZmF1bHQpOmRpc2FibGVkICsgbGFiZWwsXHJcbmlucHV0W3R5cGU9dXJsXTpub3QoLmJyb3dzZXItZGVmYXVsdClbcmVhZG9ubHk9XCJyZWFkb25seVwiXSArIGxhYmVsLFxyXG5pbnB1dFt0eXBlPXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpkaXNhYmxlZCArIGxhYmVsLFxyXG5pbnB1dFt0eXBlPXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KVtyZWFkb25seT1cInJlYWRvbmx5XCJdICsgbGFiZWwsXHJcbmlucHV0W3R5cGU9ZGF0ZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmRpc2FibGVkICsgbGFiZWwsXHJcbmlucHV0W3R5cGU9ZGF0ZV06bm90KC5icm93c2VyLWRlZmF1bHQpW3JlYWRvbmx5PVwicmVhZG9ubHlcIl0gKyBsYWJlbCxcclxuaW5wdXRbdHlwZT1kYXRldGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmRpc2FibGVkICsgbGFiZWwsXHJcbmlucHV0W3R5cGU9ZGF0ZXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KVtyZWFkb25seT1cInJlYWRvbmx5XCJdICsgbGFiZWwsXHJcbmlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpkaXNhYmxlZCArIGxhYmVsLFxyXG5pbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXTpub3QoLmJyb3dzZXItZGVmYXVsdClbcmVhZG9ubHk9XCJyZWFkb25seVwiXSArIGxhYmVsLFxyXG5pbnB1dFt0eXBlPXRlbF06bm90KC5icm93c2VyLWRlZmF1bHQpOmRpc2FibGVkICsgbGFiZWwsXHJcbmlucHV0W3R5cGU9dGVsXTpub3QoLmJyb3dzZXItZGVmYXVsdClbcmVhZG9ubHk9XCJyZWFkb25seVwiXSArIGxhYmVsLFxyXG5pbnB1dFt0eXBlPW51bWJlcl06bm90KC5icm93c2VyLWRlZmF1bHQpOmRpc2FibGVkICsgbGFiZWwsXHJcbmlucHV0W3R5cGU9bnVtYmVyXTpub3QoLmJyb3dzZXItZGVmYXVsdClbcmVhZG9ubHk9XCJyZWFkb25seVwiXSArIGxhYmVsLFxyXG5pbnB1dFt0eXBlPXNlYXJjaF06bm90KC5icm93c2VyLWRlZmF1bHQpOmRpc2FibGVkICsgbGFiZWwsXHJcbmlucHV0W3R5cGU9c2VhcmNoXTpub3QoLmJyb3dzZXItZGVmYXVsdClbcmVhZG9ubHk9XCJyZWFkb25seVwiXSArIGxhYmVsLFxyXG50ZXh0YXJlYS5tYXRlcmlhbGl6ZS10ZXh0YXJlYTpkaXNhYmxlZCArIGxhYmVsLFxyXG50ZXh0YXJlYS5tYXRlcmlhbGl6ZS10ZXh0YXJlYVtyZWFkb25seT1cInJlYWRvbmx5XCJdICsgbGFiZWwge1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpO1xyXG59XHJcblxyXG5pbnB1dDpub3QoW3R5cGVdKTpmb2N1czpub3QoW3JlYWRvbmx5XSksXHJcbmlucHV0W3R5cGU9dGV4dF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzOm5vdChbcmVhZG9ubHldKSxcclxuaW5wdXRbdHlwZT1wYXNzd29yZF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzOm5vdChbcmVhZG9ubHldKSxcclxuaW5wdXRbdHlwZT1lbWFpbF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzOm5vdChbcmVhZG9ubHldKSxcclxuaW5wdXRbdHlwZT11cmxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSksXHJcbmlucHV0W3R5cGU9dGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzOm5vdChbcmVhZG9ubHldKSxcclxuaW5wdXRbdHlwZT1kYXRlXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXM6bm90KFtyZWFkb25seV0pLFxyXG5pbnB1dFt0eXBlPWRhdGV0aW1lXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXM6bm90KFtyZWFkb25seV0pLFxyXG5pbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXM6bm90KFtyZWFkb25seV0pLFxyXG5pbnB1dFt0eXBlPXRlbF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzOm5vdChbcmVhZG9ubHldKSxcclxuaW5wdXRbdHlwZT1udW1iZXJdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSksXHJcbmlucHV0W3R5cGU9c2VhcmNoXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXM6bm90KFtyZWFkb25seV0pLFxyXG50ZXh0YXJlYS5tYXRlcmlhbGl6ZS10ZXh0YXJlYTpmb2N1czpub3QoW3JlYWRvbmx5XSkge1xyXG5cclxufVxyXG5cclxuaW5wdXQ6bm90KFt0eXBlXSk6Zm9jdXM6bm90KFtyZWFkb25seV0pICsgbGFiZWwsXHJcbmlucHV0W3R5cGU9dGV4dF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzOm5vdChbcmVhZG9ubHldKSArIGxhYmVsLFxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXM6bm90KFtyZWFkb25seV0pICsgbGFiZWwsXHJcbmlucHV0W3R5cGU9ZW1haWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSkgKyBsYWJlbCxcclxuaW5wdXRbdHlwZT11cmxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSkgKyBsYWJlbCxcclxuaW5wdXRbdHlwZT10aW1lXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXM6bm90KFtyZWFkb25seV0pICsgbGFiZWwsXHJcbmlucHV0W3R5cGU9ZGF0ZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzOm5vdChbcmVhZG9ubHldKSArIGxhYmVsLFxyXG5pbnB1dFt0eXBlPWRhdGV0aW1lXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXM6bm90KFtyZWFkb25seV0pICsgbGFiZWwsXHJcbmlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSkgKyBsYWJlbCxcclxuaW5wdXRbdHlwZT10ZWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSkgKyBsYWJlbCxcclxuaW5wdXRbdHlwZT1udW1iZXJdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSkgKyBsYWJlbCxcclxuaW5wdXRbdHlwZT1zZWFyY2hdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1czpub3QoW3JlYWRvbmx5XSkgKyBsYWJlbCxcclxudGV4dGFyZWEubWF0ZXJpYWxpemUtdGV4dGFyZWE6Zm9jdXM6bm90KFtyZWFkb25seV0pICsgbGFiZWwge1xyXG4gIGNvbG9yOiAjMjZhNjlhO1xyXG59XHJcblxyXG5pbnB1dDpub3QoW3R5cGVdKTpmb2N1cy52YWxpZCB+IGxhYmVsLFxyXG5pbnB1dFt0eXBlPXRleHRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy52YWxpZCB+IGxhYmVsLFxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMudmFsaWQgfiBsYWJlbCxcclxuaW5wdXRbdHlwZT1lbWFpbF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLnZhbGlkIH4gbGFiZWwsXHJcbmlucHV0W3R5cGU9dXJsXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMudmFsaWQgfiBsYWJlbCxcclxuaW5wdXRbdHlwZT10aW1lXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMudmFsaWQgfiBsYWJlbCxcclxuaW5wdXRbdHlwZT1kYXRlXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMudmFsaWQgfiBsYWJlbCxcclxuaW5wdXRbdHlwZT1kYXRldGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLnZhbGlkIH4gbGFiZWwsXHJcbmlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy52YWxpZCB+IGxhYmVsLFxyXG5pbnB1dFt0eXBlPXRlbF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLnZhbGlkIH4gbGFiZWwsXHJcbmlucHV0W3R5cGU9bnVtYmVyXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMudmFsaWQgfiBsYWJlbCxcclxuaW5wdXRbdHlwZT1zZWFyY2hdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy52YWxpZCB+IGxhYmVsLFxyXG50ZXh0YXJlYS5tYXRlcmlhbGl6ZS10ZXh0YXJlYTpmb2N1cy52YWxpZCB+IGxhYmVsIHtcclxuICBjb2xvcjogIzRDQUY1MDtcclxufVxyXG5cclxuaW5wdXQ6bm90KFt0eXBlXSk6Zm9jdXMuaW52YWxpZCB+IGxhYmVsLFxyXG5pbnB1dFt0eXBlPXRleHRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy5pbnZhbGlkIH4gbGFiZWwsXHJcbmlucHV0W3R5cGU9cGFzc3dvcmRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy5pbnZhbGlkIH4gbGFiZWwsXHJcbmlucHV0W3R5cGU9ZW1haWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy5pbnZhbGlkIH4gbGFiZWwsXHJcbmlucHV0W3R5cGU9dXJsXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMuaW52YWxpZCB+IGxhYmVsLFxyXG5pbnB1dFt0eXBlPXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy5pbnZhbGlkIH4gbGFiZWwsXHJcbmlucHV0W3R5cGU9ZGF0ZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLmludmFsaWQgfiBsYWJlbCxcclxuaW5wdXRbdHlwZT1kYXRldGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLmludmFsaWQgfiBsYWJlbCxcclxuaW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLmludmFsaWQgfiBsYWJlbCxcclxuaW5wdXRbdHlwZT10ZWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy5pbnZhbGlkIH4gbGFiZWwsXHJcbmlucHV0W3R5cGU9bnVtYmVyXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMuaW52YWxpZCB+IGxhYmVsLFxyXG5pbnB1dFt0eXBlPXNlYXJjaF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLmludmFsaWQgfiBsYWJlbCxcclxudGV4dGFyZWEubWF0ZXJpYWxpemUtdGV4dGFyZWE6Zm9jdXMuaW52YWxpZCB+IGxhYmVsIHtcclxuICBjb2xvcjogI0Y0NDMzNjtcclxufVxyXG5cclxuaW5wdXQ6bm90KFt0eXBlXSkudmFsaWRhdGUgKyBsYWJlbCxcclxuaW5wdXRbdHlwZT10ZXh0XTpub3QoLmJyb3dzZXItZGVmYXVsdCkudmFsaWRhdGUgKyBsYWJlbCxcclxuaW5wdXRbdHlwZT1wYXNzd29yZF06bm90KC5icm93c2VyLWRlZmF1bHQpLnZhbGlkYXRlICsgbGFiZWwsXHJcbmlucHV0W3R5cGU9ZW1haWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS52YWxpZGF0ZSArIGxhYmVsLFxyXG5pbnB1dFt0eXBlPXVybF06bm90KC5icm93c2VyLWRlZmF1bHQpLnZhbGlkYXRlICsgbGFiZWwsXHJcbmlucHV0W3R5cGU9dGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpLnZhbGlkYXRlICsgbGFiZWwsXHJcbmlucHV0W3R5cGU9ZGF0ZV06bm90KC5icm93c2VyLWRlZmF1bHQpLnZhbGlkYXRlICsgbGFiZWwsXHJcbmlucHV0W3R5cGU9ZGF0ZXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS52YWxpZGF0ZSArIGxhYmVsLFxyXG5pbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXTpub3QoLmJyb3dzZXItZGVmYXVsdCkudmFsaWRhdGUgKyBsYWJlbCxcclxuaW5wdXRbdHlwZT10ZWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS52YWxpZGF0ZSArIGxhYmVsLFxyXG5pbnB1dFt0eXBlPW51bWJlcl06bm90KC5icm93c2VyLWRlZmF1bHQpLnZhbGlkYXRlICsgbGFiZWwsXHJcbmlucHV0W3R5cGU9c2VhcmNoXTpub3QoLmJyb3dzZXItZGVmYXVsdCkudmFsaWRhdGUgKyBsYWJlbCxcclxudGV4dGFyZWEubWF0ZXJpYWxpemUtdGV4dGFyZWEudmFsaWRhdGUgKyBsYWJlbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8qIFZhbGlkYXRpb24gU2FzcyBQbGFjZWhvbGRlcnMgKi9cclxuaW5wdXQudmFsaWQ6bm90KFt0eXBlXSksIGlucHV0LnZhbGlkOm5vdChbdHlwZV0pOmZvY3VzLFxyXG5pbnB1dC52YWxpZFt0eXBlPXRleHRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSxcclxuaW5wdXQudmFsaWRbdHlwZT10ZXh0XTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMsXHJcbmlucHV0LnZhbGlkW3R5cGU9cGFzc3dvcmRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSxcclxuaW5wdXQudmFsaWRbdHlwZT1wYXNzd29yZF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLFxyXG5pbnB1dC52YWxpZFt0eXBlPWVtYWlsXTpub3QoLmJyb3dzZXItZGVmYXVsdCksXHJcbmlucHV0LnZhbGlkW3R5cGU9ZW1haWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cyxcclxuaW5wdXQudmFsaWRbdHlwZT11cmxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSxcclxuaW5wdXQudmFsaWRbdHlwZT11cmxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cyxcclxuaW5wdXQudmFsaWRbdHlwZT10aW1lXTpub3QoLmJyb3dzZXItZGVmYXVsdCksXHJcbmlucHV0LnZhbGlkW3R5cGU9dGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLFxyXG5pbnB1dC52YWxpZFt0eXBlPWRhdGVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSxcclxuaW5wdXQudmFsaWRbdHlwZT1kYXRlXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMsXHJcbmlucHV0LnZhbGlkW3R5cGU9ZGF0ZXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSxcclxuaW5wdXQudmFsaWRbdHlwZT1kYXRldGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLFxyXG5pbnB1dC52YWxpZFt0eXBlPWRhdGV0aW1lLWxvY2FsXTpub3QoLmJyb3dzZXItZGVmYXVsdCksXHJcbmlucHV0LnZhbGlkW3R5cGU9ZGF0ZXRpbWUtbG9jYWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cyxcclxuaW5wdXQudmFsaWRbdHlwZT10ZWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSxcclxuaW5wdXQudmFsaWRbdHlwZT10ZWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cyxcclxuaW5wdXQudmFsaWRbdHlwZT1udW1iZXJdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSxcclxuaW5wdXQudmFsaWRbdHlwZT1udW1iZXJdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cyxcclxuaW5wdXQudmFsaWRbdHlwZT1zZWFyY2hdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSxcclxuaW5wdXQudmFsaWRbdHlwZT1zZWFyY2hdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cyxcclxudGV4dGFyZWEubWF0ZXJpYWxpemUtdGV4dGFyZWEudmFsaWQsXHJcbnRleHRhcmVhLm1hdGVyaWFsaXplLXRleHRhcmVhLnZhbGlkOmZvY3VzLCAuc2VsZWN0LXdyYXBwZXIudmFsaWQgPiBpbnB1dC5zZWxlY3QtZHJvcGRvd24ge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNENBRjUwO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMCAwICM0Q0FGNTA7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDFweCAwIDAgIzRDQUY1MDtcclxufVxyXG5cclxuaW5wdXQuaW52YWxpZDpub3QoW3R5cGVdKSwgaW5wdXQuaW52YWxpZDpub3QoW3R5cGVdKTpmb2N1cyxcclxuaW5wdXQuaW52YWxpZFt0eXBlPXRleHRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSxcclxuaW5wdXQuaW52YWxpZFt0eXBlPXRleHRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cyxcclxuaW5wdXQuaW52YWxpZFt0eXBlPXBhc3N3b3JkXTpub3QoLmJyb3dzZXItZGVmYXVsdCksXHJcbmlucHV0LmludmFsaWRbdHlwZT1wYXNzd29yZF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLFxyXG5pbnB1dC5pbnZhbGlkW3R5cGU9ZW1haWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSxcclxuaW5wdXQuaW52YWxpZFt0eXBlPWVtYWlsXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMsXHJcbmlucHV0LmludmFsaWRbdHlwZT11cmxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSxcclxuaW5wdXQuaW52YWxpZFt0eXBlPXVybF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLFxyXG5pbnB1dC5pbnZhbGlkW3R5cGU9dGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpLFxyXG5pbnB1dC5pbnZhbGlkW3R5cGU9dGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLFxyXG5pbnB1dC5pbnZhbGlkW3R5cGU9ZGF0ZV06bm90KC5icm93c2VyLWRlZmF1bHQpLFxyXG5pbnB1dC5pbnZhbGlkW3R5cGU9ZGF0ZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLFxyXG5pbnB1dC5pbnZhbGlkW3R5cGU9ZGF0ZXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSxcclxuaW5wdXQuaW52YWxpZFt0eXBlPWRhdGV0aW1lXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMsXHJcbmlucHV0LmludmFsaWRbdHlwZT1kYXRldGltZS1sb2NhbF06bm90KC5icm93c2VyLWRlZmF1bHQpLFxyXG5pbnB1dC5pbnZhbGlkW3R5cGU9ZGF0ZXRpbWUtbG9jYWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cyxcclxuaW5wdXQuaW52YWxpZFt0eXBlPXRlbF06bm90KC5icm93c2VyLWRlZmF1bHQpLFxyXG5pbnB1dC5pbnZhbGlkW3R5cGU9dGVsXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMsXHJcbmlucHV0LmludmFsaWRbdHlwZT1udW1iZXJdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSxcclxuaW5wdXQuaW52YWxpZFt0eXBlPW51bWJlcl06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLFxyXG5pbnB1dC5pbnZhbGlkW3R5cGU9c2VhcmNoXTpub3QoLmJyb3dzZXItZGVmYXVsdCksXHJcbmlucHV0LmludmFsaWRbdHlwZT1zZWFyY2hdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cyxcclxudGV4dGFyZWEubWF0ZXJpYWxpemUtdGV4dGFyZWEuaW52YWxpZCxcclxudGV4dGFyZWEubWF0ZXJpYWxpemUtdGV4dGFyZWEuaW52YWxpZDpmb2N1cywgLnNlbGVjdC13cmFwcGVyLmludmFsaWQgPiBpbnB1dC5zZWxlY3QtZHJvcGRvd24sXHJcbi5zZWxlY3Qtd3JhcHBlci5pbnZhbGlkID4gaW5wdXQuc2VsZWN0LWRyb3Bkb3duOmZvY3VzIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Y0NDMzNjtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDAgMCAjRjQ0MzM2O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMCAwICNGNDQzMzY7XHJcbn1cclxuXHJcbmlucHV0Om5vdChbdHlwZV0pLnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtc3VjY2Vzc10sXHJcbmlucHV0Om5vdChbdHlwZV0pOmZvY3VzLnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtc3VjY2Vzc10sXHJcbmlucHV0Om5vdChbdHlwZV0pLmludmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1lcnJvcl0sXHJcbmlucHV0Om5vdChbdHlwZV0pOmZvY3VzLmludmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1lcnJvcl0sXHJcbmlucHV0W3R5cGU9dGV4dF06bm90KC5icm93c2VyLWRlZmF1bHQpLnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtc3VjY2Vzc10sXHJcbmlucHV0W3R5cGU9dGV4dF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtc3VjY2Vzc10sXHJcbmlucHV0W3R5cGU9dGV4dF06bm90KC5icm93c2VyLWRlZmF1bHQpLmludmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1lcnJvcl0sXHJcbmlucHV0W3R5cGU9dGV4dF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLmludmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1lcnJvcl0sXHJcbmlucHV0W3R5cGU9cGFzc3dvcmRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLXN1Y2Nlc3NdLFxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMudmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1zdWNjZXNzXSxcclxuaW5wdXRbdHlwZT1wYXNzd29yZF06bm90KC5icm93c2VyLWRlZmF1bHQpLmludmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1lcnJvcl0sXHJcbmlucHV0W3R5cGU9cGFzc3dvcmRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy5pbnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtZXJyb3JdLFxyXG5pbnB1dFt0eXBlPWVtYWlsXTpub3QoLmJyb3dzZXItZGVmYXVsdCkudmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1zdWNjZXNzXSxcclxuaW5wdXRbdHlwZT1lbWFpbF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtc3VjY2Vzc10sXHJcbmlucHV0W3R5cGU9ZW1haWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS5pbnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtZXJyb3JdLFxyXG5pbnB1dFt0eXBlPWVtYWlsXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMuaW52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLWVycm9yXSxcclxuaW5wdXRbdHlwZT11cmxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLXN1Y2Nlc3NdLFxyXG5pbnB1dFt0eXBlPXVybF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtc3VjY2Vzc10sXHJcbmlucHV0W3R5cGU9dXJsXTpub3QoLmJyb3dzZXItZGVmYXVsdCkuaW52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLWVycm9yXSxcclxuaW5wdXRbdHlwZT11cmxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy5pbnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtZXJyb3JdLFxyXG5pbnB1dFt0eXBlPXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLXN1Y2Nlc3NdLFxyXG5pbnB1dFt0eXBlPXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLXN1Y2Nlc3NdLFxyXG5pbnB1dFt0eXBlPXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS5pbnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtZXJyb3JdLFxyXG5pbnB1dFt0eXBlPXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy5pbnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtZXJyb3JdLFxyXG5pbnB1dFt0eXBlPWRhdGVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLXN1Y2Nlc3NdLFxyXG5pbnB1dFt0eXBlPWRhdGVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLXN1Y2Nlc3NdLFxyXG5pbnB1dFt0eXBlPWRhdGVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS5pbnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtZXJyb3JdLFxyXG5pbnB1dFt0eXBlPWRhdGVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy5pbnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtZXJyb3JdLFxyXG5pbnB1dFt0eXBlPWRhdGV0aW1lXTpub3QoLmJyb3dzZXItZGVmYXVsdCkudmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1zdWNjZXNzXSxcclxuaW5wdXRbdHlwZT1kYXRldGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtc3VjY2Vzc10sXHJcbmlucHV0W3R5cGU9ZGF0ZXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS5pbnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtZXJyb3JdLFxyXG5pbnB1dFt0eXBlPWRhdGV0aW1lXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMuaW52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLWVycm9yXSxcclxuaW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF06bm90KC5icm93c2VyLWRlZmF1bHQpLnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtc3VjY2Vzc10sXHJcbmlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLXN1Y2Nlc3NdLFxyXG5pbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXTpub3QoLmJyb3dzZXItZGVmYXVsdCkuaW52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLWVycm9yXSxcclxuaW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLmludmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1lcnJvcl0sXHJcbmlucHV0W3R5cGU9dGVsXTpub3QoLmJyb3dzZXItZGVmYXVsdCkudmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1zdWNjZXNzXSxcclxuaW5wdXRbdHlwZT10ZWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLXN1Y2Nlc3NdLFxyXG5pbnB1dFt0eXBlPXRlbF06bm90KC5icm93c2VyLWRlZmF1bHQpLmludmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1lcnJvcl0sXHJcbmlucHV0W3R5cGU9dGVsXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMuaW52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLWVycm9yXSxcclxuaW5wdXRbdHlwZT1udW1iZXJdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLXN1Y2Nlc3NdLFxyXG5pbnB1dFt0eXBlPW51bWJlcl06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtc3VjY2Vzc10sXHJcbmlucHV0W3R5cGU9bnVtYmVyXTpub3QoLmJyb3dzZXItZGVmYXVsdCkuaW52YWxpZCB+IC5oZWxwZXItdGV4dFtkYXRhLWVycm9yXSxcclxuaW5wdXRbdHlwZT1udW1iZXJdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy5pbnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtZXJyb3JdLFxyXG5pbnB1dFt0eXBlPXNlYXJjaF06bm90KC5icm93c2VyLWRlZmF1bHQpLnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtc3VjY2Vzc10sXHJcbmlucHV0W3R5cGU9c2VhcmNoXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMudmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1zdWNjZXNzXSxcclxuaW5wdXRbdHlwZT1zZWFyY2hdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS5pbnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtZXJyb3JdLFxyXG5pbnB1dFt0eXBlPXNlYXJjaF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLmludmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1lcnJvcl0sXHJcbnRleHRhcmVhLm1hdGVyaWFsaXplLXRleHRhcmVhLnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtc3VjY2Vzc10sXHJcbnRleHRhcmVhLm1hdGVyaWFsaXplLXRleHRhcmVhOmZvY3VzLnZhbGlkIH4gLmhlbHBlci10ZXh0W2RhdGEtc3VjY2Vzc10sXHJcbnRleHRhcmVhLm1hdGVyaWFsaXplLXRleHRhcmVhLmludmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1lcnJvcl0sXHJcbnRleHRhcmVhLm1hdGVyaWFsaXplLXRleHRhcmVhOmZvY3VzLmludmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1lcnJvcl0sIC5zZWxlY3Qtd3JhcHBlci52YWxpZCAuaGVscGVyLXRleHRbZGF0YS1zdWNjZXNzXSxcclxuLnNlbGVjdC13cmFwcGVyLmludmFsaWQgfiAuaGVscGVyLXRleHRbZGF0YS1lcnJvcl0ge1xyXG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG5pbnB1dDpub3QoW3R5cGVdKS52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixcclxuaW5wdXQ6bm90KFt0eXBlXSk6Zm9jdXMudmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsXHJcbmlucHV0W3R5cGU9dGV4dF06bm90KC5icm93c2VyLWRlZmF1bHQpLnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLFxyXG5pbnB1dFt0eXBlPXRleHRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixcclxuaW5wdXRbdHlwZT1wYXNzd29yZF06bm90KC5icm93c2VyLWRlZmF1bHQpLnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLFxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMudmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsXHJcbmlucHV0W3R5cGU9ZW1haWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixcclxuaW5wdXRbdHlwZT1lbWFpbF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLFxyXG5pbnB1dFt0eXBlPXVybF06bm90KC5icm93c2VyLWRlZmF1bHQpLnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLFxyXG5pbnB1dFt0eXBlPXVybF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLFxyXG5pbnB1dFt0eXBlPXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixcclxuaW5wdXRbdHlwZT10aW1lXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMudmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsXHJcbmlucHV0W3R5cGU9ZGF0ZV06bm90KC5icm93c2VyLWRlZmF1bHQpLnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLFxyXG5pbnB1dFt0eXBlPWRhdGVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixcclxuaW5wdXRbdHlwZT1kYXRldGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpLnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLFxyXG5pbnB1dFt0eXBlPWRhdGV0aW1lXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMudmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsXHJcbmlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixcclxuaW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLFxyXG5pbnB1dFt0eXBlPXRlbF06bm90KC5icm93c2VyLWRlZmF1bHQpLnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLFxyXG5pbnB1dFt0eXBlPXRlbF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLFxyXG5pbnB1dFt0eXBlPW51bWJlcl06bm90KC5icm93c2VyLWRlZmF1bHQpLnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLFxyXG5pbnB1dFt0eXBlPW51bWJlcl06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLFxyXG5pbnB1dFt0eXBlPXNlYXJjaF06bm90KC5icm93c2VyLWRlZmF1bHQpLnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLFxyXG5pbnB1dFt0eXBlPXNlYXJjaF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLFxyXG50ZXh0YXJlYS5tYXRlcmlhbGl6ZS10ZXh0YXJlYS52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixcclxudGV4dGFyZWEubWF0ZXJpYWxpemUtdGV4dGFyZWE6Zm9jdXMudmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsIC5zZWxlY3Qtd3JhcHBlci52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlciB7XHJcbiAgY29udGVudDogYXR0cihkYXRhLXN1Y2Nlc3MpO1xyXG4gIGNvbG9yOiAjNENBRjUwO1xyXG59XHJcblxyXG5pbnB1dDpub3QoW3R5cGVdKS5pbnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLFxyXG5pbnB1dDpub3QoW3R5cGVdKTpmb2N1cy5pbnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLFxyXG5pbnB1dFt0eXBlPXRleHRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS5pbnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLFxyXG5pbnB1dFt0eXBlPXRleHRdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy5pbnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLFxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXTpub3QoLmJyb3dzZXItZGVmYXVsdCkuaW52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixcclxuaW5wdXRbdHlwZT1wYXNzd29yZF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLmludmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsXHJcbmlucHV0W3R5cGU9ZW1haWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS5pbnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLFxyXG5pbnB1dFt0eXBlPWVtYWlsXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMuaW52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixcclxuaW5wdXRbdHlwZT11cmxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS5pbnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLFxyXG5pbnB1dFt0eXBlPXVybF06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLmludmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsXHJcbmlucHV0W3R5cGU9dGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpLmludmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsXHJcbmlucHV0W3R5cGU9dGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLmludmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsXHJcbmlucHV0W3R5cGU9ZGF0ZV06bm90KC5icm93c2VyLWRlZmF1bHQpLmludmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsXHJcbmlucHV0W3R5cGU9ZGF0ZV06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLmludmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsXHJcbmlucHV0W3R5cGU9ZGF0ZXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS5pbnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLFxyXG5pbnB1dFt0eXBlPWRhdGV0aW1lXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMuaW52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixcclxuaW5wdXRbdHlwZT1kYXRldGltZS1sb2NhbF06bm90KC5icm93c2VyLWRlZmF1bHQpLmludmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsXHJcbmlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy5pbnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLFxyXG5pbnB1dFt0eXBlPXRlbF06bm90KC5icm93c2VyLWRlZmF1bHQpLmludmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsXHJcbmlucHV0W3R5cGU9dGVsXTpub3QoLmJyb3dzZXItZGVmYXVsdCk6Zm9jdXMuaW52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixcclxuaW5wdXRbdHlwZT1udW1iZXJdOm5vdCguYnJvd3Nlci1kZWZhdWx0KS5pbnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLFxyXG5pbnB1dFt0eXBlPW51bWJlcl06bm90KC5icm93c2VyLWRlZmF1bHQpOmZvY3VzLmludmFsaWQgfiAuaGVscGVyLXRleHQ6YWZ0ZXIsXHJcbmlucHV0W3R5cGU9c2VhcmNoXTpub3QoLmJyb3dzZXItZGVmYXVsdCkuaW52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlcixcclxuaW5wdXRbdHlwZT1zZWFyY2hdOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpmb2N1cy5pbnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLFxyXG50ZXh0YXJlYS5tYXRlcmlhbGl6ZS10ZXh0YXJlYS5pbnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLFxyXG50ZXh0YXJlYS5tYXRlcmlhbGl6ZS10ZXh0YXJlYTpmb2N1cy5pbnZhbGlkIH4gLmhlbHBlci10ZXh0OmFmdGVyLCAuc2VsZWN0LXdyYXBwZXIuaW52YWxpZCB+IC5oZWxwZXItdGV4dDphZnRlciB7XHJcbiAgY29udGVudDogYXR0cihkYXRhLWVycm9yKTtcclxuICBjb2xvcjogI0Y0NDMzNjtcclxufVxyXG5cclxuaW5wdXQ6bm90KFt0eXBlXSkgKyBsYWJlbDphZnRlcixcclxuaW5wdXRbdHlwZT10ZXh0XTpub3QoLmJyb3dzZXItZGVmYXVsdCkgKyBsYWJlbDphZnRlcixcclxuaW5wdXRbdHlwZT1wYXNzd29yZF06bm90KC5icm93c2VyLWRlZmF1bHQpICsgbGFiZWw6YWZ0ZXIsXHJcbmlucHV0W3R5cGU9ZW1haWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSArIGxhYmVsOmFmdGVyLFxyXG5pbnB1dFt0eXBlPXVybF06bm90KC5icm93c2VyLWRlZmF1bHQpICsgbGFiZWw6YWZ0ZXIsXHJcbmlucHV0W3R5cGU9dGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpICsgbGFiZWw6YWZ0ZXIsXHJcbmlucHV0W3R5cGU9ZGF0ZV06bm90KC5icm93c2VyLWRlZmF1bHQpICsgbGFiZWw6YWZ0ZXIsXHJcbmlucHV0W3R5cGU9ZGF0ZXRpbWVdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSArIGxhYmVsOmFmdGVyLFxyXG5pbnB1dFt0eXBlPWRhdGV0aW1lLWxvY2FsXTpub3QoLmJyb3dzZXItZGVmYXVsdCkgKyBsYWJlbDphZnRlcixcclxuaW5wdXRbdHlwZT10ZWxdOm5vdCguYnJvd3Nlci1kZWZhdWx0KSArIGxhYmVsOmFmdGVyLFxyXG5pbnB1dFt0eXBlPW51bWJlcl06bm90KC5icm93c2VyLWRlZmF1bHQpICsgbGFiZWw6YWZ0ZXIsXHJcbmlucHV0W3R5cGU9c2VhcmNoXTpub3QoLmJyb3dzZXItZGVmYXVsdCkgKyBsYWJlbDphZnRlcixcclxudGV4dGFyZWEubWF0ZXJpYWxpemUtdGV4dGFyZWEgKyBsYWJlbDphZnRlciwgLnNlbGVjdC13cmFwcGVyICsgbGFiZWw6YWZ0ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnMgb3BhY2l0eSBlYXNlLW91dCwgLjJzIGNvbG9yIGVhc2Utb3V0O1xyXG4gIHRyYW5zaXRpb246IC4ycyBvcGFjaXR5IGVhc2Utb3V0LCAuMnMgY29sb3IgZWFzZS1vdXQ7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkLmlubGluZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkLmlubGluZSBpbnB1dCxcclxuLmlucHV0LWZpZWxkLmlubGluZSAuc2VsZWN0LWRyb3Bkb3duIHtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQuY29sIGxhYmVsIHtcclxuICBsZWZ0OiAwLjc1cmVtO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQuY29sIC5wcmVmaXggfiBsYWJlbCxcclxuLmlucHV0LWZpZWxkLmNvbCAucHJlZml4IH4gLnZhbGlkYXRlIH4gbGFiZWwge1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzcmVtIC0gMS41cmVtKTtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkID4gbGFiZWwge1xyXG4gIGNvbG9yOiAjOWU5ZTllO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY3Vyc29yOiB0ZXh0O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogY29sb3IgLjJzIGVhc2Utb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZS1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgLjJzIGVhc2Utb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZS1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlLW91dCwgY29sb3IgLjJzIGVhc2Utb3V0O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnMgZWFzZS1vdXQsIGNvbG9yIC4ycyBlYXNlLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2Utb3V0O1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcclxuICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogaW5pdGlhbDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMnB4KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMnB4KTtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkID4gbGFiZWw6bm90KC5sYWJlbC1pY29uKS5hY3RpdmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNHB4KSBzY2FsZSgwLjgpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNHB4KSBzY2FsZSgwLjgpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQgPiBpbnB1dFt0eXBlXTotd2Via2l0LWF1dG9maWxsOm5vdCguYnJvd3Nlci1kZWZhdWx0KTpub3QoW3R5cGU9XCJzZWFyY2hcIl0pICsgbGFiZWwsXHJcbi5pbnB1dC1maWVsZCA+IGlucHV0W3R5cGU9ZGF0ZV06bm90KC5icm93c2VyLWRlZmF1bHQpICsgbGFiZWwsXHJcbi5pbnB1dC1maWVsZCA+IGlucHV0W3R5cGU9dGltZV06bm90KC5icm93c2VyLWRlZmF1bHQpICsgbGFiZWwge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNHB4KSBzY2FsZSgwLjgpO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNHB4KSBzY2FsZSgwLjgpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG4gICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQgLmhlbHBlci10ZXh0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLWhlaWdodDogMThweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCAuaGVscGVyLXRleHQ6OmFmdGVyIHtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIC5wcmVmaXgge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogM3JlbTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAuMnM7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgLjJzO1xyXG4gIHRvcDogMC41cmVtO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQgLnByZWZpeC5hY3RpdmUge1xyXG4gIGNvbG9yOiAjMjZhNjlhO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQgLnByZWZpeCB+IGlucHV0LFxyXG4uaW5wdXQtZmllbGQgLnByZWZpeCB+IHRleHRhcmVhLFxyXG4uaW5wdXQtZmllbGQgLnByZWZpeCB+IGxhYmVsLFxyXG4uaW5wdXQtZmllbGQgLnByZWZpeCB+IC52YWxpZGF0ZSB+IGxhYmVsLFxyXG4uaW5wdXQtZmllbGQgLnByZWZpeCB+IC5oZWxwZXItdGV4dCxcclxuLmlucHV0LWZpZWxkIC5wcmVmaXggfiAuYXV0b2NvbXBsZXRlLWNvbnRlbnQge1xyXG4gIG1hcmdpbi1sZWZ0OiAzcmVtO1xyXG4gIHdpZHRoOiA5MiU7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDNyZW0pO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQgLnByZWZpeCB+IGxhYmVsIHtcclxuICBtYXJnaW4tbGVmdDogM3JlbTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5pbnB1dC1maWVsZCAucHJlZml4IH4gaW5wdXQge1xyXG4gICAgd2lkdGg6IDg2JTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzcmVtKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuaW5wdXQtZmllbGQgLnByZWZpeCB+IGlucHV0IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gM3JlbSk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTZWFyY2ggRmllbGQgKi9cclxuLmlucHV0LWZpZWxkIGlucHV0W3R5cGU9c2VhcmNoXSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgYmFja2dyb3VuZC1jb2xvcjtcclxuICB0cmFuc2l0aW9uOiAuM3MgYmFja2dyb3VuZC1jb2xvcjtcclxufVxyXG5cclxuLm5hdi13cmFwcGVyIC5pbnB1dC1maWVsZCBpbnB1dFt0eXBlPXNlYXJjaF0ge1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxuICBwYWRkaW5nLWxlZnQ6IDRyZW07XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDRyZW0pO1xyXG4gIGJvcmRlcjogMDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQgaW5wdXRbdHlwZT1zZWFyY2hdOmZvY3VzOm5vdCguYnJvd3Nlci1kZWZhdWx0KSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDA7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICBjb2xvcjogIzQ0NDtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIGlucHV0W3R5cGU9c2VhcmNoXTpmb2N1czpub3QoLmJyb3dzZXItZGVmYXVsdCkgKyBsYWJlbCBpLFxyXG4uaW5wdXQtZmllbGQgaW5wdXRbdHlwZT1zZWFyY2hdOmZvY3VzOm5vdCguYnJvd3Nlci1kZWZhdWx0KSB+IC5tZGktbmF2aWdhdGlvbi1jbG9zZSxcclxuLmlucHV0LWZpZWxkIGlucHV0W3R5cGU9c2VhcmNoXTpmb2N1czpub3QoLmJyb3dzZXItZGVmYXVsdCkgfiAubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG59XHJcblxyXG4uaW5wdXQtZmllbGQgaW5wdXRbdHlwZT1zZWFyY2hdICsgLmxhYmVsLWljb24ge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gIGxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5pbnB1dC1maWVsZCBpbnB1dFt0eXBlPXNlYXJjaF0gfiAubWRpLW5hdmlnYXRpb24tY2xvc2UsXHJcbi5pbnB1dC1maWVsZCBpbnB1dFt0eXBlPXNlYXJjaF0gfiAubWF0ZXJpYWwtaWNvbnMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDFyZW07XHJcbiAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3MgY29sb3I7XHJcbiAgdHJhbnNpdGlvbjogLjNzIGNvbG9yO1xyXG59XHJcblxyXG4vKiBUZXh0YXJlYSAqL1xyXG50ZXh0YXJlYSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbnRleHRhcmVhLm1hdGVyaWFsaXplLXRleHRhcmVhIHtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAvKiBwcmV2ZW50cyBzY3JvbGwgYmFyIGZsYXNoICovXHJcbiAgcGFkZGluZzogLjhyZW0gMCAuOHJlbSAwO1xyXG4gIC8qIHByZXZlbnRzIHRleHQganVtcCBvbiBFbnRlciBrZXlwcmVzcyAqL1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBtaW4taGVpZ2h0OiAzcmVtO1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5oaWRkZW5kaXYge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgLyogZnV0dXJlIHZlcnNpb24gb2YgZGVwcmVjYXRlZCAnd29yZC13cmFwJyAqL1xyXG4gIHBhZGRpbmctdG9wOiAxLjJyZW07XHJcbiAgLyogcHJldmVudHMgdGV4dCBqdW1wIG9uIEVudGVyIGtleXByZXNzICovXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuXHJcblxyXG4vKiBBdXRvY29tcGxldGUgKi9cclxuLmF1dG9jb21wbGV0ZS1jb250ZW50IGxpIC5oaWdobGlnaHQge1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG59XHJcblxyXG4uYXV0b2NvbXBsZXRlLWNvbnRlbnQgbGkgaW1nIHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgbWFyZ2luOiA1cHggMTVweDtcclxufVxyXG5cclxuLyogQ2hhcmFjdGVyIENvdW50ZXIgKi9cclxuLmNoYXJhY3Rlci1jb3VudGVyIHtcclxuICBtaW4taGVpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLyogRmlsZSBJbnB1dFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4uZmlsZS1maWVsZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxufVxyXG5cclxuLmZpbGUtZmllbGQgLmZpbGUtcGF0aC13cmFwcGVyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLmZpbGUtZmllbGQgaW5wdXQuZmlsZS1wYXRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZpbGUtZmllbGQgLmJ0biwgLmZpbGUtZmllbGQgLmJ0bi1sYXJnZSwgLmZpbGUtZmllbGQgLmJ0bi1zbWFsbCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbn1cclxuXHJcbi5maWxlLWZpZWxkIHNwYW4ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZpbGUtZmllbGQgaW5wdXRbdHlwZT1maWxlXSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xyXG59XHJcblxyXG4uZmlsZS1maWVsZCBpbnB1dFt0eXBlPWZpbGVdOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _Authentication_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Authentication/login/login.component */ "Fmfc");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _Authentication_auth_authguard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Authentication/auth/authguard.service */ "9A/8");
/* harmony import */ var _Authentication_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Authentication/register/register.component */ "mGKN");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/services/auth.service */ "IYfF");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _admin_product_addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/product/addproduct/addproduct.component */ "Vjiv");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var _admin_product_listproducts_listproducts_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./admin/product/listproducts/listproducts.component */ "MLpR");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _admin_product_product_product_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/product/product/product.component */ "Up0N");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _shared_services_product_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/services/product.service */ "mB2O");
/* harmony import */ var _shared_shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./shared/shared-components/nav/nav.component */ "NV/E");
/* harmony import */ var _shared_shared_components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shared/shared-components/shopping-cart/shopping-cart.component */ "tENs");
/* harmony import */ var _shared_shared_components_shopping_cart_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shared/shared-components/shopping-cart/product-list/product-list.component */ "jF8f");
/* harmony import */ var _shared_shared_components_shopping_cart_cart_cart_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shared/shared-components/shopping-cart/cart/cart.component */ "j/Gr");
/* harmony import */ var _shared_shared_components_shopping_cart_cart_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./shared/shared-components/shopping-cart/cart/cart-item/cart-item.component */ "lAtE");
/* harmony import */ var _shared_shared_components_shopping_cart_product_list_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./shared/shared-components/shopping-cart/product-list/product-item/product-item.component */ "85uD");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _shared_services_order_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./shared/services/order.service */ "NuUg");
/* harmony import */ var _shared_shared_components_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./shared/shared-components/order-history/order-history.component */ "2bkT");
/* harmony import */ var _shared_shared_components_shopping_cart_cart_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./shared/shared-components/shopping-cart/cart/checkout/checkout.component */ "jMDE");
/* harmony import */ var _shared_shared_components_order_history_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./shared/shared-components/order-history/order-details/order-details.component */ "r0J8");
/* harmony import */ var _admin_all_orders_all_orders_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./admin/all-orders/all-orders.component */ "fmy9");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _admin_all_orders_order_details_admin_order_details_admin_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./admin/all-orders/order-details-admin/order-details-admin.component */ "i8XR");
/* harmony import */ var _admin_product_listproducts_product_image_product_image_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./admin/product/listproducts/product-image/product-image.component */ "0NPq");
/* harmony import */ var _shared_shared_components_shopping_cart_cart_cart_item_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./shared/shared-components/shopping-cart/cart/cart-item/product-details/product-details.component */ "jPiV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/core */ "fXoL");


















































function tokenGetter() {
    return localStorage.getItem('jwt');
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵdefineInjector"]({ providers: [_Authentication_auth_authguard_service__WEBPACK_IMPORTED_MODULE_9__["AuthguardService"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_18__["AuthService"], _shared_services_product_service__WEBPACK_IMPORTED_MODULE_29__["ProductService"], _shared_services_order_service__WEBPACK_IMPORTED_MODULE_37__["OrderService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_23__["Ng2SearchPipeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_28__["MatCardModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_42__["FlexLayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_43__["MatListModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_19__["ToastrModule"].forRoot(),
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__["JwtModule"].forRoot({
                config: {
                    tokenGetter: tokenGetter,
                    allowedDomains: ["localhost:52238"],
                    disallowedRoutes: []
                }
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_47__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _Authentication_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        _Authentication_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
        _admin_admin_component__WEBPACK_IMPORTED_MODULE_21__["AdminComponent"],
        _admin_product_addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_22__["AddproductComponent"],
        _admin_product_listproducts_listproducts_component__WEBPACK_IMPORTED_MODULE_24__["ListproductsComponent"],
        _admin_product_product_product_component__WEBPACK_IMPORTED_MODULE_27__["ProductComponent"],
        _shared_shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_30__["NavComponent"],
        _shared_shared_components_shopping_cart_shopping_cart_component__WEBPACK_IMPORTED_MODULE_31__["ShoppingCartComponent"],
        _shared_shared_components_shopping_cart_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_32__["ProductListComponent"],
        _shared_shared_components_shopping_cart_cart_cart_component__WEBPACK_IMPORTED_MODULE_33__["CartComponent"],
        _shared_shared_components_shopping_cart_cart_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_34__["CartItemComponent"],
        _shared_shared_components_shopping_cart_product_list_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_35__["ProductItemComponent"],
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_36__["NotFoundComponent"],
        _shared_shared_components_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_38__["OrderHistoryComponent"],
        _shared_shared_components_shopping_cart_cart_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_39__["CheckoutComponent"],
        _shared_shared_components_order_history_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_40__["OrderDetailsComponent"],
        _admin_all_orders_all_orders_component__WEBPACK_IMPORTED_MODULE_41__["AllOrdersComponent"],
        _admin_all_orders_order_details_admin_order_details_admin_component__WEBPACK_IMPORTED_MODULE_44__["OrderDetailsAdminComponent"],
        _admin_product_listproducts_product_image_product_image_component__WEBPACK_IMPORTED_MODULE_45__["ProductImageComponent"],
        _shared_shared_components_shopping_cart_cart_cart_item_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_46__["ProductDetailsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_23__["Ng2SearchPipeModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_28__["MatCardModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_42__["FlexLayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_43__["MatListModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_19__["ToastrModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_8__["JwtModule"]] }); })();


/***/ }),

/***/ "fmy9":
/*!**********************************************************!*\
  !*** ./src/app/admin/all-orders/all-orders.component.ts ***!
  \**********************************************************/
/*! exports provided: AllOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllOrdersComponent", function() { return AllOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/order.service */ "NuUg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared-components/nav/nav.component */ "NV/E");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







function AllOrdersComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllOrdersComponent_tr_27_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const order_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.getDetails(order_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.order_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.customer_email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 5, order_r1.order_date, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 8, order_r1.order_total, "INR"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.order_status);
} }
class AllOrdersComponent {
    constructor(orderService, router) {
        this.orderService = orderService;
        this.router = router;
    }
    ngOnInit() {
        this.orderService.getOrders().then(res => {
            if (!res) {
                console.log(Error);
            }
            this.orderList = res;
            // console.log(this.orderList)
            this.orderList = this.orderList;
            this.orderList = this.orderList.sort((order1, order2) => {
                return this.compareObjects(order1, order2, 'order_date');
            });
        });
    }
    getDetails(order) {
        this.orderService.order = order;
        this.router.navigate(['/orderdetailsadmin']);
    }
    compareObjects(object1, object2, key) {
        const obj1 = object1[key].toUpperCase();
        const obj2 = object2[key].toUpperCase();
        if (obj1 < obj2) {
            return 1;
        }
        if (obj1 > obj2) {
            return -1;
        }
        return 0;
    }
}
AllOrdersComponent.ɵfac = function AllOrdersComponent_Factory(t) { return new (t || AllOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AllOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllOrdersComponent, selectors: [["app-all-orders"]], decls: 28, vars: 1, consts: [[1, "center-align"], [1, "hcenter"], [1, "table"], [1, "thead-dark", "table-primary"], [4, "ngFor", "ngForOf"], ["title", "Details", "href", "javascript:void(0);", 2, "margin-left", "10px", 3, "click"]], template: function AllOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "thead", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Customer Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Order Date and Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Order Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Order Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AllOrdersComponent_tr_27_Template, 17, 11, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orderList);
    } }, directives: [_shared_shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], styles: ["h2[_ngcontent-%COMP%]\r\n{\r\n    text-decoration: underline;\r\n    display: block;\r\n    margin-block-start: 0.83em;\r\n    margin-block-end: 0.83em;\r\n    margin-inline-start: 0px;\r\n    margin-inline-end: 0px;\r\n}\r\n\r\n.mat-h2[_ngcontent-%COMP%], .mat-title[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\r\n  letter-spacing: normal;\r\n  margin: 0 0 16px;\r\n}\r\n\r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\r\n  box-sizing: inherit;\r\n}\r\n\r\ntable[_ngcontent-%COMP%] {\r\n    border-collapse: separate;\r\n    border-spacing: 20px 0;\r\n    width: 100%;\r\n    display: table;\r\n    text-indent: initial;\r\n  }\r\n\r\n.mat-card[_ngcontent-%COMP%] {\r\n    background: #fff;\r\n    color: rgba(0,0,0,.87);\r\n}\r\n\r\n.hcenter[_ngcontent-%COMP%] {\r\n    display: table;\r\n    margin: 0 auto;\r\n   }\r\n\r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n    padding: 15px 5px;\r\n    display: table-cell;\r\n    text-align: left;\r\n    vertical-align: middle;\r\n    border-radius: 2px;   \r\n\r\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC1vcmRlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSwwQkFBMEI7SUFDMUIsY0FBYztJQUNkLDBCQUEwQjtJQUMxQix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtBQUMxQjs7QUFFQTtFQUNFLHdEQUF3RDtFQUN4RCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBRUUsbUJBQW1CO0FBQ3JCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsY0FBYztJQUNkLG9CQUFvQjtFQUN0Qjs7QUFDQTtJQUNFLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7O0FBRUU7SUFDRSxjQUFjO0lBQ2QsY0FBYztHQUNmOztBQUNBO0lBQ0MsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjs7R0FFbkIiLCJmaWxlIjoiYWxsLW9yZGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJcclxue1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogMC44M2VtO1xyXG4gICAgbWFyZ2luLWJsb2NrLWVuZDogMC44M2VtO1xyXG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogMHB4O1xyXG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IDBweDtcclxufVxyXG5cclxuLm1hdC1oMiwgLm1hdC10aXRsZSwgLm1hdC10eXBvZ3JhcGh5IGgyIHtcclxuICBmb250OiA1MDAgMjBweC8zMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgbWFyZ2luOiAwIDAgMTZweDtcclxufVxyXG4qLCAqOmJlZm9yZSwgKjphZnRlciB7XHJcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBpbmhlcml0O1xyXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XHJcbn1cclxudGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAyMHB4IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgdGV4dC1pbmRlbnQ6IGluaXRpYWw7XHJcbiAgfVxyXG4gIC5tYXQtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjg3KTtcclxufVxyXG4gXHJcbiAgLmhjZW50ZXIge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgfVxyXG4gICB0ZCwgdGgge1xyXG4gICAgcGFkZGluZzogMTVweCA1cHg7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7ICAgXHJcblxyXG4gICB9Il19 */"] });


/***/ }),

/***/ "i8XR":
/*!***************************************************************************************!*\
  !*** ./src/app/admin/all-orders/order-details-admin/order-details-admin.component.ts ***!
  \***************************************************************************************/
/*! exports provided: OrderDetailsAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsAdminComponent", function() { return OrderDetailsAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/order.service */ "NuUg");
/* harmony import */ var _shared_shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/shared-components/nav/nav.component */ "NV/E");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function OrderDetailsAdminComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.product_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.product_qty);
} }
class OrderDetailsAdminComponent {
    constructor(orderService) {
        this.orderService = orderService;
        this.orderDetail = [];
    }
    ngOnInit() {
        this.orderService.getOrderDetails(this.orderService.order.order_id).then(res => {
            this.orderDetail = res;
        });
        console.log(this.orderService.order);
    }
}
OrderDetailsAdminComponent.ɵfac = function OrderDetailsAdminComponent_Factory(t) { return new (t || OrderDetailsAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"])); };
OrderDetailsAdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderDetailsAdminComponent, selectors: [["app-order-details-admin"]], decls: 53, vars: 10, consts: [[1, "row", "hcenter", 2, "width", "50%"], [1, "row"], [1, "table", 2, "margin-left", "5%"], [1, "thead-dark", "table-primary"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "table"], [2, "width", "50px"]], template: function OrderDetailsAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Product Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Product Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, OrderDetailsAdminComponent_tr_16_Template, 7, 3, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Customer Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Order Address: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Pincode: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Mobile: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Status: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Total: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orderDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.orderService.order.customer_email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.orderService.order.order_address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.orderService.order.order_pincode, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.orderService.order.order_mobile, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.orderService.order.order_status, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](52, 7, ctx.orderService.order.order_total, "INR"), " ");
    } }, directives: [_shared_shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: [".hcenter[_ngcontent-%COMP%] {\r\n  display: table;\r\n  margin: 0 auto;\r\n }\r\n \r\nelement.style[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n}\r\n \r\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n  padding: 15px 5px;\r\n  display: table-cell;\r\n  text-align: left;\r\n  vertical-align: middle;\r\n  border-radius: 2px;\r\n}\r\n \r\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\r\n  border: none;\r\n}\r\n \r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\r\n  box-sizing: inherit;\r\n}\r\n \r\nth[_ngcontent-%COMP%] {\r\n  display: table-cell;\r\n  vertical-align: inherit;\r\n  font-weight: bold;\r\n  text-align: -internal-center;\r\n}\r\n \r\ntable[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: table;\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n \r\n.mat-card[_ngcontent-%COMP%] {\r\n  background: #fff;\r\n  color: rgba(0,0,0,.87);\r\n}\r\n \r\n.mat-card[_ngcontent-%COMP%] {\r\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n}\r\n \r\n.mat-body[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%] {\r\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif;\r\n  letter-spacing: normal;\r\n}\r\n \r\nhtml[_ngcontent-%COMP%] {\r\n  @media only screen and (min-width: 1200px)\r\n  font-size: 15px;\r\n}\r\n \r\nhtml[_ngcontent-%COMP%] {\r\n  @media only screen and (min-width: 992px)\r\n  font-size: 14.5px;\r\n}\r\n \r\nhtml[_ngcontent-%COMP%] {\r\n  @media only screen and (min-width: 0)\r\n  font-size: 14px;\r\n}\r\n \r\nhtml[_ngcontent-%COMP%] {\r\n  line-height: 1.5;\r\n  font-family: -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Oxygen-Sans,Ubuntu,Cantarell,\"Helvetica Neue\",sans-serif;\r\n  font-weight: normal;\r\n  color: rgba(0,0,0,0.87);\r\n}\r\n \r\n*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\r\n  box-sizing: inherit;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWRldGFpbHMtYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsY0FBYztDQUNmOztBQUVEO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUVFLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtBQUM5Qjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxpREFBaUQ7QUFDbkQ7O0FBQ0E7RUFDRSx3REFBd0Q7RUFDeEQsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0U7aUJBQ2U7QUFDakI7O0FBQ0E7RUFDRTttQkFDaUI7QUFDbkI7O0FBQ0E7RUFDRTtpQkFDZTtBQUNqQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQix3SEFBd0g7RUFDeEgsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUVFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJvcmRlci1kZXRhaWxzLWFkbWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmhjZW50ZXIge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gfVxyXG4gXHJcbmVsZW1lbnQuc3R5bGUge1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG50ZCwgdGgge1xyXG4gIHBhZGRpbmc6IDE1cHggNXB4O1xyXG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG50YWJsZSwgdGgsIHRkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xyXG4gIC13ZWJraXQtYm94LXNpemluZzogaW5oZXJpdDtcclxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG59XHJcbnRoIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBpbmhlcml0O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IC1pbnRlcm5hbC1jZW50ZXI7XHJcbn1cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbi5tYXQtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwuODcpO1xyXG59XHJcbi5tYXQtY2FyZCB7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5tYXQtYm9keSwgLm1hdC1ib2R5LTEsIC5tYXQtdHlwb2dyYXBoeSB7XHJcbiAgZm9udDogNDAwIDE0cHgvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG59XHJcbmh0bWwge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KVxyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5odG1sIHtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KVxyXG4gIGZvbnQtc2l6ZTogMTQuNXB4O1xyXG59XHJcbmh0bWwge1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMClcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuaHRtbCB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsXCJTZWdvZSBVSVwiLFJvYm90byxPeHlnZW4tU2FucyxVYnVudHUsQ2FudGFyZWxsLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC44Nyk7XHJcbn1cclxuXHJcbiosICo6YmVmb3JlLCAqOmFmdGVyIHtcclxuICAtd2Via2l0LWJveC1zaXppbmc6IGluaGVyaXQ7XHJcbiAgYm94LXNpemluZzogaW5oZXJpdDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "j/Gr":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/shared-components/shopping-cart/cart/cart.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/order.service */ "NuUg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart-item/cart-item.component */ "lAtE");






function CartComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cart is Empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CartComponent_ul_1_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-cart-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cartItem", item_r4);
} }
function CartComponent_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_ul_1_li_1_Template, 2, 1, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.orderService.cartItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total:", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 2, ctx_r1.orderService.cartTotal, "INR"), "");
} }
function CartComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.checkout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Checkout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CartComponent {
    constructor(orderService, router, toaster) {
        this.orderService = orderService;
        this.router = router;
        this.toaster = toaster;
    }
    ngOnInit() {
        this.orderService.cartTotal = 0;
        if (localStorage.getItem('cart')) {
            this.orderService.cartItems = JSON.parse(localStorage.getItem('cart'));
            this.orderService.cartItems.forEach(item => {
                this.orderService.cartTotal += (item.product_quantity * item.product_price);
            });
        }
        // this.orderService.cartItems.forEach(item=>{
        //   this.orderService.cartTotal+=(item.product_quantity*item.product_price)
        // })
        //localStorage.setItem('cart',JSON.stringify(this.orderService.cartItems))
        // this.msg.getMsg().subscribe((product:any)=>
        //   {
        //     this.orderService.addProductToCart(product);
        //   })
        // this.msg.getCartItem().subscribe((cartItem:any)=>
        // {
        //   this.removeProductFromCart(cartItem);
        // })
    }
    // removeProductFromCart(cartItem)
    // {
    //   for(let i in this.orderService.cartItems)
    //   {
    //     if(this.orderService.cartItems[i].product_id===cartItem.product_id)
    //     {
    //       this.orderService.cartItems[i].product_quantity--
    //       if(this.orderService.cartItems[i].product_quantity<=0)
    //       {
    //         this.orderService.cartItems.pop({
    //           product_id:cartItem.product_id
    //         })
    //       }
    //     }
    //   }
    //   this.orderService.cartTotal=0;
    //   this.orderService.cartItems.forEach(item=>{
    //     this.orderService.cartTotal+=(item.product_quantity*item.product_price)
    //   })
    //   localStorage.setItem('cart',JSON.stringify(this.orderService.cartItems))
    //   if(this.orderService.cartItems.length==0)
    //   {
    //     localStorage.removeItem('cart');
    //   }
    // }
    // addProductToCart(product)
    // {
    //  // event.preventDefault();
    //   let productExists=false;
    //   for(let i in this.orderService.cartItems)
    //   { 
    //      if(this.orderService.cartItems[i].product_id===product.product_id)
    //     {
    //       productExists=true;
    //       if(product.product_quantity<=this.orderService.cartItems[i].product_quantity)
    //       {
    //         this.toaster.error('Maximum quantity exceeded');
    //       }
    //       else
    //       {
    //         this.orderService.cartItems[i].product_quantity++
    //         break;
    //       }
    //     }
    //   }
    //   if(!productExists)
    //   {
    //     this.orderService.cartItems.push({
    //       product_id:product.product_id,
    //       product_name:product.product_name,
    //       product_price:product.product_price,
    //       product_quantity:1
    //     })
    //   }
    //       this.orderService.cartTotal=0;
    //       this.orderService.cartItems.forEach(item=>{
    //         this.orderService.cartTotal+=(item.product_quantity*item.product_price)
    //       })
    //   localStorage.setItem('cart',JSON.stringify(this.orderService.cartItems))
    // }
    checkout() {
        this.orderService.orders = this.orderService.cartItems;
        this.router.navigate(['checkout']);
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], decls: 4, vars: 3, consts: [["class", "alert alert-info", 4, "ngIf"], ["class", "list-group", 4, "ngIf"], [4, "ngIf"], [1, "alert", "alert-info"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "list-group-item", "active"], [1, "list-group-item"], [3, "cartItem"], ["type", "button", 1, "btn", "btn-md", "btn-primary", "product-btn", 2, "width", "165px", 3, "click"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CartComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CartComponent_ul_1_Template, 6, 5, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CartComponent_div_3_Template, 3, 0, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderService.cartItems.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderService.cartItems.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderService.cartItems.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_5__["CartItemComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "jF8f":
/*!***********************************************************************************************!*\
  !*** ./src/app/shared/shared-components/shopping-cart/product-list/product-list.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/product.service */ "mB2O");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-item/product-item.component */ "85uD");






function ProductListComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("productItem", product_r1);
} }
class ProductListComponent {
    constructor(productService, sanitizer) {
        this.productService = productService;
        this.sanitizer = sanitizer;
    }
    ngOnInit() {
        this.productService.getProducts().then(res => {
            if (Error) {
                console.log(Error);
            }
            this.completeList = res;
            let objectURL = 'data:image/png;base64,' + this.completeList.product_Image;
            this.completeList.product_Image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
            this.productList = this.completeList;
            this.filterCategoryList = this.completeList;
        });
    }
    Search() {
        if (this.product_name == "") {
            this.productList = this.filterCategoryList;
        }
        else {
            this.productList = this.filterCategoryList.filter(res => {
                if (res.product_name != null)
                    return res.product_name.toLocaleLowerCase().match(this.product_name.toLocaleLowerCase());
            });
        }
    }
    filterCategory(value) {
        if (value == "Filter") {
            this.filterCategoryList = this.completeList;
            this.productList = this.filterCategoryList;
        }
        else {
            this.filterCategoryList = this.completeList.filter(res => {
                if (res.product_category != null)
                    return res.product_category.toLocaleLowerCase().match(value.toLocaleLowerCase());
            });
            this.productList = this.filterCategoryList;
        }
    }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductListComponent, selectors: [["app-product-list"]], decls: 19, vars: 2, consts: [[1, "row"], [1, "col-md-2"], [1, "cart-filters"], [1, "input-field"], ["type", "text", "name", "product_name", "placeholder", "Enter product to search", 3, "ngModel", "ngModelChange"], ["aria-label", "Default select example", 1, "form-select", 2, "height", "35px", "font-size", "small", 3, "change"], ["selected", ""], ["value", "Watches"], ["value", "Headphones"], ["value", "Speakers"], ["value", "Lighting"], [1, "col-md-10"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "col-md-4"], [3, "productItem"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductListComponent_Template_input_ngModelChange_4_listener($event) { return ctx.product_name = $event; })("ngModelChange", function ProductListComponent_Template_input_ngModelChange_4_listener() { return ctx.Search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductListComponent_Template_select_change_5_listener($event) { return ctx.filterCategory($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Watches");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Headphones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Speakers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Lighting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ProductListComponent_div_18_Template, 2, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.product_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productList);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_5__["ProductItemComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "jMDE":
/*!********************************************************************************************!*\
  !*** ./src/app/shared/shared-components/shopping-cart/cart/checkout/checkout.component.ts ***!
  \********************************************************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/order.service */ "NuUg");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../nav/nav.component */ "NV/E");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function CheckoutComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Address required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_mat_error_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pincode invalid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pincode required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile invalid ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CheckoutComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CheckoutComponent {
    constructor(orderService) {
        this.orderService = orderService;
        this.submitted = false;
    }
    ngOnInit() {
    }
    onSubmit() {
        this.orderService.addOrder();
    }
}
CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) { return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"])); };
CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CheckoutComponent, selectors: [["app-checkout"]], decls: 22, vars: 7, consts: [[1, "container", "hcenter"], [1, "example-form", 3, "formGroup", "ngSubmit"], [1, "row"], [2, "width", "25vw"], ["matInput", "", "placeholder", "Address", "formControlName", "address"], [4, "ngIf"], ["matInput", "", "placeholder", "Pincode", "formControlName", "pincode"], ["matInput", "", "placeholder", "Mobile", "formControlName", "mobile"], ["mat-stroked-button", "", "color", "accent", "type", "submit", 1, "btn-class", 3, "disabled"]], template: function CheckoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CheckoutComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CheckoutComponent_mat_error_8_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CheckoutComponent_mat_error_12_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CheckoutComponent_mat_error_13_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CheckoutComponent_mat_error_17_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CheckoutComponent_mat_error_18_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.orderService.checkOutForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderService.checkOutForm.controls.address.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderService.checkOutForm.controls.pincode.hasError("pattern") && !ctx.orderService.checkOutForm.controls.pincode.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderService.checkOutForm.controls.pincode.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderService.checkOutForm.controls.mobile.hasError("pattern") && !ctx.orderService.checkOutForm.controls.mobile.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.orderService.checkOutForm.controls.mobile.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.orderService.checkOutForm.valid);
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatError"]], styles: ["*[_ngcontent-%COMP%]{\r\n    margin-right: auto;\r\n    margin-left: auto;\r\n    max-width: 960px;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]\r\n{\r\n    margin-left: 330px;\r\n    width: 300px;\r\n}\r\n\r\nhcenter[_ngcontent-%COMP%] \r\n{\r\n    display: table;\r\n    margin: 0 auto;\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%]\r\n{\r\n    left: 34%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrb3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxTQUFTO0FBQ2IiLCJmaWxlIjoiY2hlY2tvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1heC13aWR0aDogOTYwcHg7XHJcbn1cclxuXHJcbmJ1dHRvblxyXG57XHJcbiAgICBtYXJnaW4tbGVmdDogMzMwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbmhjZW50ZXIgXHJcbntcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkXHJcbntcclxuICAgIGxlZnQ6IDM0JTtcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "jPiV":
/*!********************************************************************************************************************!*\
  !*** ./src/app/shared/shared-components/shopping-cart/cart/cart-item/product-details/product-details.component.ts ***!
  \********************************************************************************************************************/
/*! exports provided: ProductDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function() { return ProductDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/product.service */ "mB2O");
/* harmony import */ var src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/order.service */ "NuUg");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ProductDetailsComponent_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "data:image/jpeg;base64,", ctx_r0.product.product_Image, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProductDetailsComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductDetailsComponent_span_22_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.handleAddToCart(ctx_r4.product); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailsComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add to Cart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductDetailsComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Out of stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProductDetailsComponent {
    constructor(productService, orderService) {
        this.productService = productService;
        this.orderService = orderService;
    }
    ngOnInit() {
        this.product = this.productService.product;
        console.log(this.product);
    }
    handleAddToCart(product) {
        this.orderService.addProductToCart(product);
    }
}
ProductDetailsComponent.ɵfac = function ProductDetailsComponent_Factory(t) { return new (t || ProductDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"])); };
ProductDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductDetailsComponent, selectors: [["app-product-details"]], decls: 25, vars: 11, consts: [["mat-button", "", 1, "close-button", 3, "mat-dialog-close"], [1, "container"], [1, "row"], [1, "col", "s6"], [4, "ngIf"], ["style", "color: red; font-weight: bold;", "class", "hcenter", 4, "ngIf"], ["alt", "Card image cap", 1, "card-img-top", 2, "width", "200px", 3, "src"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "product-btn", "mr-1", 3, "click"], ["type", "button", "disabled", "", 1, "btn", "btn-sm", "product-btn", "mr-1", 2, "background-color", "gray"], [1, "hcenter", 2, "color", "red", "font-weight", "bold"]], template: function ProductDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProductDetailsComponent_span_6_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Description:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ProductDetailsComponent_span_22_Template, 3, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ProductDetailsComponent_span_23_Template, 3, 0, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProductDetailsComponent_span_24_Template, 3, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.product_Image_Name != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.product_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 8, ctx.product.product_price, "INR"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.product.product_description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.product_quantity != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.product_quantity == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product.product_quantity == 0);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogClose"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"]], styles: ["h2[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n.close-button[_ngcontent-%COMP%]{\r\n    float: right;\r\n    top:-24px;\r\n    right:-24px;\r\n    \r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixTQUFTO0lBQ1QsV0FBVzs7RUFFYiIsImZpbGUiOiJwcm9kdWN0LWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgye1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcblxyXG4uY2xvc2UtYnV0dG9ue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgdG9wOi0yNHB4O1xyXG4gICAgcmlnaHQ6LTI0cHg7XHJcbiAgICBcclxuICB9Il19 */"] });


/***/ }),

/***/ "lAtE":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/shared-components/shopping-cart/cart/cart-item/cart-item.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CartItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemComponent", function() { return CartItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/order.service */ "NuUg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



class CartItemComponent {
    constructor(orderService) {
        this.orderService = orderService;
    }
    ngOnInit() {
    }
    deleteCartItem(cartItem) {
        this.orderService.removeProductFromCart(cartItem);
    }
}
CartItemComponent.ɵfac = function CartItemComponent_Factory(t) { return new (t || CartItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"])); };
CartItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartItemComponent, selectors: [["app-cart-item"]], inputs: { cartItem: "cartItem" }, decls: 12, vars: 6, consts: [[1, "cart-item"], [1, "btn", "btn-sm", "btn-danger", "product-btn", 3, "click"]], template: function CartItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " x ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartItemComponent_Template_button_click_10_listener() { return ctx.deleteCartItem(ctx.cartItem); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\uD83D\uDDD1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cartItem.product_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cartItem.product_quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 3, ctx.cartItem.product_quantity * ctx.cartItem.product_price, "INR"), "");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]], styles: [".cart-item[_ngcontent-%COMP%]{\r\n     font-size: small;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFDO0tBQ0ksZ0JBQWdCO0NBQ3BCIiwiZmlsZSI6ImNhcnQtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIC5jYXJ0LWl0ZW17XHJcbiAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuIH1cclxuICJdfQ== */"] });


/***/ }),

/***/ "mB2O":
/*!****************************************************!*\
  !*** ./src/app/shared/services/product.service.ts ***!
  \****************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");







class ProductService {
    constructor(http, toaster, router, sanitizer) {
        this.http = http;
        this.toaster = toaster;
        this.router = router;
        this.sanitizer = sanitizer;
        this.apiUrl = 'http://localhost:52238/api/product';
        this.productForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*')]),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[0-9]{1,}')]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('(\\d+)(\\.)?(\\d+)?')]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    }
    getProducts() {
        return this.http.get(this.apiUrl + '/allproducts').toPromise().then();
    }
    addProduct(data, file) {
        const token = localStorage.getItem('jwt');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({ Authorization: `Bearer ${token}` });
        let formData = new FormData();
        formData.set('Product_id', data.id);
        formData.set('Product_name', data.name);
        formData.set('Product_category', data.category);
        formData.set('Product_quantity', data.quantity);
        formData.set('Product_price', data.price);
        formData.set('Product_description', data.description);
        formData.set('Image', file);
        if (data.id == null || data.id == 0) {
            this.http.post(this.apiUrl + '/addproduct', formData, { headers: headers })
                .subscribe(res => {
                this.toaster.success('New product added');
                this.productForm.reset();
                setTimeout(function () {
                }, 500);
            });
        }
        else {
            this.http.post(this.apiUrl + '/editproduct', formData)
                .subscribe(res => {
            });
            this.toaster.success('Product updated');
            this.productForm.reset();
            setTimeout(function () {
            }, 500);
        }
    }
    deleteProduct(id) {
        return this.http.delete(this.apiUrl + '/deleteproduct/' + id)
            .subscribe(res => {
            if (Error) {
                console.log(Error);
            }
            if (res == 1) {
                this.toaster.success('Product deleted');
                setTimeout(function () {
                    location.reload();
                }, 500);
            }
            else {
                alert('Error in deleting product');
            }
        });
    }
    getProduct(id) {
        return this.http.get(this.apiUrl + '/getproduct/' + id);
    }
    editProduct(product) {
        return this.http.put(this.apiUrl + '/editproduct/', product)
            .subscribe(res => {
            if (Error) {
                console.log(Error);
            }
            if (res == 1) {
                this.toaster.success('Product updated');
                setTimeout(function () {
                    location.reload();
                }, 500);
            }
        });
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["DomSanitizer"])); };
ProductService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "mGKN":
/*!***************************************************************!*\
  !*** ./src/app/Authentication/register/register.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/auth.service */ "IYfF");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/shared-components/nav/nav.component */ "NV/E");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");














function RegisterComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_hint_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Minimum length is 8 and it must have at-least 1 special character, 1 number and 1 letter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Password required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please enter a valid Password Minimum length is 8 and it must have at-least 1 special character, 1 number and 1 letter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirm password do not match ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Confirm Password required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First name can have letters only ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " First name required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last name required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Last name can have letters only ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile must be of 10 digits and can only have numbers ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_mat_error_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Mobile required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RegisterComponent {
    constructor(formBuilder, http, authService, toaster, router) {
        this.formBuilder = formBuilder;
        this.http = http;
        this.authService = authService;
        this.toaster = toaster;
        this.router = router;
        this.hide = true;
        this.hide2 = true;
    }
    ngOnInit() {
    }
    onSubmit() {
        if (this.authService.registerForm.invalid) {
            return;
        }
        this.authService.register()
            .subscribe((res) => {
            if (res.message == "Customer is blocked") {
                this.toaster.error("User is blocked");
            }
            else {
                if (res.code > 0) {
                    this.authService.registerForm.reset();
                    this.toaster.success('New user created!', 'Registeration successful ');
                    const token = res.token;
                    localStorage.setItem("jwt", token);
                    localStorage.setItem("user", res.email);
                    localStorage.setItem("Customer_id", res.customer_id);
                    this.router.navigate(["/"]);
                }
                else if (res.message === "Customer is already registered") {
                    console.log(res);
                    this.toaster.error('User already exists!', 'Registeration failed ');
                }
            }
        }, err => {
            console.log(err);
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 41, vars: 19, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "main-wrapper"], [1, "box", 2, "width", "70%"], [1, "example-form", "hcenter", 3, "formGroup", "ngSubmit"], [2, "width", "25vw"], ["matInput", "", "placeholder", "Email", "formControlName", "email"], [4, "ngIf"], ["matInput", "", "placeholder", "Password", "formControlName", "password", 3, "type"], ["matSuffix", "", 3, "click"], ["matInput", "", "placeholder", "Confirm Password", "formControlName", "confirmPassword", 3, "type"], ["matInput", "", "placeholder", "First Name", "formControlName", "firstName"], ["matInput", "", "placeholder", "Last Name", "formControlName", "lastName"], ["matInput", "", "placeholder", "Mobile", "formControlName", "mobile"], ["mat-stroked-button", "", "color", "accent", "routerLink", "/login", "type", "submit", 1, "btn-class"], ["mat-stroked-button", "", "color", "accent", "type", "submit", 1, "btn-class", 2, "margin-top", "2%", 3, "disabled"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RegisterComponent_mat_error_10_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RegisterComponent_mat_error_11_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_mat_icon_click_14_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RegisterComponent_mat_hint_16_Template, 2, 0, "mat-hint", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RegisterComponent_mat_error_17_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RegisterComponent_mat_error_18_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_mat_icon_click_21_listener() { return ctx.hide2 = !ctx.hide2; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, RegisterComponent_mat_error_23_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RegisterComponent_mat_error_24_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, RegisterComponent_mat_error_27_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, RegisterComponent_mat_error_28_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RegisterComponent_mat_error_31_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, RegisterComponent_mat_error_32_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, RegisterComponent_mat_error_35_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RegisterComponent_mat_error_36_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.authService.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.registerForm.controls.email.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.registerForm.controls.email.hasError("email") && !ctx.authService.registerForm.controls.email.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.registerForm.controls.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.registerForm.controls.password.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.registerForm.controls.password.hasError("passwordInvalid") && !ctx.authService.registerForm.controls.password.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide2 ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide2 ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.registerForm.controls.confirmPassword.hasError("ConfirmPassword") && !ctx.authService.registerForm.controls.confirmPassword.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.registerForm.controls.confirmPassword.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.registerForm.controls.firstName.hasError("pattern") && !ctx.authService.registerForm.controls.firstName.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.registerForm.controls.firstName.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.registerForm.controls.lastName.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.registerForm.controls.lastName.hasError("pattern") && !ctx.authService.registerForm.controls.lastName.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.registerForm.controls.mobile.hasError("pattern") && !ctx.authService.registerForm.controls.mobile.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.authService.registerForm.controls.mobile.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.authService.registerForm.valid);
    } }, directives: [_shared_shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatSuffix"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatHint"]], styles: ["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\r\nalign-items: center;\r\n}\r\n[_nghost-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin: 100px 0px;\r\n  }\r\nbody[_ngcontent-%COMP%] {\r\n\tmin-height: 100vh;\r\n\tbackground-color: #e5e5e5;\r\n\tfont-family: 'Roboto', sans-serif;\r\n    margin: 40px 0;\r\n\r\n}\r\n.app-header[_ngcontent-%COMP%] {\r\n\tjustify-content: space-between;\r\n\tposition: fixed;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tz-index: 2;\r\n\tbox-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);\r\n}\r\n.main-wrapper[_ngcontent-%COMP%] {\r\n\theight: 100%;\r\n}\r\n.positronx[_ngcontent-%COMP%] {\r\n\ttext-decoration: none;\r\n\tcolor: #ffffff;\r\n}\r\n.box[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\ttop: 0;\r\n\topacity: 1;\r\n\tfloat: left;\r\n\tpadding: 60px 50px 40px 50px;\r\n\twidth: 100%;\r\n\tbackground: #fff;\r\n\tborder-radius: 10px;\r\n\ttransform: scale(1);\r\n\t-webkit-transform: scale(1);\r\n\t-ms-transform: scale(1);\r\n\tz-index: 5;\r\n\tmax-width: 330px;\r\n}\r\n.box.back[_ngcontent-%COMP%] {\r\n\ttransform: scale(.95);\r\n\t-webkit-transform: scale(.95);\r\n\t-ms-transform: scale(.95);\r\n\ttop: -20px;\r\n\topacity: .8;\r\n\tz-index: -1;\r\n}\r\n.box[_ngcontent-%COMP%]:before {\r\n\tcontent: \"\";\r\n\twidth: 100%;\r\n\theight: 30px;\r\n\tborder-radius: 10px;\r\n\tposition: absolute;\r\n\ttop: -10px;\r\n\tbackground: rgba(255, 255, 255, .6);\r\n\tleft: 0;\r\n\ttransform: scale(.95);\r\n\t-webkit-transform: scale(.95);\r\n\t-ms-transform: scale(.95);\r\n\tz-index: -1;\r\n}\r\n.main-wrapper[_ngcontent-%COMP%]   .example-form[_ngcontent-%COMP%] {\r\n\tmin-width: 100%;\r\n\tmax-width: 300px;\r\n\twidth: 100%;\r\n}\r\n.main-wrapper[_ngcontent-%COMP%]   .example-full-width[_ngcontent-%COMP%], .main-wrapper[_ngcontent-%COMP%]   .btn-block[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n}\r\n.main-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\r\n\ttext-align: center;\r\n\twidth: 100%;\r\n\tdisplay: block;\r\n\tfont-weight: 700;\r\n}\r\n.main-wrapper[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\r\n\tfont-size: 30px;\r\n\tmargin: 0;\r\n}\r\n.main-wrapper[_ngcontent-%COMP%]   .mat-card[_ngcontent-%COMP%] {\r\n\tpadding: 45px 70px 55px;\r\n}\r\n.main-wrapper[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%] {\r\n\tborder: 1px solid currentColor;\r\n\tline-height: 54px;\r\n\tbackground:#ffffff;\r\n}\r\n.main-wrapper[_ngcontent-%COMP%]   .mat-stroked-button[_ngcontent-%COMP%]:hover{\r\n\tborder: 1px solid currentColor;\r\n\tline-height: 54px;\r\n}\r\n.main-wrapper[_ngcontent-%COMP%]   .mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%] {\r\n\tpadding: 0.8375em 0;\r\n}\r\n.btn-class[_ngcontent-%COMP%]\r\n{\r\n\twidth:320px!important;\r\n\tmin-width: unset!important;\r\n}\r\n.hcenter[_ngcontent-%COMP%] {\r\n    display: table;\r\n    margin: 0 auto;\r\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsbUJBQW1CO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtFQUNuQjtBQUNGO0NBQ0MsaUJBQWlCO0NBQ2pCLHlCQUF5QjtDQUN6QixpQ0FBaUM7SUFDOUIsY0FBYzs7QUFFbEI7QUFFQTtDQUNDLDhCQUE4QjtDQUM5QixlQUFlO0NBQ2YsTUFBTTtDQUNOLE9BQU87Q0FDUCxRQUFRO0NBQ1IsVUFBVTtDQUNWLDhHQUE4RztBQUMvRztBQUVBO0NBQ0MsWUFBWTtBQUNiO0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsY0FBYztBQUNmO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsTUFBTTtDQUNOLFVBQVU7Q0FDVixXQUFXO0NBQ1gsNEJBQTRCO0NBQzVCLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQiwyQkFBMkI7Q0FDM0IsdUJBQXVCO0NBQ3ZCLFVBQVU7Q0FDVixnQkFBZ0I7QUFDakI7QUFFQTtDQUNDLHFCQUFxQjtDQUNyQiw2QkFBNkI7Q0FDN0IseUJBQXlCO0NBQ3pCLFVBQVU7Q0FDVixXQUFXO0NBQ1gsV0FBVztBQUNaO0FBR0E7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLFlBQVk7Q0FDWixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixtQ0FBbUM7Q0FDbkMsT0FBTztDQUNQLHFCQUFxQjtDQUNyQiw2QkFBNkI7Q0FDN0IseUJBQXlCO0NBQ3pCLFdBQVc7QUFDWjtBQUVBO0NBQ0MsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixXQUFXO0FBQ1o7QUFFQTs7Q0FFQyxXQUFXO0FBQ1o7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsY0FBYztDQUNkLGdCQUFnQjtBQUNqQjtBQUdBO0NBQ0MsZUFBZTtDQUNmLFNBQVM7QUFDVjtBQUVBO0NBQ0MsdUJBQXVCO0FBQ3hCO0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtBQUNuQjtBQUNBO0NBQ0MsOEJBQThCO0NBQzlCLGlCQUFpQjtBQUNsQjtBQUdBO0NBQ0MsbUJBQW1CO0FBQ3BCO0FBRUE7O0NBRUMscUJBQXFCO0NBQ3JCLDBCQUEwQjtBQUMzQjtBQUlBO0lBQ0ksY0FBYztJQUNkLGNBQWM7R0FDZiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHRtbCxcclxuYm9keSB7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMDBweCAwcHg7XHJcbiAgfVxyXG5ib2R5IHtcclxuXHRtaW4taGVpZ2h0OiAxMDB2aDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xyXG5cdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbjogNDBweCAwO1xyXG5cclxufVxyXG5cclxuLmFwcC1oZWFkZXIge1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0dG9wOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0cmlnaHQ6IDA7XHJcblx0ei1pbmRleDogMjtcclxuXHRib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIC4yKSwgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcclxufVxyXG5cclxuLm1haW4td3JhcHBlciB7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ucG9zaXRyb254IHtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5ib3gge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0b3A6IDA7XHJcblx0b3BhY2l0eTogMTtcclxuXHRmbG9hdDogbGVmdDtcclxuXHRwYWRkaW5nOiA2MHB4IDUwcHggNDBweCA1MHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHR0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuXHQtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuXHR6LWluZGV4OiA1O1xyXG5cdG1heC13aWR0aDogMzMwcHg7XHJcbn1cclxuXHJcbi5ib3guYmFjayB7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG5cdC1tcy10cmFuc2Zvcm06IHNjYWxlKC45NSk7XHJcblx0dG9wOiAtMjBweDtcclxuXHRvcGFjaXR5OiAuODtcclxuXHR6LWluZGV4OiAtMTtcclxufVxyXG5cclxuXHJcbi5ib3g6YmVmb3JlIHtcclxuXHRjb250ZW50OiBcIlwiO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMzBweDtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IC0xMHB4O1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjYpO1xyXG5cdGxlZnQ6IDA7XHJcblx0dHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG5cdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSguOTUpO1xyXG5cdC1tcy10cmFuc2Zvcm06IHNjYWxlKC45NSk7XHJcblx0ei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5tYWluLXdyYXBwZXIgLmV4YW1wbGUtZm9ybSB7XHJcblx0bWluLXdpZHRoOiAxMDAlO1xyXG5cdG1heC13aWR0aDogMzAwcHg7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYWluLXdyYXBwZXIgLmV4YW1wbGUtZnVsbC13aWR0aCxcclxuLm1haW4td3JhcHBlciAuYnRuLWJsb2NrIHtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1haW4td3JhcHBlciBtYXQtY2FyZC1oZWFkZXIge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRkaXNwbGF5OiBibG9jaztcclxuXHRmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5cclxuLm1haW4td3JhcHBlciBtYXQtY2FyZC1oZWFkZXIgbWF0LWNhcmQtdGl0bGUge1xyXG5cdGZvbnQtc2l6ZTogMzBweDtcclxuXHRtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5tYWluLXdyYXBwZXIgLm1hdC1jYXJkIHtcclxuXHRwYWRkaW5nOiA0NXB4IDcwcHggNTVweDtcclxufVxyXG5cclxuLm1haW4td3JhcHBlciAubWF0LXN0cm9rZWQtYnV0dG9uIHtcclxuXHRib3JkZXI6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XHJcblx0bGluZS1oZWlnaHQ6IDU0cHg7XHJcblx0YmFja2dyb3VuZDojZmZmZmZmO1xyXG59XHJcbi5tYWluLXdyYXBwZXIgLm1hdC1zdHJva2VkLWJ1dHRvbjpob3ZlcntcclxuXHRib3JkZXI6IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XHJcblx0bGluZS1oZWlnaHQ6IDU0cHg7XHJcbn1cclxuXHJcblxyXG4ubWFpbi13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xyXG5cdHBhZGRpbmc6IDAuODM3NWVtIDA7XHJcbn1cclxuXHRcclxuLmJ0bi1jbGFzc1xyXG57XHJcblx0d2lkdGg6MzIwcHghaW1wb3J0YW50O1xyXG5cdG1pbi13aWR0aDogdW5zZXQhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuICBcclxuLmhjZW50ZXIge1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgfVxyXG4gICAiXX0= */"] });


/***/ }),

/***/ "nod/":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared-components/nav/nav.component */ "NV/E");


class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 6, vars: 0, consts: [[1, "hcenter"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "404");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Not Found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_shared_components_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"]], styles: [".hcenter[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top: 40%; left: 45%; bottom: 0; right: 0;\r\n   }\r\n   h1[_ngcontent-%COMP%]{\r\n       font-size: 400%;\r\n   }\r\n   h3[_ngcontent-%COMP%]{\r\n       position: relative;\r\n       left: 2%;\r\n   }\r\n   body[_ngcontent-%COMP%]{\r\n       background: ghostwhite;\r\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFFBQVE7R0FDekM7R0FDQTtPQUNJLGVBQWU7R0FDbkI7R0FDQTtPQUNJLGtCQUFrQjtPQUNsQixRQUFRO0dBQ1o7R0FDQTtPQUNJLHNCQUFzQjtHQUMxQiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oY2VudGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDAlOyBsZWZ0OiA0NSU7IGJvdHRvbTogMDsgcmlnaHQ6IDA7XHJcbiAgIH1cclxuICAgaDF7XHJcbiAgICAgICBmb250LXNpemU6IDQwMCU7XHJcbiAgIH1cclxuICAgaDN7XHJcbiAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICBsZWZ0OiAyJTtcclxuICAgfVxyXG4gICBib2R5e1xyXG4gICAgICAgYmFja2dyb3VuZDogZ2hvc3R3aGl0ZTtcclxuICAgfVxyXG4gICAiXX0= */"] });


/***/ }),

/***/ "r0J8":
/*!*************************************************************************************************!*\
  !*** ./src/app/shared/shared-components/order-history/order-details/order-details.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: OrderDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsComponent", function() { return OrderDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/order.service */ "NuUg");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../nav/nav.component */ "NV/E");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function OrderDetailsComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const order_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.product_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.product_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](order_r1.product_qty);
} }
class OrderDetailsComponent {
    constructor(orderService) {
        this.orderService = orderService;
        this.orderDetail = [];
    }
    ngOnInit() {
        this.orderService.getOrderDetails(this.orderService.orderId).then(res => {
            this.orderDetail = res;
        });
        this.orders = this.orderService.orderList.filter(res => {
            if (res.customer_id != null)
                return res.customer_id == localStorage.getItem('Customer_id');
        });
        this.user = localStorage.getItem('user');
    }
}
OrderDetailsComponent.ɵfac = function OrderDetailsComponent_Factory(t) { return new (t || OrderDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderService"])); };
OrderDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderDetailsComponent, selectors: [["app-order-details"]], decls: 47, vars: 10, consts: [["href", "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css", "rel", "stylesheet", "integrity", "sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6", "crossorigin", "anonymous"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"], [1, "table"], [1, "thead-dark", "table-primary"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "row", "hcenter"], ["width", "50px"]], template: function OrderDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "link", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "thead", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Product Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Product Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, OrderDetailsComponent_tr_13_Template, 7, 3, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Customer Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Order Address: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Pincode: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Mobile: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Status: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Total: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.orderDetail);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.orderService.order.customer_email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.orderService.order.order_address, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.orderService.order.order_pincode, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.orderService.order.order_mobile, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.orderService.order.order_status, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](46, 7, ctx.orderService.order.order_total, "INR"), " ");
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CurrencyPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "svLH":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/customer.service.ts ***!
  \*****************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class CustomerService {
    constructor(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:52238/api/customer';
    }
    getCustomers() {
        return this.http.get(this.apiUrl + '/AllCustomerList').toPromise().then(res => this.list = res);
    }
    blockUser(id) {
        return this.http.post(this.apiUrl + '/blockcustomer/', id).toPromise().then(res => this.status = res);
    }
    unBlockUser(id) {
        return this.http.post(this.apiUrl + '/unblockcustomer/', id).toPromise().then(res => this.status = res);
    }
}
CustomerService.ɵfac = function CustomerService_Factory(t) { return new (t || CustomerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CustomerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CustomerService, factory: CustomerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "tENs":
/*!***********************************************************************************!*\
  !*** ./src/app/shared/shared-components/shopping-cart/shopping-cart.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ShoppingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingCartComponent", function() { return ShoppingCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-list/product-list.component */ "jF8f");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart/cart.component */ "j/Gr");



class ShoppingCartComponent {
    constructor() { }
    ngOnInit() {
    }
}
ShoppingCartComponent.ɵfac = function ShoppingCartComponent_Factory(t) { return new (t || ShoppingCartComponent)(); };
ShoppingCartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ShoppingCartComponent, selectors: [["app-shopping-cart"]], decls: 5, vars: 0, consts: [[1, "row"], [1, "col-md-10"], [1, "col-md-2"]], template: function ShoppingCartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-product-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__["ProductListComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaG9wcGluZy1jYXJ0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin/admin.component */ "TRGY");
/* harmony import */ var _admin_all_orders_all_orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/all-orders/all-orders.component */ "fmy9");
/* harmony import */ var _Authentication_auth_authguard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Authentication/auth/authguard.service */ "9A/8");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _Authentication_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Authentication/login/login.component */ "Fmfc");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found/not-found.component */ "nod/");
/* harmony import */ var _shared_shared_components_order_history_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared-components/order-history/order-details/order-details.component */ "r0J8");
/* harmony import */ var _shared_shared_components_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared-components/order-history/order-history.component */ "2bkT");
/* harmony import */ var _admin_product_addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/product/addproduct/addproduct.component */ "Vjiv");
/* harmony import */ var _admin_product_listproducts_listproducts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/product/listproducts/listproducts.component */ "MLpR");
/* harmony import */ var _admin_product_product_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/product/product/product.component */ "Up0N");
/* harmony import */ var _Authentication_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Authentication/register/register.component */ "mGKN");
/* harmony import */ var _shared_shared_components_shopping_cart_cart_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/shared-components/shopping-cart/cart/checkout/checkout.component */ "jMDE");
/* harmony import */ var _admin_all_orders_order_details_admin_order_details_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/all-orders/order-details-admin/order-details-admin.component */ "i8XR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");

















const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
    { path: 'login', component: _Authentication_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: _Authentication_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"], canActivate: [_Authentication_auth_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
    { path: 'listproducts', component: _admin_product_listproducts_listproducts_component__WEBPACK_IMPORTED_MODULE_10__["ListproductsComponent"], canActivate: [_Authentication_auth_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
    { path: 'addproduct', component: _admin_product_addproduct_addproduct_component__WEBPACK_IMPORTED_MODULE_9__["AddproductComponent"], canActivate: [_Authentication_auth_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
    { path: 'product', component: _admin_product_product_product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"], canActivate: [_Authentication_auth_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
    { path: 'orderhistory', component: _shared_shared_components_order_history_order_history_component__WEBPACK_IMPORTED_MODULE_8__["OrderHistoryComponent"], canActivate: [_Authentication_auth_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
    { path: 'checkout', component: _shared_shared_components_shopping_cart_cart_checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__["CheckoutComponent"], canActivate: [_Authentication_auth_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
    { path: 'orderdetails', component: _shared_shared_components_order_history_order_details_order_details_component__WEBPACK_IMPORTED_MODULE_7__["OrderDetailsComponent"], canActivate: [_Authentication_auth_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
    { path: 'orderdetailsadmin', component: _admin_all_orders_order_details_admin_order_details_admin_component__WEBPACK_IMPORTED_MODULE_14__["OrderDetailsAdminComponent"], canActivate: [_Authentication_auth_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
    { path: 'allorders', component: _admin_all_orders_all_orders_component__WEBPACK_IMPORTED_MODULE_2__["AllOrdersComponent"], canActivate: [_Authentication_auth_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]] },
    { path: "**", component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map