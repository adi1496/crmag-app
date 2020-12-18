import React from 'react';

import './banner.styles.scss';

// import LogoKrita from './../../assets/logo_krita.png';

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__details">
                <h1 className="heading-1">CRMag</h1>
                <span className="banner__text">Lowest prices detected</span>
                {/* <img src={LogoKrita} alt="Logo"/> */}
            </div>
        </div>
    )
}

export default Banner;