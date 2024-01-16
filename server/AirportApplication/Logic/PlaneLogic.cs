using AirportApplication.Configuration;
using AirportApplication.Exceptions;
using AirportApplication.Models;
using AirportApplication.Repositories;
using Microsoft.Extensions.Options;
using System.Diagnostics.Metrics;
using System.Reflection;
using System.Text.RegularExpressions;

namespace AirportApplication.Logic
{
    public class PlaneLogic : IPlaneLogic
    {
        private readonly IAirportRepository _airportRepository;
        private readonly ValidationConfiguration _validation;


        public PlaneLogic(IAirportRepository airportRepository, IOptions<ValidationConfiguration> configuration)
        {
            _airportRepository = airportRepository;
            _validation = configuration.Value;
        }

        private void ValidateModel(string? model)
        {
            if (model == null)
            {
                throw new UserErrorMessage("Field can't be empty!");
            }

            if (model.Length > _validation.ModelMaxCharacters)
            {
                throw new UserErrorMessage("Exceeded maximum number of characters!");
            }

            if (!Regex.IsMatch(model, _validation.ModelRegex))
            {
                throw new UserErrorMessage("Invalid model format! First letter must be capital!");
            }
        }

        private void ValidateYear(int year)
        {

            if (year.ToString() is null)
            {
                throw new UserErrorMessage("Field can't be empty!");
            }

            if (year < 0)
            {
                throw new UserErrorMessage("Year can't be less then 0!");
            }

            if (year.ToString().Length != 4)
            {
                throw new UserErrorMessage("Year must be a 4-digit number!");
            }

            if (!Regex.IsMatch(year.ToString(), _validation.YearRegex))
            {
                throw new UserErrorMessage("Invalid year format! Year must begin with either number 1 or number 2!");
            }
        }

        private void ValidateCountry(string? country)
        {
            if (country == null)
            {
                throw new UserErrorMessage("Field can't be empty!");
            }

            if (country.Length > _validation.CountryMaxCharacters)
            {
                throw new UserErrorMessage("Exceeded maximum number of characters!");
            }

            if (!Regex.IsMatch(country, _validation.CountryRegex))
            {
                throw new UserErrorMessage("Invalid country format! Format must include only letters! First letter must be capital!");
            }
        }

        private void ValidateCapacity(int capacity)
        {
            if (capacity.ToString() is null)
            {
                throw new UserErrorMessage("Field can't be empty!");
            }

            if (capacity < 0 || capacity > 500)
            {
                throw new UserErrorMessage("Capacity can't be less then 0 or more then 500!");
            }

            if (!Regex.IsMatch(capacity.ToString(), _validation.CapacityRegex))
            {
                throw new UserErrorMessage("Invalid capacity format! Format must include only positive numbers!");
            }
        }

        private void ValidateType(string? type)
        {
            if (type == null)
            {
                throw new UserErrorMessage("Field can't be empty!");
            }

            if (!Regex.IsMatch(type,_validation.TypeRegex))
            {
                throw new UserErrorMessage("Invalid type format!");
            }
        }

        private void ValidateCaptain(string? captain)
        {
            if (captain == null)
            {
                throw new UserErrorMessage("Field can't be empty!");
            }

            if (captain.Length > _validation.CaptainMaxCharacters)
            {
                throw new UserErrorMessage("Exceeded maximum number of characters!");
            }

            if (!Regex.IsMatch(captain, _validation.CaptainRegex))
            {
                throw new UserErrorMessage("Invalid captain format. Format must include only letters! First letter must be capital!");
            }
        }

        public void CreateNewPlane(Airport? plane)
        {
            if (plane is null)
            {
                throw new UserErrorMessage("Cannot create a new plane. All fields must be entered correctly!");
            }

            plane.Id = -1;
            ValidateModel(plane.Model);
            ValidateYear(plane.Year);
            ValidateCountry(plane.Country);
            ValidateCapacity(plane.Capacity);
            ValidateType(plane.Type);
            ValidateCaptain(plane.Captain);

            _airportRepository.CreateNewPlane(plane);
        }

        public void UpdatePlane(int id, Airport? plane)
        {
            if (plane is null)
            {
                throw new UserErrorMessage("Cannot update plane. All fields must be entered correctly!");
            }

            plane.Id = -1;
            ValidateModel(plane.Model);
            ValidateYear(plane.Year);
            ValidateCountry(plane.Country);
            ValidateCapacity(plane.Capacity);
            ValidateType(plane.Type);
            ValidateCaptain(plane.Captain);

            _airportRepository.UpdatePlane(id, plane);
        }

        public void DeletePlane(int id)
        {
            _airportRepository.DeletePlane(id);
        }

        public Airport? GetSinglePlane(int id)
        {
            return _airportRepository.GetSinglePlane(id);
        }

        public IEnumerable<Airport> GetAllPlanes()
        {
            return _airportRepository.GetAllPlanes();
        }
    }
}
