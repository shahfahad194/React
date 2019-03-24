import React, { Component } from 'react';
//import './Login.css';


export class Login extends Component {

    render() {
        return (
            <div className='col'>
                <form method="POST" action="">
                    <table>
                        <thead>
                            <td>Email</td>
                            <td>Password</td>
                        </thead>
                        <tbody>
                            <tr >
                                <td><input type="text" name="email" placeholder="Enter Your Email" className="form-control" /> </td>
                                <td><input type="password" name="password" className="form-control" placeholder="Enter Your Password" /> </td>
                                <td><input type="submit" name="login" value="LogIn" className="btn btn-primary" /> </td>
                            </tr>
                            <tr >
                                <td>  </td>
                                <td>Forgotten account? </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>

        );
    }
}