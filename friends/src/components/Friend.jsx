import React from 'react';
import styled from 'styled-components';

const FriendWrapper = styled.div`
    padding: 20px;
`

const Friend = (props) => {
    return (
        <FriendWrapper>
            ID {props.friend.id}: {props.friend.name}, who is {props.friend.age} years old, can be reached at {props.friend.email}.
        </FriendWrapper>
    )
}

export default Friend;