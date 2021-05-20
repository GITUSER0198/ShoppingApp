﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using _01_DataAccess;

namespace _01_DataAccess.Migrations
{
    [DbContext(typeof(ShoppingAppEntities))]
    [Migration("20210520164328_init")]
    partial class init
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.14-servicing-32113")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("_01_DataAccess.Customer", b =>
                {
                    b.Property<int>("Customer_id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Customer_email")
                        .IsRequired();

                    b.Property<string>("Customer_firstname")
                        .IsRequired();

                    b.Property<string>("Customer_lastname")
                        .IsRequired();

                    b.Property<string>("Customer_mobile")
                        .IsRequired()
                        .HasMaxLength(10);

                    b.Property<string>("Customer_password")
                        .IsRequired();

                    b.Property<bool>("Customer_status");

                    b.HasKey("Customer_id");

                    b.ToTable("Customers");

                    b.HasData(
                        new { Customer_id = 1, Customer_email = "admin@gmail.com", Customer_firstname = "Admin", Customer_lastname = "Admin", Customer_mobile = "0000000000", Customer_password = "ZxsIB827BbxDIbH1eI9bYA==", Customer_status = true },
                        new { Customer_id = 2, Customer_email = "dummyuser1@gmail.com", Customer_firstname = "User", Customer_lastname = "User", Customer_mobile = "0000000000", Customer_password = "Gmg2qL6wsnYTPyj2MyzYhwDQVNgcxwoqGagqw1G1GqQ=", Customer_status = true },
                        new { Customer_id = 3, Customer_email = "dummyuser2@gmail.com", Customer_firstname = "User", Customer_lastname = "User", Customer_mobile = "0000000000", Customer_password = "Gmg2qL6wsnYTPyj2MyzYhwDQVNgcxwoqGagqw1G1GqQ=", Customer_status = true },
                        new { Customer_id = 4, Customer_email = "user1@gmail.com", Customer_firstname = "User", Customer_lastname = "User", Customer_mobile = "0000000000", Customer_password = "Gmg2qL6wsnYTPyj2MyzYhwDQVNgcxwoqGagqw1G1GqQ=", Customer_status = true }
                    );
                });

            modelBuilder.Entity("_01_DataAccess.Order", b =>
                {
                    b.Property<int>("Order_id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("Customer_id");

                    b.Property<string>("Order_address");

                    b.Property<DateTime?>("Order_date");

                    b.Property<string>("Order_mobile");

                    b.Property<string>("Order_pincode");

                    b.Property<string>("Order_status");

                    b.Property<int?>("Order_total");

                    b.HasKey("Order_id");

                    b.HasIndex("Customer_id");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("_01_DataAccess.OrderProduct", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int?>("OrderID");

                    b.Property<int?>("Product_id");

                    b.Property<string>("Product_name");

                    b.Property<int?>("Product_qty");

                    b.HasKey("ID");

                    b.HasIndex("OrderID");

                    b.HasIndex("Product_id");

                    b.ToTable("OrderProducts");
                });

            modelBuilder.Entity("_01_DataAccess.Product", b =>
                {
                    b.Property<int>("Product_id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<byte[]>("Product_Image");

                    b.Property<string>("Product_Image_Name");

                    b.Property<string>("Product_category");

                    b.Property<string>("Product_description");

                    b.Property<string>("Product_name");

                    b.Property<double?>("Product_price");

                    b.Property<int?>("Product_quantity");

                    b.HasKey("Product_id");

                    b.ToTable("Products");

                    b.HasData(
                        new { Product_id = 1, Product_category = "Headphones", Product_name = "Dummy one", Product_price = 499.0, Product_quantity = 10 },
                        new { Product_id = 2, Product_category = "Headphones", Product_name = "Dummy two", Product_price = 899.0, Product_quantity = 10 }
                    );
                });

            modelBuilder.Entity("_01_DataAccess.Order", b =>
                {
                    b.HasOne("_01_DataAccess.Customer", "Customer")
                        .WithMany("Orders")
                        .HasForeignKey("Customer_id");
                });

            modelBuilder.Entity("_01_DataAccess.OrderProduct", b =>
                {
                    b.HasOne("_01_DataAccess.Order", "Order")
                        .WithMany("OrderProducts")
                        .HasForeignKey("OrderID");

                    b.HasOne("_01_DataAccess.Product")
                        .WithMany("OrderProducts")
                        .HasForeignKey("Product_id");
                });
#pragma warning restore 612, 618
        }
    }
}