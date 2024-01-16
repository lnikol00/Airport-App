/*
**********************************
* Author: Luka Nikolac
* Project Task: Airport - Phase 2
**********************************
* Description:
* 
*    CREATE - Add new plane
*    READ - Get all planes
*    READ - Get specific plane
*    DELETE - Delete plane
*
**********************************
*/

using AirportApplication.Controllers.DTO;
using AirportApplication.Models;
using AirportApplication.Filters;
using AirportApplication.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AirportApplication.Logic;

namespace AirportApplication.Controllers
{
    [LogFilter]
    [ApiController]
    [Route("api/[controller]")]
    public class AirportController : ControllerBase
    {
        private readonly IPlaneLogic _planeLogic;

        public AirportController(IPlaneLogic planeLogic)
        {
            _planeLogic = planeLogic;
        }

        [HttpPost]
        public ActionResult CreateNewPlane([FromBody] NewPlaneDTO plane) 
        {
            if (plane == null)
            {
                return BadRequest($"Incorect format!");

            }
           _planeLogic.CreateNewPlane(plane.ToModel());

            return Ok();
        }

        [HttpGet]
        public ActionResult<IEnumerable<PlaneInfoDTO>> GetAllPlanes()
        {
            var allPlanes = _planeLogic.GetAllPlanes().Select(x => PlaneInfoDTO.FromModel(x));
            return Ok(allPlanes);
        }

        [HttpGet("{id}")]
        public ActionResult<PlaneInfoDTO> GetSinglePlane(int id)
        {
            var plane = _planeLogic.GetSinglePlane(id);

            if(plane is null)
            {
                return NotFound($"Plane with id:{id} doesn't exist!");
            }
            else
            {
                return Ok(PlaneInfoDTO.FromModel(plane));
            }
        }

        [HttpDelete("{id}")]
        public ActionResult DeletePlane(int id)
        {
            var plane = _planeLogic.GetSinglePlane(id);
            if(plane is null)
            {
                return NotFound($"Plane with id:{id} doesn't exist!");
            }

            _planeLogic.DeletePlane(id);

            return Ok();
        }

        [HttpPut("{id}")]
        public ActionResult UpdatePlane(int id, [FromBody] NewPlaneDTO updatedPlane)
        {
            if (updatedPlane == null)
            {
                return BadRequest();
            }

            var existingPlane = _planeLogic.GetSinglePlane(id);
            if (existingPlane == null)
            {
                return NotFound();
            }

            _planeLogic.UpdatePlane(id, updatedPlane.ToModel());

            return Ok();
        }
    }
}
