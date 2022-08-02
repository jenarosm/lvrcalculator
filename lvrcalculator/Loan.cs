using System;

namespace lvrapi
{
    public class Loan
    {
        public double PropertyValue { get; set; }
        public double LoanAmmount { get; set; }
        public double LVR => LoanAmmount/PropertyValue;

    }
}
