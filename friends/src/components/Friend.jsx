import React from 'react';
import styled from 'styled-components';

const FriendWrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Delete = styled.div`
    padding: 10px;
    color: red;
    font-weight: bold;
    cursor: pointer;
`

const Friend = (props) => {
    return (
        <FriendWrapper>
            ID {props.friend.id}: {props.friend.name}, who is {props.friend.age} years old, can be reached at {props.friend.email}.
        <Delete onClick={ () => props.handleDeleteFriend(props.friend.id)}>DELETE THIS FRIEND?</Delete>
        </FriendWrapper>
    )
}

export default Friend;