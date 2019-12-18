import React from 'react';
import Item from './Item'

import styled from "styled-components"

const Wrapper = styled.ul `
    list-style: none;
    margin: 0;
    padding: 0px;
`

const List = (props) => {
    const todos = props.todos.map((todo) => {
        return (
            <Item text={todo.text} />
        )
    })
    return (
        <Wrapper>
            {todos}
        </Wrapper>
    )
}

export default List