import React from 'react';
import {Link} from 'react-router-dom';

import svg from './../../../assets/svg/login.svg';

const MenuItem = ({children, isActive, svgName, link}) => {
    return(
        <Link to={link}>
            <div className={`menu__item ${isActive ? 'menu__active' : ''}`}>
                <svg className="menu__item--icon">
                    <use xlinkHref={`${svg}#${svgName}`}></use>
                </svg>
                <span className="menu__item--text">{children}</span>
            </div>
        </Link>
    )
}

export default MenuItem;