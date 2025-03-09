using Microsoft.AspNetCore.Mvc;

namespace chrisml.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WebApiController : ControllerBase
    {
        private readonly ILogger<WebApiController> _logger;

        public WebApiController(ILogger<WebApiController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetData")]
        public IEnumerable<string> Get()
        {
            return ["TestValueOne", "TestValueTwo", "TestValueThree"];
        }
    }
}
