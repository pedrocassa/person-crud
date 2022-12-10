using desafio_rsm.Models;
using desafio_rsm.Data;
using desafio_rsm.Dtos;
using Microsoft.EntityFrameworkCore;

namespace desafio_rsm.Repository
{
    public class AddressRepository : IAddressRepository
    {
        private readonly ApplicationContext _context;

        public AddressRepository(ApplicationContext context)
        {
            _context = context;
        }

        public void CreateAddress(Address address)
        {
            _context.Addresses.Add(address);
        }

        public void DeleteAddress(Address address)
        {
            _context.Addresses.Remove(address);
        }

        public void UpdateAddress(Address address)
        {
            _context.Addresses.Update(address);
        }

        public async Task<Boolean> SaveChangesAsync()
        {
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<Address> FindAddressByInfo(CreateAddressDTO addressDto)
        {
            return await _context.Addresses.Where(ad => ad.Cep == addressDto.Cep && ad.Number == addressDto.Number && ad.Complement == addressDto.Complement).FirstOrDefaultAsync();
        }
    }
}