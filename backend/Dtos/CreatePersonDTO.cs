using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace desafio_rsm.Dtos
{
    public class CreatePersonDTO
    {
        public string Name { get; set; }

        public string Document { get; set; }

        public DateTime ReferenceDate { get; set; }

        public List<CreateAddressDTO> Addresses { get; set; }
    }
}