import React from 'react';
import { Link } from 'react-router-dom';
import './Header.styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as Logo } from '../../assets/Logo.svg';

const Header = () => (

    <div className="header">
        <Link  className="logo-container" to="/">
            <Logo className="logo" />
            <p className="font-weight-bold">SHOPZONE</p>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                Shop
            </Link>
            <Link className="option" to="/contact">
                Contact
            </Link>

        </div>

    </div>

);

export default Header;