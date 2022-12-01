using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace desafio_rsm.Dtos
{
    public class CreateAddressDTO
    {
        public string Street { get; set; }

        public string Neighborhood { get; set; }

        public string City { get; set; }

        public string Uf { get; set; }

        public string? Complement { get; set; }

        public string Number { get; set; }

        public string Cep { get; set; }

    }
}