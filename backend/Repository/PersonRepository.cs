using desafio_rsm.Models;
using desafio_rsm.Data;
using desafio_rsm.Dtos;

using Microsoft.EntityFrameworkCore;

namespace desafio_rsm.Repository
{
    public class PersonRepository : IPersonRepository
    {
        private readonly ApplicationContext _context;

        public PersonRepository(ApplicationContext context)
        {
            _context = context;
        }

        public void CreatePerson(Person person)
        {
            _context.Add(person);
        }

        public void DeletePerson(Person person)
        {
            _context.Remove(person);
        }

        public void UpdatePerson(Person person)
        {
            _context.Update(person);
        }

        public async Task<IEnumerable<Person>> GetPeople()
        {
            return await _context.People.ToListAsync();
        }

        public async Task<IEnumerable<Person>> GetPeoplePaginated(PaginationFilter filter)
        {
            return await _context.People.Skip((filter.PageNumber - 1) * filter.PageSize).Take(filter.PageSize).ToListAsync();
        }

        public async Task<Person> GetPerson(long id)
        {
            return await _context.People.Where(p => p.PersonId == id).FirstOrDefaultAsync();
        }

        public async Task<Boolean> FindDocument(string document)
        {
            return await _context.People.AnyAsync(p => p.Document == document);
        }

        public async Task<int> CountPeople()
        {
            return await _context.People.CountAsync();
        }

        public async Task<Boolean> SaveChangesAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}