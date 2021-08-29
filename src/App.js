import React from 'react'
import styled from 'styled-components'
import { Header } from './components/header.js'
import { Sidebar } from './components/sidebar.js'

export const Body = styled.div`
`

export let App = () => {
  return (
    <Body>
      <Header></Header>
      <Sidebar></Sidebar>
    </Body>      
  );
}

