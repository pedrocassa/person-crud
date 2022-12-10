using Microsoft.EntityFrameworkCore;
using desafio_rsm.Models;

namespace desafio_rsm.Data
{
    public class ApplicationContext : DbContext
    {
        public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
        {
        }

        public DbSet<Person> People { get; set; }
        public DbSet<Address> Addresses { get; set; }

        public override int SaveChanges()
        {
            AddTimestamps();
            return base.SaveChanges();
        }

        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = new CancellationToken())
        {
            AddTimestamps();
            return await base.SaveChangesAsync(cancellationToken);
        }

        private void AddTimestamps()
        {
            var entities = ChangeTracker.Entries()
                .Where(x => x.Entity is BaseEntity && (x.State == EntityState.Added || x.State == EntityState.Modified));

            foreach (var entity in entities)
            {
                var now = DateTime.UtcNow;

                if (entity.State == EntityState.Added)
                {
                    ((BaseEntity)entity.Entity).CreatedAt = now;
                }
                ((BaseEntity)entity.Entity).UpdatedAt = now;
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var personMb = modelBuilder.Entity<Person>();

            personMb.Property(p => p.PersonId).ValueGeneratedOnAdd();
            personMb.HasKey(p => p.PersonId);

            personMb.HasMany(p => p.Addresses).WithMany(p => p.People).UsingEntity<Dictionary<string, object>>(
                "PersonAddress",
                j => j
                    .HasOne<Address>()
                    .WithMany()
                    .HasForeignKey("AddressId"),
                j => j
                    .HasOne<Person>()
                    .WithMany()
                    .HasForeignKey("PersonId")
            );

            var addressMb = modelBuilder.Entity<Address>();

            addressMb.Property(a => a.AddressId).ValueGeneratedOnAdd();
            addressMb.HasKey(a => a.AddressId);
            addressMb.Property(a => a.CreatedAt).ValueGeneratedOnAdd();
        }
    }
}