import React from 'react'
import styled from 'styled-components'
import { Header } from './components/header.js'
import { Sidebar } from './components/sidebar.js'
import { TodoFunction } from './components/todo.js'


export const Body = styled.div`
`

export let App = () => {
  return (
    <Body>
      <Header></Header>
      <Sidebar></Sidebar>
      <TodoFunction></TodoFunction>
    </Body>      
  );
}

