import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Navbar1 from './components/Navbar1';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Default from './components/Default';
import Footer from './components/Footer';




class App extends Component {
  render(){
    return (
      <React.Fragment>
       <Navbar/>
       <Navbar1/>
       <Switch>
         <Route exact path="/" component={ProductList}/>
         <Route path="/details" component={Details}/>
         <Route component={Default}/>

       </Switch>

      <Footer/>
      </React.Fragment>


    );

  }
 
}

export default App;
