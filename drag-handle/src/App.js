import React, { useState } from 'react'
import Todos from './Todos'
import styled from 'styled-components'

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 5% 10%;
  background-color: gray;
`

const App = () => {

  return (
    <AppWrapper>
      <Todos />
    </AppWrapper>
  )
}

export default App
