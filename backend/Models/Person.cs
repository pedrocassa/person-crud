using Microsoft.EntityFrameworkCore;

namespace desafio_rsm.Models
{
    public class Person
    {
        public long PersonId { get; set; }
        public string FullName { get; set; }
        public string Cpf { get; set; }
        public DateTime BirthDate { get; set; }

        public ICollection<Address> Addresses { get; set; }
    }
}