import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components'

const ToggleBtn = styled.span`
    font-size: 23px;
    color: ${props => props.isDone ? `#A36D6A` : `#A36D6A`};
    display: inline-block;
    margin-right: 10px;
    
`
const ListItem = styled.p`
    color: ${props => props.isDone ? `rgba(163, 146, 145, 0.6)` : `#A39291`};
    font-size: 18px;
    margin: 0;
    display: inline-block;
    position: relative;   
`

const Li = styled.li `
     border-bottom: 1px solid rgba(217, 188, 186, 0.25);
     padding: 20px 0;
`

const Border = styled.span `
    position: absolute;
    width: 100%;
    height: 1px;
    background: rgba(163, 109, 106, 0.8);
    top: 50%;
    left: 0;
    display: ${props => props.isDone ? `inline-block` : `none`};
`


const Item = () => {
    const [isDone, setIsDone] = React.useState(false);

    const toggleIsDone = () => setIsDone(!isDone)

    return (
        <Li>
            <ToggleBtn isDone={isDone} onClick={toggleIsDone}>
                {
                    isDone?
                    <FontAwesomeIcon icon={['far', 'check-circle']} />:
                    <FontAwesomeIcon icon={['far', 'circle']} />
                }
            </ToggleBtn><ListItem isDone={isDone} onClick={toggleIsDone}><Border isDone={isDone} onClick={toggleIsDone}></Border>サンプル</ListItem>
        </Li>
    )
}

export default Item