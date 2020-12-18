import React from 'react';

import HeaderOption from './header-option/header-option.component';
import Logo from './../small-components/logo.component';

import headerSVG from './../../assets/svg/header.svg';
import './header.styles.scss';

class Header extends React.Component {
    constructor(props){
        super(props);

        // console.log(this.props);
        this.state = {
            dropdownActive: false
        }
    }

    render() {
        return(
            <header className="header">
                <Logo />
                <div className="header__categories">
                    <span className="header__categories--text">Categories &#9660;</span>
                </div>

                <div className="header__search-box">
                    <input type="search" className="header__search" placeholder="What are you looking for?" />
                    <button className="header__search-button">
                        <svg className="header__search-icon">
                            <use xlinkHref={`${headerSVG}#icon-search`}></use>
                        </svg>
                    </button>
                </div>

                <HeaderOption id='account' appProps={this.props}  icon="icon-user-o">{this.props.user ? this.props.user.name.split(' ')[0] : 'My Account'}</HeaderOption>

                <HeaderOption id='wishlist' icon="icon-heart-outlined">Wishlist</HeaderOption>

                
                <HeaderOption id='cart' appProps={this.props} icon="icon-shopping-cart">Cart</HeaderOption>

            </header>
        )
    }
}

export default Header;