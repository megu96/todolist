import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components'

const Input = styled.div `
    margin-top: 20px;
` 

const Icon = styled.span `
    color: #A36D6A;
    margin-right: 10px;
    font-size: 23px;
`

const Form = () => {
    return (
    <Input><Icon><FontAwesomeIcon icon={['fas', 'plus']} /></Icon><input type="text" /></Input>
    )
}

export default Form