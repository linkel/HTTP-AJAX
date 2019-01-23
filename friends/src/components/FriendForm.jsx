import React from 'react';
import styled from 'styled-components';

const FormStyled = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 0 auto;
    padding: 100px;
`

const InputStyled = styled.input`
    margin: 20px;
    padding: 10px;
`

const FriendForm = (props) => {
    return (
        <div>
        <FormStyled onSubmit={props.handleAddFriend}>
          <InputStyled type="text" placeholder="id"/>
          <InputStyled type="text" placeholder="name"/>
          <InputStyled type="number" placeholder="age"/>
          <InputStyled type="text" placeholder="email"/>
          <InputStyled type="submit" value="Add or Update Friend"/>
        </FormStyled>
        <a href="/">Go to Friends List</a>
        </div>
    )
}

export default FriendForm;