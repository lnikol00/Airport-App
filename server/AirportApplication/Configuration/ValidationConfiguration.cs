namespace AirportApplication.Configuration
{
    public class ValidationConfiguration
    {
        public int ModelMaxCharacters {  get; set; }
        public string ModelRegex { get; set; }
        public string YearRegex { get; set; }
        public string CountryRegex { get; set; }
        public int CountryMaxCharacters { get; set; }
        public string CapacityRegex { get; set; }
        public string TypeRegex { get; set; }
        public string CaptainRegex { get; set; }
        public int CaptainMaxCharacters { get; set; }
    }
}
