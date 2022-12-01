using System.ComponentModel.DataAnnotations.Schema;

namespace desafio_rsm.Models
{
    public class BaseEntity
    {
        [Column("active")]
        public Boolean Active { get; set; }

        [Column("created_at")]
        public DateTime? CreatedAt { get; set; }

        [Column("updated_at")]
        public DateTime? UpdatedAt { get; set; }

        [Column("deleted_at")]
        public DateTime? DeletedAt { get; set; }
    }
}