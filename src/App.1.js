import React, { Component } from 'react';
//import logo from './logo.svg';
//import { Button } from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      alluser: [],
      message: "Fill Out this Field"
    }
    this.frominput = this.frominput.bind(this);
    this.fromhandler = this.fromhandler.bind(this);
    this.delete = this.delete.bind(this);

  }

  frominput = (e) => {
    this.setState({
      username: e.target.value
    })

  }

  fromhandler = () => {
    if (this.state.username !== "") {
      let curentuser = this.state.alluser;
      curentuser.push(this.state.username);
      this.setState({
        alluser: curentuser,
        username: ''

      })

    } else {
      return    
      // let message = this.state.message;
      //   this.setState({
      //     message: message
      //   })
      // console.log(message);
    }
    console.log(this.state.alluser);
  }

  delete = (item) => {
    let curentuser = this.state.alluser;
    curentuser.splice(item, 1);
    this.setState({
      alluser: curentuser,
    })
    console.log("after splie" + this.state.alluser)
  }
  render() {
    let user = this.state.alluser.map((item, key) => {
      return (<tr key={key}><td>{item}</td>
        <td><button className="btn btn-danger btn-sm" onClick={() => {this.delete(item)}}>Remove</button></td></tr>)
    })
    return (
      <div className="App">
              
      
        <header className="App-header">Todo App</header>
        <br />
        <div className="col-sm-12">
          <div className="input-group">
            <input type="text" className="form-control"  placeholder="Type Something..." value={this.state.username} onChange={this.frominput} />
            <span className="input-group-btn">
              <button className="btn btn-primary" type="button" onClick={this.fromhandler}>Add</button>
            </span>
          </div>
        </div>
        <div>
          <table className="table table-striped">
            <tbody>{user}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default App;
