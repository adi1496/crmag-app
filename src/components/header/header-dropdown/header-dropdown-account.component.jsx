import React from 'react';

import AccountDropItem from './account-drop-item';
import WishCartItem from './wish-cart-item/wish-cart-item.component';

const HeaderOptionDropDownAccount = (appProps) => {
    const logout = () => {
        window.localStorage.removeItem('jwt');
        appProps.handleUserChange(null);
    }

    switch(appProps.id) {
        case 'account': {
            if(appProps.user) {
                return (
                    <div className="header__dropdown">
                        <AccountDropItem appProps={appProps} link="/my-account">Your Account</AccountDropItem>
                        <AccountDropItem appProps={appProps} link="/orders">Your Orders</AccountDropItem>
                        <AccountDropItem appProps={appProps} link={undefined} onClick={logout}>Log Out</AccountDropItem>
                    </div>
                )
            }else {
                return (
                    <div className="header__dropdown">
                        <AccountDropItem appProps={appProps} link="/login">Login</AccountDropItem>
                        <AccountDropItem appProps={appProps} link="/signup">SignUp</AccountDropItem>
                        <AccountDropItem appProps={appProps} link="/forgot-password">Forgot Password?</AccountDropItem>
                    </div>
                )
            }

            break;
        }

        case 'cart': {
            return (
                <div className="header__dropdown">
                    <WishCartItem cartItems={appProps.cart} />
                </div>
            )
            break;
        }
    }

}


export default HeaderOptionDropDownAccount;