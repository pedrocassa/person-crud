using System.ComponentModel.DataAnnotations.Schema;

namespace desafio_rsm.Models
{
    public class Address : BaseEntity
    {
        [Column("address_id")]
        public long AddressId { get; set; }

        [Column("street")]
        public string Street { get; set; }

        [Column("neighborhood")]
        public string Neighborhood { get; set; }

        [Column("city")]
        public string City { get; set; }

        [Column("uf")]
        public string Uf { get; set; }

        [Column("complement")]
        public string? Complement { get; set; }

        [Column("number")]
        public string Number { get; set; }

        [Column("cep")]
        public string Cep { get; set; }

        [Column("people")]
        public virtual ICollection<Person> People { get; set; }
    }
}