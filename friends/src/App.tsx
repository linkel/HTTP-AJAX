import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import { Route } from 'react-router-dom';

// This App.tsx uses TypeScript.
// Run `yarn add typescript @types/node @types/react @types/react-dom @types/jest` to install.

interface MyState {
  friends: Array<object>
}

class App extends Component<{}, MyState> {
  constructor(props:any) {
    super(props);
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
  handleAddFriend = (event:any) => {
    event.preventDefault();

    // interface ensures friendObject contents match the types specified
    interface friendObject {
      name: string,
      age: number,
      email: string
    }

    let friendObj: friendObject = { // don't need to specify new IDs since those are created in server.js
      name : event.target[1].value,
      age : event.target[2].value,
      email : event.target[3].value,
    }

    if (event.target[0].value) {
      console.log("yes id provided")
      axios
      .put(`http://localhost:5000/friends/${event.target[0].value}`, {
        name: event.target[1].value,
        age: event.target[2].value,
        email: event.target[3].value,
      })
      .then(response => this.setState({friends : response.data}))
      .catch(err => console.log(err));
    } else {
      if (event.target[1].value && event.target[2].value && event.target[3].value) {
        console.log("no id provided")
        axios     
          .post(`http://localhost:5000/friends`, friendObj)
          .then(response => {
          this.setState({friends: response.data})
          })
          .catch(err => {
            console.log(err)
          });
        } else {
          alert("Please provide all three fields: name, age, and email.");
        }
      }
  }
  
  handleDeleteFriend = (friend_id:any) => {
    console.log(friend_id)
    axios
      .delete(`http://localhost:5000/friends/${friend_id}`)
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
        <Route exact path='/' render={(props: any) => <FriendsList 
          handleDeleteFriend={this.handleDeleteFriend} friends={this.state.friends} {...props}/>}/>
        <Route path='/form' render={ (props: any) => <FriendForm handleAddFriend={this.handleAddFriend} {...props}/>}/>
        {/* <FriendsList handleDeleteFriend={this.handleDeleteFriend} friends={this.state.friends}/>
        <FriendForm handleAddFriend={this.handleAddFriend} /> */}
      </div>
    );
  }
}

export default App;
