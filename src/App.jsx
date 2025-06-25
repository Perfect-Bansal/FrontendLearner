
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './navbar/navbar';
import { SearchBar } from './page/Home';
import { All } from './page/All';

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

  // filter for search
  const filteredCities = cityData.filter(city =>
    city.locationName.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <Router>
      <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} filteredCities={filteredCities} />
      
        <Routes>
          <Route path='/' element={<SearchBar/>}/>

          <Route path="/all" element={<All/>}/>
        </Routes>

    </Router>
  );
}

export default App;
