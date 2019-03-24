import React, { Component } from 'react';
import './Header.css';
import { Signup } from './Signup';

export class Section extends Component {

    render() {
        const desp1Style = {
            textShadow: '0px 0px 25px black',
            fontFamily: 'sans-serif',
            fontWeight: 'bolder',
            fontSize: '1.1em',
            textDecoration: 'underline',
            color: '#3B5998',
            margin: '10px 0px 0px 10px'

        };
        const despStyle = {
            textShadow: '0px 0px 25px black',
            fontFamily: 'sans-serif',
            fontWeight: 'bolder',
            fontSize: '1.7em',
            textDecoration: 'underline',
            color: 'white',
            margin: '10px 0px 0px 15px'

        };
        
        return (
            <>
                <div className="container-fluid">
                    <div className='row'>
                        <div className="col-sm-6">
                            <div className='discription_1'>
                                <h2 style={desp1Style}>
                                    FriendsMe helps you connect and share with the people in your life.
                            </h2>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className='discription_2'>
                                <h1 style={despStyle}> Signup </h1> Its Free and allways will be.
                    </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className='row'>
                        <div className="col-sm-6" >
                            <div className="image_1">
                                <figure>
                                    <img src="./images/main1.jpg" className="image_logo" alt="Trulli" />
                                </figure>
                            </div>
                        </div>
                        <Signup />
                    </div>
                </div>


            </>
        );
    }
}

export default Section;