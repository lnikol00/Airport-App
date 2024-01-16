using AirportApplication.Configuration;
using AirportApplication.Models;
using Microsoft.Data.Sqlite;
using Microsoft.Extensions.Options;
using System.Data;

namespace AirportApplication.Repositories
{
    public class AirportRepository_SQL : IAirportRepository
    {
        private readonly string _connectionDB;

        public AirportRepository_SQL(IOptions<DBConfiguration> configuration)
        {
            _connectionDB = configuration.Value.ConnectionDB;
        }

        public void CreateNewPlane(Airport plane)
        {
            using var connection = new SqliteConnection(_connectionDB);
            connection.Open();

            var command = connection.CreateCommand();
            command.CommandText =
            @"
                INSERT INTO Planes (Model, Year, Country, Capacity, Image, Type, Captain)
                VALUES ($model, $year, $country, $capacity, $image, $type, $captain)";

            command.Parameters.AddWithValue("$model", plane.Model);
            command.Parameters.AddWithValue("$year", plane.Year);
            command.Parameters.AddWithValue("$country", plane.Country);
            command.Parameters.AddWithValue("$capacity", plane.Capacity);
            command.Parameters.AddWithValue("$image", plane.Image);
            command.Parameters.AddWithValue("$type", plane.Type);
            command.Parameters.AddWithValue("$captain", plane.Captain);

            int rowsAffected = command.ExecuteNonQuery();

            if (rowsAffected < 1)
            {
                throw new ArgumentException("Could not insert plane into database.");
            }

        }

        public void DeletePlane(int id)
        {
            using var connection = new SqliteConnection(_connectionDB);
            connection.Open();

            var command = connection.CreateCommand();
            command.CommandText =
            @"
                DELETE FROM Planes
                WHERE ID == $id";

            command.Parameters.AddWithValue("$id", id);

            int rowsAffected = command.ExecuteNonQuery();

            if (rowsAffected < 1)
            {
                throw new ArgumentException($"No planes with ID = {id}.");
            }
        }

        public List<Airport> GetAllPlanes()
        {
            using var connection = new SqliteConnection(_connectionDB);
            connection.Open();

            var command = connection.CreateCommand();
            command.CommandText =
             @"    
                  SELECT ID, Model, Year, Country, Capacity, Image, Type, Captain FROM Planes"; 

            using var reader = command.ExecuteReader();

            var results = new List<Airport>();
            while (reader.Read())
            {

                var row = new Airport
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

                results.Add(row);
            }

            return results;
        }

        public Airport? GetSinglePlane(int id)
        {
            using var connection = new SqliteConnection(_connectionDB);
            connection.Open();

            var command = connection.CreateCommand();
            command.CommandText =
            @"
                 SELECT ID, Model, Year, Country, Capacity, Image, Type, Captain FROM Planes
                 WHERE ID == $id";

            command.Parameters.AddWithValue("$id", id);

            using var reader = command.ExecuteReader();

            Airport result = null;

            if (reader.Read())
            {
                result = new Airport
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

            return result;
        }

        public void UpdatePlane(int id, Airport updatedPlane)
        {
            using var connection = new SqliteConnection(_connectionDB);
            connection.Open();

            var command = connection.CreateCommand();
            command.CommandText =
            @"
                UPDATE Planes
                SET
                    Model = $model,
                    Year = $year,
                    Country = $country,
                    Capacity = $capacity,
                    Image = $image,
                    Type = $type,
                    Captain = $captain
                WHERE
                    ID == $id;";


            command.Parameters.AddWithValue("$id", id);
            command.Parameters.AddWithValue("$model", updatedPlane.Model);
            command.Parameters.AddWithValue("$year", updatedPlane.Year);
            command.Parameters.AddWithValue("$country", updatedPlane.Country);
            command.Parameters.AddWithValue("$capacity", updatedPlane.Capacity);
            command.Parameters.AddWithValue("$image", updatedPlane.Image);
            command.Parameters.AddWithValue("$type", updatedPlane.Type);
            command.Parameters.AddWithValue("$captain", updatedPlane.Captain);

            int rowsAffected = command.ExecuteNonQuery();

            if (rowsAffected < 1)
            {
                throw new ArgumentException($"Could not update plane with ID = {id}.");
            }
        }
    }
}
