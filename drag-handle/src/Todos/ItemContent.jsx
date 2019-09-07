import React, { useState } from 'react'
import DragHandle from './DragHandle'
import styled from 'styled-components'

const Button = styled.button`
  background-color: green;
  margin-left: 5px;
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

      <Button onClick={onButtonClick}>{btnValue}</Button>
    </ItemContentWrapper>
  )
}

export default ItemContent