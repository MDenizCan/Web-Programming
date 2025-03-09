using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using SpendSmart.Models;

namespace SpendSmart.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        private readonly SpendSmartDbContext _context;//Add the SpendSmartDbContext to the HomeController

        public HomeController(ILogger<HomeController> logger, SpendSmartDbContext context)//Add the SpendSmartDbContext to the HomeController constructor
        {
            _logger = logger;//Assign the logger to the _logger field 
            _context = context;//Assign the context to the _context field
        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult Expenses()
        {
            var expenses = _context.Expenses.ToList();//Get all the expenses from the database and store them in a list
            return View(expenses);
        }
        public IActionResult CreateEditExpense()
        {
            return View();
        }
        public IActionResult CreateEditExpenseForm(Expense model)
        {
            _context.Expenses.Add(model);//Add the new expense to the database

            _context.SaveChanges();//Save the changes to the database

            return RedirectToAction("Expenses");//Redirect to the Expenses action
        }
        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
