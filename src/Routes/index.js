import { Route, Routes} from "react-router-dom";
import Archived from "../Pages/Archived";
import Completed from "../Pages/Completed";
import Home from "../Pages/Home";
import WeatherDetails from "../Pages/WeatherDetails";
import Weather from "../Pages/Wheather";
import App from './../App';




  
  const Router = () => {
    
    return (
    <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="archived" element={<Archived />} />
          <Route path="weather" element={<Weather />} />
          <Route path="weather/:weatherId" element={<WeatherDetails />} />
        </Route>
    </Routes>
    )
  }
  
  export default Router