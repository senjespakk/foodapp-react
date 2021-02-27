import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <div className="footer">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/contactus">Contact Us</Link></li>
                            <li><Link to="/aboutus">About Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;