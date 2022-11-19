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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var personMb = modelBuilder.Entity<Person>();

            personMb.Property(p => p.PersonId).HasColumnName("id").ValueGeneratedOnAdd();
            personMb.HasKey(p => p.PersonId);
            personMb.Property(p => p.Cpf).HasColumnName("cpf").IsRequired();
            personMb.Property(p => p.FullName).HasColumnName("fullname");
            personMb.Property(p => p.BirthDate).HasColumnName("birth_date");


            personMb.HasMany(p => p.Addresses).WithMany(p => p.People).UsingEntity<Dictionary<string, object>>(
                "PersonAddress",
                j => j
                    .HasOne<Address>()
                    .WithMany()
                    .HasForeignKey("AddressId")
                    .HasConstraintName("FK_PersonAddress_Addresses_AddressId")
                    .OnDelete(DeleteBehavior.Cascade),
                j => j
                    .HasOne<Person>()
                    .WithMany()
                    .HasForeignKey("PersonId")
                    .HasConstraintName("FK_PersonAddress_People_PersonId")
                    .OnDelete(DeleteBehavior.ClientCascade)
            );

            var addressMb = modelBuilder.Entity<Address>();

            addressMb.Property(a => a.AddressId).HasColumnName("id").ValueGeneratedOnAdd();
            addressMb.HasKey(a => a.AddressId);
            addressMb.Property(a => a.Cep).HasColumnName("cep").IsRequired();
            addressMb.Property(a => a.Street).HasColumnName("street").IsRequired();
            addressMb.Property(a => a.Number).HasColumnName("number").IsRequired();
            addressMb.Property(a => a.Complement).HasColumnName("complement");
            addressMb.Property(a => a.Neighborhood).HasColumnName("neighborhood").IsRequired();
            addressMb.Property(a => a.City).HasColumnName("city").IsRequired();
            addressMb.Property(a => a.Uf).HasColumnName("uf").IsRequired();
        }
    }
}