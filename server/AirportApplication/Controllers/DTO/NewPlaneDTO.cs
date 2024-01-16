using AirportApplication.Models;

namespace AirportApplication.Controllers.DTO
{
    public class NewPlaneDTO
    {
        public string? Model { get; set; }
        public int Year { get; set;}
        public string? Country { get; set;}
        public int Capacity { get; set;}
        public string? Image { get; set;}
        public string? Type { get; set;}
        public string? Captain { get; set;}

        public Airport ToModel()
        {
            return new Airport
            {
                Id = -1,
                Model = Model,
                Year = Year,
                Country = Country,
                Capacity = Capacity,
                Image = Image,
                Type = Type,
                Captain = Captain,
            };
        }
    }
}
