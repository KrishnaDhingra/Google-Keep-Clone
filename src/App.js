import React from 'react'
import styled from 'styled-components'
import { Sidebar } from './components/header.js'

export const Body = styled.div`
`

export let App = () => {
  return (
    <Body>
      <Sidebar></Sidebar>
    </Body>      
  );
}

