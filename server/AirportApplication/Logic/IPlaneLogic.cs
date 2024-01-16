using AirportApplication.Models;

namespace AirportApplication.Logic
{
    public interface IPlaneLogic
    {
        void CreateNewPlane(Airport? plane);
        void DeletePlane(int id);
        IEnumerable<Airport> GetAllPlanes();
        Airport? GetSinglePlane(int id);
        void UpdatePlane(int id, Airport? plane);
    }
}