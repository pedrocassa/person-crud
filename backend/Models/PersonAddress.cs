using System.ComponentModel.DataAnnotations.Schema;
namespace desafio_rsm.Models
{
    public class PersonAddress
    {
        [Column("person_id")]
        public long PersonId { get; set; }

        [Column("person")]
        public Person Person { get; set; }

        [Column("address_id")]
        public long AddressId { get; set; }

        [Column("address")]
        public Address Address { get; set; }
    }
}