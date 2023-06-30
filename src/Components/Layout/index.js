
import { Outlet} from 'react-router-dom';
import Navbar from '../Navbar';
function Layout() {

    return (
      <div className="">
      <Navbar/>
        <main>
         <Outlet/>
        </main>
        
      </div>
    );
  }
  
  export default Layout;