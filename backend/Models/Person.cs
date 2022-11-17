using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace desafio_rsm.Models
{
    public class Person
    {
        private long Id { get; set; }
        public string FullName { get; set; }
        public string Cpf { get; set; }
        public string Cnpj { get; set; }
        public DateTime BirthDate { get; set; }
        public DateTime CnpjOpenningDate { get; set; }


        public Person (string fullName, string cpf, string cnpj, DateTime birthDate, DateTime cnpjOpenningDate) {
            FullName = fullName;
            Cpf = cpf;
            Cnpj = cnpj;
            BirthDate = birthDate;
            CnpjOpenningDate = cnpjOpenningDate;
        }
    }
}   