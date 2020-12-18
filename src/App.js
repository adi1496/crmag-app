import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/HopmePage/home-page.component';
import Footer from './components/footer/footer.component';
import LoginSignUpForgotPassword from './components/login-signup-forgot/login-signup-forgot.component';
import ProductsPage from './pages/ProductsPage/products-page.component';

import './App.css';
import fetchFunction from './utils/fetch';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: null,
      categories: [],
      cart: null,
      // data: null
    }
  }

  async componentDidMount() {
    /*********
     * User logged
     ********/
    const token = window.localStorage.getItem('jwt');
    if(token) {
      const json = await fetchFunction('GET', 'api/v1/users/am-i-logged', {}, {authorization: `Bearer ${token}`})
      
      if(json.status === 'success'){
        this.setState({user: json.user});
      }
    }


    /*********
     * Get and set Categories data
     ********/
    const categories = await fetchFunction('GET', 'api/v1/categories/', {});
    // const categories = await response.json();

    if(categories.status === 'success'){
      this.setState({categories: categories.categories});
    }


    /*********
     * Get cart from localStorage and set the cart state
     ********/
    if(window.localStorage.getItem('cart')){
      this.setState({cart: window.localStorage.getItem('cart')});
    }
  }

  handleUserChange = (user) => {
    console.log(user);
    this.setState({user});
  }

  handleCategoryBtn = (data) => {
    console.log('clicked');
    window.localStorage.setItem('productsData', data);
    // this.setState({data: data});
  }

  handleAddCart = (id) => {
    // console.log('added to cart');
    let cart;
    if(window.localStorage.getItem('cart')) {
      // console.log('exists');
      cart = window.localStorage.getItem('cart');
    }else {
      cart = '';
    }
    
    if(cart === '') {
      cart += id;
    }else {
      cart += `+${id}`;
    }
    
    window.localStorage.setItem('cart', cart);
    this.setState({cart: cart}, () => {console.log(this.state.cart)});

  }

  render() {
    // console.log(this.state.cart);
    return (
      <div>
        
        {/* Header Component */}
        <Header user={this.state.user} cart={this.state.cart} handleUserChange={this.handleUserChange} />

        {/* HomePage Route */}
        <Route exact path="/" ><HomePage handleCategoryBtn={this.handleCategoryBtn} categories={this.state.categories} /></Route>

        {/* Login Route */}
        <Route exact path="/login" render={() => this.state.user ? 
          <Redirect to="/" /> : 
          <LoginSignUpForgotPassword route="/login" handleUserChange={this.handleUserChange} /> }></Route>
        
        {/* Signup Route */}
        <Route exact path="/signup" render={() => this.state.user ? 
          <Redirect to="/" /> : 
          <LoginSignUpForgotPassword route="/signup" /> }></Route>
        
        {/* Forgot Password Route */}
        <Route exact path="/forgot-password" render={() => this.state.user ? 
          <Redirect to="/"/> : 
          <LoginSignUpForgotPassword route="/forgot-password" /> }></Route>

          {/* Products Route */}
          <Route exact path="/products" > <ProductsPage categories={this.state.categories} handleAddCart={this.handleAddCart} /> </Route>

        {/* Footer Component */}
        <Footer user={this.state.user} />
      </div>
    )
  }
}

export default App;
