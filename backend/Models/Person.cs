using System.ComponentModel.DataAnnotations.Schema;

namespace desafio_rsm.Models
{
    public class Person : BaseEntity
    {
        [Column("person_id")]
        public long PersonId { get; set; }

        [Column("name")]
        public string Name { get; set; }

        [Column("document")]
        public string Document { get; set; }

        [Column("reference_date")]
        public DateTime ReferenceDate { get; set; }

        [Column("addresses")]
        public virtual ICollection<Address> Addresses { get; set; }
    }
}