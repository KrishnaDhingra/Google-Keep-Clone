import React from 'react'
import styled from 'styled-components'
import '../index.css'

const Body = styled.div`
    width: 80%;
    min-height: 100vh;
    background-color: #202124;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 2px solid red;
    gap: 0rem;
    padding: 3rem 3rem;
    font-family: 'Poppins', sans-serif;
    `
const Input = styled.input`
    width: 600px;
    height: 3rem;
    margin: 4rem auto;
    margin-bottom: 2.5rem;
    background-color: #202124;
    border: 1px solid grey;
    border-radius: 7px;
    padding: 0rem 2rem;
    box-shadow: 0 2px 9px 1px  #171717;
    font-size: 1.1rem;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    color: #E2E2E2;
    outline: none;

    
    &::placeholder{
        font-size: 1.1rem;
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
        color: #E2E2E2;

    }

    
`
const TodoContainer = styled.div`
    align-self: stretch;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 250px));
    grid-template-rows: 102px;
    grid-gap: 0.7rem;
`
const Todo = styled.div`
    border: 1px solid grey;
    border-radius: 10px;
    min-height: 112px;
    overflow-y: auto;
    font-size: 15px;
    padding: 1rem 1rem;
    box-sizing: border-box;
    margin: 0rem 0rem;
    color: white;

    ::-webkit-scrollbar {
        width: 0px;
    }

`

export let TodoFunction = () =>{
    return(
        <Body>
            <Input placeholder="Add a todo..."></Input>

            <TodoContainer>
                <Todo>Icons are used in most applications and websites. One of the best tools out there for adding icons to a React application is the React Icons library.</Todo>
                <Todo></Todo>
                <Todo></Todo>
                <Todo></Todo>
                <Todo></Todo>
                <Todo></Todo>
                <Todo></Todo>
                <Todo></Todo>
                <Todo></Todo>
                <Todo></Todo>
            </TodoContainer>
        </Body>
    )
}
export default TodoFunction