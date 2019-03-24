import React from 'react';
import { Home } from "../Components2/Home.js";
import { Route } from "react-router-dom";


export class RouteApp extends Route {

render() {

    return (
     
            <div>
                <Route path="../Components2/Home" component={Home} />
                {/* <Route path="/about" component={About} />
                <Route path="/topics" component={Topics} /> */}
            </div>
       
      
    );
    }
}
