import React from 'react'
import Todos from './Todos'
import styled from 'styled-components'

const Page = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  /* padding: 5% 10%; */
  /* padding: 5%; */
  background-color: gray;
`

const AppWrapper = styled.div`
  padding: 5% 10%;
`;

const App = () => {

  return (
    <Page>
      <AppWrapper>
        <Todos />
      </AppWrapper>
    </Page>
  )
}

export default App
