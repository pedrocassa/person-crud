using desafio_rsm.Models;
using desafio_rsm.Dtos;

namespace desafio_rsm.Repository
{
    public interface IAddressRepository
    {
        Task<Address> FindAddressByInfo(CreateAddressDTO addressDTO);
        Task<Boolean> SaveChangesAsync();
        void CreateAddress(Address address);
        void UpdateAddress(Address address);
        void DeleteAddress(Address address);
    }
}