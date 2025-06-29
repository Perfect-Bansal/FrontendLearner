import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './navbar/navbar';
import { Home } from './page/Home';
import { All } from './page/All';
import Login from './component/login/login';
import SignUp from './component/signup/signup';

function AppContent() {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLogin, setIsLogin] = useState(false)

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

  const hideNavbarPaths = ["/login", "/signup"];
  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && (
        <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} filteredCities={filteredCities} isLogin={isLogin} />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/all" element={<All />} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/home"  element={
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {searchQuery === "" ? (
                <Home timeZone={defaultCity.timeZone} locationName={defaultCity.locationName} />
              ) : (
                filteredCities.map((city, i) => (
                  <Home key={i} timeZone={city.timeZone} locationName={city.locationName} />
                ))
              )}
            </div>
          }
        />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
