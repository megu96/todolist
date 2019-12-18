import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Form from './Form'
import List from './List'
import styled from 'styled-components'


const App = () => {
    const [todos, setTodos] = React.useState(
      [
        {
          text: '宿題をする',
        },
        {
          text: '洗濯をする',
        },
      ]);

      const addTodo = (value) => {
        const newTodos = [
          // 配列を展開する
          ...todos,
          {
            text: value
          }
        ]
        setTodos(newTodos)
      }

    return (
        <div>
            <Container>

            <Header>
                <Title>My Tasks</Title>
                <Icon><FontAwesomeIcon icon={['fas', 'ellipsis-v']} /></Icon>
            </Header>

            <Wrap>
                <List todos={todos} />
                <Form addTodo={addTodo} />
            </Wrap>


            </Container>
        </div>
    )
}


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
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;


const Wrap = styled.div`
  width: 100%;
  padding:  0 30px 25px;
  box-sizing: border-box;
`;


const Icon = styled.span`
position: absolute;
transform: translate(-50%, -50%);
top: 50%;
right: 25px;
`


export default App
