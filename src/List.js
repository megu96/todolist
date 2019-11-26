import React from 'react';
import Item from './Item'

import styled from "styled-components"

const Wrapper = styled.ul `
    list-style: none;
    margin: 0;
    padding: 0px;
`

const List = () => {
    return (
        <Wrapper>
            <Item />
            <Item />
            <Item />
            <Item />
        </Wrapper>
    )
}

export default List