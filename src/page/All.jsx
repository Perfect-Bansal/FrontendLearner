import TimeZone from "../component/time";

export function All(){
    const timezones = [
    "Asia/Kathmandu",
    "Asia/Tokyo",
    "Europe/London",
    "America/New_York",
    "Australia/Sydney"
  ];

  const locationName = [
    "Nepal, Kathmandu",
    "Japan, Tokyo",
    "UK, London",
    "US, New York",
    "Australia, Sydney"
  ];


    return(
        <div className='w-full gap-5 flex items-center justify-between flex-wrap p-6'>
        {timezones.map((city, idx) => (
          <TimeZone
            key={city}
            timeZone={city}
            locationName={locationName[idx]}
            
          />
          
        ))}
      </div>
    )
}