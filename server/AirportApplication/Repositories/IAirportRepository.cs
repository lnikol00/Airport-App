using AirportApplication.Models;

namespace AirportApplication.Repositories
{
    public interface IAirportRepository
    {
        void CreateNewPlane(Airport plane);
        void DeletePlane(int id);
        List<Airport> GetAllPlanes();
        Airport? GetSinglePlane(int id);
        void UpdatePlane(int id, Airport updatedPlane);
    }
}