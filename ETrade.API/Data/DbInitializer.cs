using System;
using ETrade.API.Entities;

namespace ETrade.API.Data
{
	public static class DbInitializer
	{
		public static void Initializer(StoreContext context)
		{
			if (context.Products.Any()) return;

            var products = new List<Product>()
            {
                        new Product
                {
                    Name = "Realme GT6",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 20000,
                    PictureUrl = "/images/products/1.webp",
                    Brand = "Realme",
                    Type = "Phone",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Realme Note 60 4GB+128GB",
                    Description = "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
                    Price = 15000,
                    PictureUrl = "/images/products/2.webp",
                    Brand = "Realme",
                    Type = "Phone",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Realme 12 Lite 6GB+128GB",
                    Description =
                        "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    Price = 18000,
                    PictureUrl = "/images/products/3.webp",
                    Brand = "Realme",
                    Type = "Phone",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "iPhone 15 128 Gb",
                    Description =
                        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
                    Price = 30000,
                    PictureUrl = "/images/products/4.webp",
                    Brand = "Iphone",
                    Type = "Phone",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "iPhone 16 Pro Max 256 GB",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 25000,
                    PictureUrl = "/images/products/5.webp",
                    Brand = "Iphone",
                    Type = "Phone",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Xiaomi Redmi Note 13 Pro 12GB/512GB",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 12000,
                    PictureUrl = "/images/products/6.webp",
                    Brand = "Xiaomi",
                    Type = "Phone",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Xiaomi Redmi 13 8GB+256GB",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 1000,
                    PictureUrl = "/images/products/7.webp",
                    Brand = "Xiaomi",
                    Type = "Phone",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Samsung Galaxy A06 4/128 Gb",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 8000,
                    PictureUrl = "/images/products/8.webp",
                    Brand = "Samsung",
                    Type = "Phone",
                    QuantityInStock = 100
                }
            };

            context.Products.AddRange(products);

            context.SaveChanges();

            
		}
	}
}

