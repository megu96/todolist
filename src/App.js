import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Form from './Form'
import List from './List'
import styled from 'styled-components'



const Container = styled.section`
  width: 375px;
  margin: 50px auto;
  border: 1px solid rgba(217, 188, 186, 0.25);
`;


const Header = styled.header`
  width: 100%;
  height: 90px;
  font-size: 30px;
  background: #A36D6A;
  text-align: center;
  color: #fff;
  padding: 25px;
  box-sizing: border-box;
  position: relative;
`;


const Title = styled.h1`
  font-family: 'Mr Eaves Mod OT';
  font-weight: bold;
  font-size: 30px;
  margin: 0;
`;


const Wrap = styled.div`
  width: 100%;
  padding:  0 30px 25px;
  box-sizing: border-box;
`;


const Icon = styled.span`
position: absolute;
  top: 25px;
  right: 25px;
`


const App = () => {
    return (
        <div>
            <Container>

            <Header>
                <Title>My Tasks</Title>
                <Icon><FontAwesomeIcon icon={['fas', 'ellipsis-v']} /></Icon>
            </Header>

            <Wrap>
                <List />
                <Form />
            </Wrap>


            </Container>
        </div>
    )
}


export default App
