using AirportApplication.Models;

namespace AirportApplication.Controllers.DTO
{
    public class PlaneInfoDTO
    {
        public int Id { get; set; }
        public string? Model { get; set; }
        public int Year {  get; set; }
        public string? Country { get; set; }
        public int Capacity { get; set; }   
        public string? Image { get; set; }
        public string? Type { get; set; }
        public string? Captain { get; set; }

        public static PlaneInfoDTO FromModel(Airport model)
        {
            return new PlaneInfoDTO
            {
                Id = model.Id,
                Model = model.Model,
                Year = model.Year,
                Country = model.Country,
                Capacity = model.Capacity,
                Image = model.Image,
                Type = model.Type,
                Captain = model.Captain
            };
        }

    }
}
