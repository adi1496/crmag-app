
const createRenderPropsAuthPages = (route) => {
    const newProps = {};
    let state = {};
    const empty = '';

    switch(route) {
        case '/login': {
            newProps.welcome = 'Welcome Back';
            newProps.text = 'Login Here';
            newProps.inputs = [{name: 'email', placeholder: '✉️ Email', type: 'email', is2Col: true}, {name: 'password', placeholder: '🔐 Password', type: 'password', is2Col: true}];
            newProps.btn = 'Login';
            newProps.link = {
                to: '/forgot-password',
                text: 'Forgot Password?'
            }

            state = {
                email: empty,
                password: empty
            }
            break;
        }

        case '/signup': {
            newProps.welcome = 'Hello there';
            newProps.text = 'Sign Up Here';
            newProps.inputs = [{name: 'firstName', placeholder: '🔡 First Name', type: 'text', is2Col: false}, {name: 'lastName', placeholder: '🔡 Last Name', type: 'text', is2Col: false}, {name: 'email', placeholder: '✉️ Email', type: 'email', is2Col: true}, {name: 'password', placeholder: '🔐 Password', type: 'password', is2Col: true}, {name: 'confirmPassword', placeholder: '🔐 Confirm Password', type: 'password', is2Col: true}];
            newProps.btn = 'Sign Up';
            newProps.link = {
                to: '/login',
                text: 'Already have account?'
            }

            state = {
                firstName: empty,
                lastName: empty,
                email: empty,
                password: empty,
                confirmPassword: empty
            }
            break;
        }

        case '/forgot-password': {
            newProps.welcome = 'Hello Friend';
            newProps.text = 'Forgot your password?';
            newProps.inputs = [{name: 'email', placeholder: '✉️ Email', type: 'email', is2Col: true}];
            newProps.btn = 'Reset Password';
            newProps.link = {
                to: '/login',
                text: 'Did you remember the password, go to Login'
            }

            state = {
                email: empty
            }
            break;
        }

        default: break;
    }

    return {
        newProps,
        state
    }

}


export default createRenderPropsAuthPages;