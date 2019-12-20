import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components'

const FormWrapper = styled.form `
    margin-top: 20px;
` 

const Icon = styled.button `
    color: #A36D6A;
    margin-right: 10px;
    font-size: 23px;
    border: none;
    padding: 0;
`

const Form = (props) => {

    const [value, setValue] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value){
            return
        }
        props.addTodo(value)
        setValue('')
    }

    return (
    <FormWrapper onSubmit={handleSubmit}>
    <Icon type="submit"><FontAwesomeIcon icon={['fas', 'plus']} /></Icon>
    <input type="text"
    onChange = {(e) => {setValue(e.target.value)}}
    value = {value}
    />
    </FormWrapper>
    )
}

export default Form