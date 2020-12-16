import React from 'react';

import OptionDropItem from './option-drop-item';

const HeaderOptionDropDownAccount = ({appProps}) => {
    const logout = () => {
        window.localStorage.removeItem('jwt');
        appProps.handleUserChange(null);
    }

    if(appProps.user) {
        return (
            <div className="header__dropdown">
                <OptionDropItem appProps={appProps} link="/my-account">Your Account</OptionDropItem>
                <OptionDropItem appProps={appProps} link="/orders">Your Orders</OptionDropItem>
                <OptionDropItem appProps={appProps} link={undefined} onClick={logout}>Log Out</OptionDropItem>
            </div>
        )
    }else {
        return (
            <div className="header__dropdown">
                <OptionDropItem appProps={appProps} link="/login">Login</OptionDropItem>
                <OptionDropItem appProps={appProps} link="/signup">SignUp</OptionDropItem>
                <OptionDropItem appProps={appProps} link="/forgot-password">Forgot Password?</OptionDropItem>
            </div>
        )
    }
}


export default HeaderOptionDropDownAccount;