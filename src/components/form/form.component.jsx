import React from 'react';
import {Link} from 'react-router-dom';

import Input from '../small-components/input.component';
import FormButton from './../button/button.component';

import createRenderPropsAuthPages from './../../utils/createRenderPropsAuthPages';
import fetchFunction from './../../utils/fetch';

class Form extends React.Component {
    constructor(props) {
        super(props);

        // console.log(this.props);
        const response = createRenderPropsAuthPages(this.props.route);
        this.newProps = response.newProps;
        this.state = {
            ...response.state,
            disabled: false,
            message: '',
        };
        
    }

    handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        // console.log(name, value);
        this.setState({[name]: value})
        // console.log(this.state);
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log(event.target);
        this.setState({disabled: true});

        let json;
        switch(event.target.id) {
            case 'login': {
                const body = {
                    email: this.state.email,
                    password: this.state.password
                }
                json = await fetchFunction('POST', 'api/v1/users/login', body);
                if(json.status === 'success'){
                    window.localStorage.setItem('jwt', json.data.token);
                    this.props.handleUserChange(json.data.user);
                    json.message = 'Login successfully';
                }
                console.log(json);
                break;
            }
            
            case 'signup': {
                const body = {
                    name: `${this.state.firstName} ${this.state.lastName}`,
                    email: this.state.email,
                    password: this.state.password,
                    confirmPassword: this.state.confirmPassword
                }

                json = await fetchFunction('POST', 'api/v1/users/signup', body);
                console.log(json);
                break;
            }

            case 'forgot-password': {
                const body = {
                    email: this.state.email
                }

                json = await fetchFunction('POST', 'api/v1/users/forgot-password', body);
                console.log(json);
                break;
            }
            default: {
                break;
            }
        }

        if(json.status === 'success') {
            this.setState({message: json.message});
        }else {
            this.setState({disabled: false});
            this.setState({message: json.message});
        }

        
    }

    render() {
        return (
            <form className="login-form">
                <h3 className="login-form__welcome heading-3">{this.newProps.welcome}</h3>
                <h4 className="login-form__text heading-4">{this.state.message === '' ? this.newProps.text : this.state.message}</h4>
    
                {this.newProps.inputs.map((input, index) => {
                    return (<Input disabled={this.state.disabled} key={index} {...input} handleChange={this.handleChange} value={this.state[input.name]} />);
                })}
                
            <FormButton id={this.props.route.split('/')[1]} onClick={this.handleSubmit} btnClass="btn-form" disabled={this.state.disabled}>{this.newProps.btn}</FormButton>
    
                <Link className="login-form__link" to={this.newProps.link.to}>{this.newProps.link.text}</Link>
            </form>
        )

    }
}

export default Form;