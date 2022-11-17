using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace desafio_rsm.Models
{
    public class Address
    {
        private long Id { get; set; }
        public string Street { get; set; }
        public string Neighborhood { get; set; }
        public string City { get; set; }
        public string Uf { get; set; }
        public string Complement { get; set; }
        public string Number { get; set; }

        public Address (string street, string neighborhood, string city, string uf, string complement, string number) {
            Street = street;
            Neighborhood = neighborhood;
            City = city;
            Uf = uf;
            Complement = complement;
            Number = number;
        }
    }
}