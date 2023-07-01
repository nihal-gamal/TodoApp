import { Route, Routes} from "react-router-dom";
import Archived from "../Pages/Archived";
import Completed from "../Pages/Completed";
import Home from "../Pages/Home";
import Weather from "../Pages/Wheather";
import App from './../App';



  
  const Router = () => {
    
    return (
    <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="archived" element={<Archived />} />
          <Route path="wheather" element={<Weather />} />
          <Route path="wheather/:weatherId" element={<Weather />} />
        </Route>
    </Routes>
    )
  }
  
  export default Router