using desafio_rsm.Models;

namespace desafio_rsm.Repository
{
    public interface IPersonRepository
    {
        Task<IEnumerable<Person>> GetPeople(Person person);
        Task<Person> GetPerson(long id);
        void CreatePerson(Person person);
        void UpdatePerson(Person person);
        void DeletePerson(Person person);
    }
}