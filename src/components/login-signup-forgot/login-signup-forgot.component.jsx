import React from 'react';

import MenuItem from './small-components/menu-item.component';
import Form from './../form/form.component';

import './login-signup-forgot.styles.scss';

class LoginSignUpForgotPassword extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            username: null,
            password: null
        }
    }

    render() {
        return (
            <section className="section-login">
                <div className="section-login__container">

                    <div className="menu">
                        <MenuItem isActive={this.props.route=== '/login' ? true : false} svgName="icon-user-o" link="/login">Login</MenuItem>

                        <MenuItem isActive={this.props.route=== '/signup' ? true : false} svgName="icon-pencil2" link="/signup">Sign Up</MenuItem>

                        <MenuItem isActive={this.props.route=== '/forgot-password' ? true : false} svgName="icon-lock" link="/forgot-password">Forgot Password?</MenuItem>
                    </div>

                    <Form route={this.props.route} handleUserChange={this.props.handleUserChange} />

                </div>
            </section>
        )
    }
}

export default LoginSignUpForgotPassword;