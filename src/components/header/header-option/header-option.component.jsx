import React from 'react';
import {Link} from 'react-router-dom';

import HeaderOptionDropDownAccount from '../header-dropdown/header-dropdown-account.component';

import headerSVG from './../../../assets/svg/header.svg';

const HeaderOption = ({children, icon, appProps, id}) => {
    let link = id;
    let isUser = false;
    if(appProps){
        if(id === 'account'){
            link = 'login';
            if(appProps.user) isUser = true;
        }else {
            link = id;
        }
    }
    return (
        <div className="header__option">
            <Link className="header__option-item" to={isUser ? '/my-account' : `/${link}`}>
                <svg className="header__option-icon">
                    <use xlinkHref={`${headerSVG}#${icon}`}></use>
                </svg>
                <span className="header__option-text">{children} &#9662;</span>
            </Link>

            {
                id === 'account' ?  
                    <HeaderOptionDropDownAccount appProps={appProps} />
                    :
                    ''
            }
        </div>
    )
}

export default HeaderOption;