import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './components/FriendsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
    }
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(response => 
        {
          //console.log(response.data)
          this.setState({friends: response.data})
        })
      .catch(err => console.log(err));
  }
  handleAddFriend = (event) => {
    event.preventDefault();
    let friendObj = { //cool, it handles new ids
      name : event.target[0].value,
      age : event.target[1].value,
      email : event.target[2].value,
    }
    axios     
      .post(`http://localhost:5000/friends`, friendObj)
      .then(response => {
      this.setState({friends: response.data})
      })
      .catch(err => {
        console.log(err)
      });
  }
  render() {
    return (
      <div className="App">
        <FriendsList friends={this.state.friends}/>
        <form onSubmit={this.handleAddFriend}>
          <input type="text" placeholder="name"></input>
          <input type="number" placeholder="age"></input>
          <input type="text" placeholder="email"></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
}

export default App;
