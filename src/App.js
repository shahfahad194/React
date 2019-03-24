import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './Components/Header';
import {Section} from './Components/Section';
// import { RouteApp } from './Route/Routing'


class App extends Component {
  
 render() {

    return (
      <div className="App">
        <React.Fragment>
        <Header/>
        <Section/>
        </React.Fragment>
       
      </div>
       
    );
  }
}
export default App;
