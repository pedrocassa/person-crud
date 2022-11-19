using Microsoft.EntityFrameworkCore;
using desafio_rsm.Models;

namespace desafio_rsm.Data
{
    public class PersonContext : DbContext
    {
        public PersonContext(DbContextOptions<PersonContext> options) : base(options)
        {
        }

        public DbSet<Person> People { get; set; }
    }
}