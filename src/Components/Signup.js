import React, { Component } from 'react';
import './Header.css';


export class Signup extends Component {
render() {
    return (
    <div className="col-sm-6">
        <div className="form-group">
            <form method="POST">
                <table className="singup_table" >
                    <tbody>
                        <tr>
                            <td >Frist Name</td>
                            <td><input type="text" className="form-control" name="f_name" placeholder="Frist Name" /></td>
                        </tr>
                        <tr>
                            <td className='name-singup'>Last Name</td>
                            <td><input type="text" name="l_name" className="form-control" placeholder="Last Name" /></td>
                        </tr>
                        <tr>
                            <td className='name-singup'>Email</td>
                            <td><input type="email" name="email" className="form-control" placeholder="Email" /></td>
                        </tr>
                        <tr>
                            <td className='name-singup'>Renter-Email</td>
                            <td><input type="text" name="re_emial" className="form-control" placeholder="Renter-Email" /></td>
                        </tr>
                        <tr>
                            <td className='name-singup'>Password</td>
                            <td><input type="password" name="pass" className="form-control" placeholder="Password" /></td>
                        </tr>
                        <tr>
                            <td className='name-singup'>Birthday</td>
                            <td><input type="date" name="dob" className="form-control" placeholder="mm/dd/yy" /></td>
                        </tr>
                        <tr>
                            <td className='name-singup'>Gender</td>
                            <td className=''>
                                <select className="form-control" name="gen">
                                    <option value="I am">I am</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>  	</td>
                            <td><input type="submit" name="singup" className="btn btn-primary" value="Signup" /> </td>

                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    </div>
               
        
    );
}
}
//export default Header;
