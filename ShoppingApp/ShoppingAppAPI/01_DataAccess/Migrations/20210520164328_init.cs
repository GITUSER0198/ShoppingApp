using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace _01_DataAccess.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    Customer_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Customer_email = table.Column<string>(nullable: false),
                    Customer_password = table.Column<string>(nullable: false),
                    Customer_firstname = table.Column<string>(nullable: false),
                    Customer_lastname = table.Column<string>(nullable: false),
                    Customer_mobile = table.Column<string>(maxLength: 10, nullable: false),
                    Customer_status = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.Customer_id);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Product_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Product_name = table.Column<string>(nullable: true),
                    Product_category = table.Column<string>(nullable: true),
                    Product_quantity = table.Column<int>(nullable: true),
                    Product_price = table.Column<double>(nullable: true),
                    Product_Image_Name = table.Column<string>(nullable: true),
                    Product_Image = table.Column<byte[]>(nullable: true),
                    Product_description = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Product_id);
                });

            migrationBuilder.CreateTable(
                name: "Orders",
                columns: table => new
                {
                    Order_id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Order_date = table.Column<DateTime>(nullable: true),
                    Order_total = table.Column<int>(nullable: true),
                    Customer_id = table.Column<int>(nullable: true),
                    Order_status = table.Column<string>(nullable: true),
                    Order_address = table.Column<string>(nullable: true),
                    Order_mobile = table.Column<string>(nullable: true),
                    Order_pincode = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Orders", x => x.Order_id);
                    table.ForeignKey(
                        name: "FK_Orders_Customers_Customer_id",
                        column: x => x.Customer_id,
                        principalTable: "Customers",
                        principalColumn: "Customer_id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "OrderProducts",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    OrderID = table.Column<int>(nullable: true),
                    Product_id = table.Column<int>(nullable: true),
                    Product_qty = table.Column<int>(nullable: true),
                    Product_name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderProducts", x => x.ID);
                    table.ForeignKey(
                        name: "FK_OrderProducts_Orders_OrderID",
                        column: x => x.OrderID,
                        principalTable: "Orders",
                        principalColumn: "Order_id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_OrderProducts_Products_Product_id",
                        column: x => x.Product_id,
                        principalTable: "Products",
                        principalColumn: "Product_id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "Customers",
                columns: new[] { "Customer_id", "Customer_email", "Customer_firstname", "Customer_lastname", "Customer_mobile", "Customer_password", "Customer_status" },
                values: new object[,]
                {
                    { 1, "admin@gmail.com", "Admin", "Admin", "0000000000", "ZxsIB827BbxDIbH1eI9bYA==", true },
                    { 2, "dummyuser1@gmail.com", "User", "User", "0000000000", "Gmg2qL6wsnYTPyj2MyzYhwDQVNgcxwoqGagqw1G1GqQ=", true },
                    { 3, "dummyuser2@gmail.com", "User", "User", "0000000000", "Gmg2qL6wsnYTPyj2MyzYhwDQVNgcxwoqGagqw1G1GqQ=", true },
                    { 4, "user1@gmail.com", "User", "User", "0000000000", "Gmg2qL6wsnYTPyj2MyzYhwDQVNgcxwoqGagqw1G1GqQ=", true }
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Product_id", "Product_Image", "Product_Image_Name", "Product_category", "Product_description", "Product_name", "Product_price", "Product_quantity" },
                values: new object[,]
                {
                    { 1, null, null, "Headphones", null, "Dummy one", 499.0, 10 },
                    { 2, null, null, "Headphones", null, "Dummy two", 899.0, 10 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_OrderProducts_OrderID",
                table: "OrderProducts",
                column: "OrderID");

            migrationBuilder.CreateIndex(
                name: "IX_OrderProducts_Product_id",
                table: "OrderProducts",
                column: "Product_id");

            migrationBuilder.CreateIndex(
                name: "IX_Orders_Customer_id",
                table: "Orders",
                column: "Customer_id");

            #region Customer Procedures
            var getCustomer = @"CREATE PROCEDURE [dbo].[GetCustomer]
                    @Customer_id INT
                AS
                BEGIN
                    SET NOCOUNT ON;
                SELECT [Customer_id]
               ,[Customer_email]
               ,[Customer_password]
               ,[Customer_firstname]
               ,[Customer_lastname]
               ,[Customer_mobile]
               ,[Customer_status]
                FROM [ShoppingApp].[dbo].[Customers] WHERE Customer_id = @Customer_id 
                END";

            migrationBuilder.Sql(getCustomer);

            var getCustomers = @"CREATE PROCEDURE [dbo].[GetCustomers]
                AS
                BEGIN
                SET NOCOUNT ON;
                SELECT [Customer_id]
               ,[Customer_email]
               ,[Customer_password]
               ,[Customer_firstname]
               ,[Customer_lastname]
               ,[Customer_mobile]
               ,[Customer_status]
                FROM [ShoppingApp].[dbo].[Customers]
                END";

            migrationBuilder.Sql(getCustomers);

            var insertCustomer = @"
                CREATE PROCEDURE [dbo].[InsertCustomer]
                @Customer_email NVARCHAR(MAX),
                @Customer_password NVARCHAR(MAX),
                @Customer_firstname NVARCHAR(MAX),
                @Customer_lastname NVARCHAR(MAX),
                @Customer_mobile NVARCHAR(MAX),
                @Customer_status BIT
                AS 
                BEGIN
                INSERT INTO [dbo].[Customers](Customer_email,Customer_password,Customer_firstname,
                 Customer_lastname,Customer_mobile,Customer_status)
                VALUES( @Customer_email,@Customer_password, @Customer_firstname,@Customer_lastname
                    ,@Customer_mobile,@Customer_status)
                END 
                GO
            ";
            migrationBuilder.Sql(insertCustomer);

            #endregion


            #region Orders
            var getOrders = @"
            	CREATE PROCEDURE [dbo].[GetOrders]
		        AS
		        BEGIN
		        SET NOCOUNT ON;
		        SELECT 
		         [Order_id]
		        ,[Order_date]
		        ,[Order_total]
		        ,[Customer_id]
		        ,[Order_status]
		        ,[Order_address]
		        ,[Order_mobile]
		        ,[Order_pincode]
	          FROM [ShoppingApp].[dbo].[Orders]
	          END
                ";

            migrationBuilder.Sql(getOrders);


            #endregion

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "OrderProducts");

            migrationBuilder.DropTable(
                name: "Orders");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Customers");
        }
    }
}
