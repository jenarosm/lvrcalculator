using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace lvrapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoanController : ControllerBase
    {

        [HttpGet]
        public Loan Get( double value, double ammount)
        {
            //Loan loan = new Loan { LoanAmmount = ammount, PropertyValue = value };
            //return loan.LVR;
            return new Loan { LoanAmmount = ammount, PropertyValue = value };
        }

        [HttpPost]
        public double Post(Loan loan)
        {
            return loan.LVR;
        }

    }
}
