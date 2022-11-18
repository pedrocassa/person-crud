using Microsoft.AspNetCore.Mvc;

namespace desafio_rsm.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PersonController : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            return "OK";
        }
    }
}