using AirportApplication.Configuration;
using AirportApplication.Models;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Options;
using System.Numerics;

namespace AirportApplication.Repositories
{
    public class AirportRepository_MSSQL : IAirportRepository
    {
        private readonly string _connectionDB_MSSQL;

        public AirportRepository_MSSQL(IOptions<DBConfiguration> configuration)
        {
            _connectionDB_MSSQL = configuration.Value.ConnectionDB_MSSQL;
        }

        public void CreateNewPlane(Airport plane)
        {
            using var connection = new SqlConnection(_connectionDB_MSSQL);
            using var command = new SqlCommand("[dbo].[CreatePlane]", connection);

            command.CommandType = System.Data.CommandType.StoredProcedure;

            command.Parameters.AddWithValue("@Model", plane.Model);
            command.Parameters.AddWithValue("@Year", plane.Year);
            command.Parameters.AddWithValue("@Country", plane.Country);
            command.Parameters.AddWithValue("@Capacity", plane.Capacity);
            command.Parameters.AddWithValue("@Image", plane.Image);
            command.Parameters.AddWithValue("@Type", plane.Type);
            command.Parameters.AddWithValue("@Captain", plane.Captain);

            connection.Open();
            command.ExecuteNonQuery();
            connection.Close();

            return;
        }

        public void DeletePlane(int id)
        {
            using var connection = new SqlConnection(_connectionDB_MSSQL);
            using var command = new SqlCommand("[dbo].[DeletePlane]", connection);

            command.CommandType = System.Data.CommandType.StoredProcedure;

            command.Parameters.AddWithValue("@id", id);

            connection.Open();
            int rowsAffected = command.ExecuteNonQuery();

            if (rowsAffected < 1)
            {
                throw new ArgumentException($"No planes with ID = {id}.");
            }

            connection.Close();
        }

        public List<Airport> GetAllPlanes()
        {
            using var connection = new SqlConnection(_connectionDB_MSSQL);
            using var command = new SqlCommand("[dbo].[GetAllPlanes]", connection);

            command.CommandType = System.Data.CommandType.StoredProcedure;

            connection.Open();
            using var reader = command.ExecuteReader();

            var lstPlanes = new List<Airport>();

            while (reader.Read())
            {
                var plane = new Airport
                {
                    Id = reader.GetInt32(0),
                    Model = reader.GetString(1),
                    Year = reader.GetInt32(2),
                    Country = reader.GetString(3),
                    Capacity = reader.GetInt32(4),
                    Image = reader.GetString(5),
                    Type = reader.GetString(6),
                    Captain = reader.GetString(7)
                };

                lstPlanes.Add(plane);
            }

            connection.Close();
            return lstPlanes;
        }

        public Airport? GetSinglePlane(int id)
        {
            using var connection = new SqlConnection(_connectionDB_MSSQL);
            using var command = new SqlCommand("[dbo].[GetPlaneById]", connection);

            command.CommandType = System.Data.CommandType.StoredProcedure;

            command.Parameters.AddWithValue("@id", id); 

            connection.Open();
            using var reader = command.ExecuteReader();

            Airport plane = null;

            if (reader.Read())
            {
                plane = new Airport
                {
                    Id = reader.GetInt32(0),
                    Model = reader.GetString(1),
                    Year = reader.GetInt32(2),
                    Country = reader.GetString(3),
                    Capacity = reader.GetInt32(4),
                    Image = reader.GetString(5),
                    Type = reader.GetString(6),
                    Captain = reader.GetString(7)
                };
            }
            connection.Close();
            return plane;
        }

        public void UpdatePlane(int id, Airport updatedPlane)
        {
            using var connection = new SqlConnection(_connectionDB_MSSQL);
            using var command = new SqlCommand("[dbo].[UpdatePlane]", connection);

            command.CommandType = System.Data.CommandType.StoredProcedure;

            command.Parameters.AddWithValue("@id", id);
            command.Parameters.AddWithValue("@Model", updatedPlane.Model);
            command.Parameters.AddWithValue("@Year", updatedPlane.Year);
            command.Parameters.AddWithValue("@Country", updatedPlane.Country);
            command.Parameters.AddWithValue("@Capacity", updatedPlane.Capacity);
            command.Parameters.AddWithValue("@Image", updatedPlane.Image);
            command.Parameters.AddWithValue("@Type", updatedPlane.Type);
            command.Parameters.AddWithValue("@Captain", updatedPlane.Captain);

            connection.Open();
            command.ExecuteNonQuery();
            connection.Close();

            return;
        }
    }
}
