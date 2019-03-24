import React, { Component } from 'react';
import './Header.css';
import { Login } from './Login';

export class Header extends Component {
render() {
    return (
            <header>
                <div className="container-fluid" id="header">
                    <div className='row'>
                        <div className="col">
                            <h1 className="logo-txt">
                                FriendsMe
                            </h1>
                        </div>
                        <Login />
                    </div>
                </div>
            </header>
    );
}
}
//export default Header;
