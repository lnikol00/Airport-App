/*
**********************************
* Author: Luka Nikolac
* Project Task: Airport - Phase 1
**********************************
* Description:
*  
*  Contains Model defining Airport class 
*
**********************************
*/

namespace AirportApplication.Models
{
    public class Airport
    {
        // Unique ID for each plane
        public int Id { get; set; }

        // Plane model (name)
        public string? Model { get; set; }

        // Plane image
        public string? Image { get; set; }

        // Year plane was built
        public int Year { get; set; }

        // Country origin (Country where plane was built)
        public string? Country { get; set; }

        // Number of passengers available on flight
        public int Capacity { get; set; }

        // Aircraft type, could be passenger, cargo, private
        public string? Type { get; set; }

        // Plane captain
        public string? Captain { get; set; }
    }
}
