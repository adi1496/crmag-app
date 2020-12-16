import React from 'react';
import {Link} from 'react-router-dom';

import Logo from './../small-components/logo.component';

import './footer.styles.scss';

const Footer = ({user}) => {
    return (
        <div className="footer">
            <div className="footer__nav">
                <Link className="footer__link" to="/">Home</Link>
                {
                    user ? 
                    <Link className="footer__link" to="/my-account">My Account</Link>
                    :
                    <Link className="footer__link" to="/login">Login</Link>
                }

                {
                    user ? 
                    <Link className="footer__link" to="/cart">Cart</Link>
                    :
                    <Link className="footer__link" to="/signup">Sign Up</Link>
                }
            </div>
            <Logo />
            <p className="copy">Copyright &copy; Adrian Matei. All rights reserved</p>
        </div>
    )
}

export default Footer