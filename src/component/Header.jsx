import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return <div className='container border border-primary my-2 bg-primary text-light'>
        
            <h1>Component Life Cycle</h1>
            
            <ul className='d-flex container' >
            <li className="nav-item mx-3"><Link  className='text-light' to="/mounting">Mounting</Link></li>
            <li className="nav-item mx-3"><Link className='text-light' to="/updating">UpDating</Link></li>
            <li className="nav-item mx-3"><Link className='text-light' to="/unmounting">UnMounting</Link></li>

        </ul>
    
        

       


    </div>;
};

export default Header;
