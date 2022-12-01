using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace desafio_rsm.Models
{
    public class PersonAddress
    {
        public long PersonId { get; set; }
        public Person Person { get; set; }

        public long AddressId { get; set; }
        public Address Address { get; set; }
    }
}