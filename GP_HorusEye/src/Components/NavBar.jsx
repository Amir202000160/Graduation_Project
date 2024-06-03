import { Link } from 'react-router-dom'

import '../Components/NavBar.css'
import '/public/Group 4.png'


function NavBar(){
    return (
    
       /* <div className="navbar bg-body-tertiary MainNav p-0 position-fixed ">*/
          <div className="container-fluid  NAV ">

            <Link to="/" className="navbar-brand IMG" href="#"  alt="Bootstrap" width="25" height="25"> 
            <img src='/public/Group 4.png' />
            </Link>
            <div className='middle_elements'>
            <Link to='/HorusEye' className="navbar-brand NAVi" href="#" > 
            <p className='NAVi'>Horus eye</p>
            </Link>
            <Link to='/Booking' className="navbar-brand NAVi" href="#" > 
            <p className='NAVi'>Booking</p>
            </Link>
            <Link to ="/FAV" className="navbar-brand NAVi" href="#" >
              <p className='NAVi'> Favourites</p></Link>
            <Link to="/ViewHistory" className="navbar-brand NAVi " href="#"  > 
            <p className='NAVi'>History</p>
            </Link>
            <Link to="/Login" className="navbar-brand NAVi " href="#" > 
            <p className='NAVi'>Login</p>
            </Link>
            </div>
          </div>
      /*  </div>*/
        
        
        )

}
export default NavBar