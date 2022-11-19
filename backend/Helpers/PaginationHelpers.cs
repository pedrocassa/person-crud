using desafio_rsm.Wrappers;
using desafio_rsm.Dtos;

namespace desafio_rsm.Helpers
{
    public class PaginationHelpers
    {
        public static PaginatedResponse<IEnumerable<T>> CreatePaginatedResponse<T>(IEnumerable<T> paginatedData, PaginationFilter validFilter, int totalRecords)
        {

            var response = new PaginatedResponse<IEnumerable<T>>(paginatedData, validFilter.PageNumber, validFilter.PageSize);

            var totalPages = ((double)totalRecords / (double)validFilter.PageSize);

            int roundedTotalPages = Convert.ToInt32(Math.Ceiling(totalPages));

            response.TotalPages = roundedTotalPages;
            response.TotalRecords = totalRecords;

            return response;
        }
    }
}