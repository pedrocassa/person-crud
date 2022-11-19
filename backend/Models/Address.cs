namespace desafio_rsm.Models
{
    public class Address
    {
        public long AddressId { get; set; }
        public string Street { get; set; }
        public string Neighborhood { get; set; }
        public string City { get; set; }
        public string Uf { get; set; }
        public string? Complement { get; set; }
        public string Number { get; set; }
        public string Cep { get; set; }


        public virtual ICollection<Person> People { get; set; }
    }
}