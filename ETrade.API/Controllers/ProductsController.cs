using System;
using ETrade.API.Data;
using ETrade.API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ETrade.API.Controllers
{
	[ApiController]
	[Route("/api/[controller]")]
	public class ProductsController : ControllerBase
	{
		private readonly StoreContext _context;

        public ProductsController(StoreContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Product>>> GetProducts()
        {
            var products = await _context.Products.ToListAsync();

            return Ok(products);
        }


    }
}

