
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './navbar/navbar';
import { Home } from './page/Home'
import { All } from './page/All';
import Login from './component/login/login';

function App() {
  const [searchQuery, setSearchQuery] = useState("");

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
  const cityData = timezones.map((tz, i) => ({
    timeZone: tz,
    locationName: locationName[i]
  }));

  const filteredCities = cityData.filter(city =>
    city.locationName.toLowerCase().includes(searchQuery.toLowerCase())
  );
 
  const defaultCity = cityData[0]; 

  return (
    <Router>
      <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} filteredCities={filteredCities} />
      
        <Routes>
          
        <Route path="/"  element={
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {searchQuery === "" ? <Home timeZone={defaultCity.timeZone} locationName={defaultCity.locationName} /> : filteredCities.map((city, i) => 
            (
            <Home key={i} timeZone={city.timeZone} locationName={city.locationName} />
            ))}
          </div>
        }
      />
        <Route path="/all" element={<All/>}/>
        <Route index element={<Login/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        </Routes>

    </Router>
  );
}

export default App;

