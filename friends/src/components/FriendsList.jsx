import React from 'react';
import Friend from './Friend';

const FriendsList = (props) => {
    return (
        <div>
        {props.friends.map( (friend) => <Friend handleDeleteFriend={props.handleDeleteFriend} key={friend.id} friend={friend}/> )}
        <a href="/form">Go to Friends Form</a>
        </div>
    )
}

export default FriendsList