using System;
using ETrade.API.Entities;
using Microsoft.EntityFrameworkCore;

namespace ETrade.API.Data
{
	public class StoreContext : DbContext
	{
		public StoreContext(DbContextOptions<StoreContext> options):base(options)
		{
		}
		public DbSet<Product> Products { get; set; }
	}
}

	