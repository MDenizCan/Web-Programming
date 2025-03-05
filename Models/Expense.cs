using System.ComponentModel.DataAnnotations;

namespace SpendSmart.Models
{
    public class Expense
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "You have add a value.")]
        public decimal Value { get; set; }

        public string? Description { get; set; } //"?" is to make it NULLable

        public string? Category { get; set; } //"?" is to make it NULLable

        public ExpenseStatus Status { get; set; } = ExpenseStatus.Pending; //default value 

        public DateTime Date { get; set; } = DateTime.Now; //DateTime.Now is the current date and time and set as the current value 
    }

    public enum ExpenseStatus
    {
        Pending, //which is the default value (0)
        Approved,
        Rejected
    }
}
