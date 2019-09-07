import React, { useState } from 'react'
import DragHandle from './DragHandle'
import styled from 'styled-components'
import MoreVert from './Todos/MoreVert'

const Button = styled.button`
  background-color: transparent;
  margin-left: 5px;
  /* height: 100px;
  width: 100px; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border: none;
`

const TitleInput = styled.input`
  background-color: orange;
  flex-basis: 85%;
`

const ItemContentWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;
  background-color: red;
`;

const Left = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
`

const ItemContent = initValue => {
  const [btnValue, setBtnValue] = useState('Click Me')
  const [title, setTitle] = useState(initValue.value)
  const onButtonClick = () => {
    console.log('clicked')
    setBtnValue('I was clicked')
  }
  const handleTitleChange = e => {
    const val = e.target.value
    setTitle(val)
  }
  return (
    <ItemContentWrapper>
      <Left>
        <DragHandle />
        <TitleInput value={title} onChange={handleTitleChange} />
      </Left>

      <Button onClick={onButtonClick}>
        <MoreVert fill="orange" />
      </Button>
    </ItemContentWrapper>
  )
}

export default ItemContent