namespace desafio_rsm.Models
{
    public class Person
    {
        public long Id { get; set; }
        public string FullName { get; set; }
        public string Cpf { get; set; }
        public string Cnpj { get; set; }
        public DateTime BirthDate { get; set; }
        public DateTime CnpjOpenningDate { get; set; }
    }
}