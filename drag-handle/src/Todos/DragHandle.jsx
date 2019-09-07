import React from 'react'
import { sortableHandle } from 'react-sortable-hoc'
import styled from 'styled-components'
import dragHandle from 'media/dragHandle.svg'

const Handle = styled.div`
  width: 30px;
  /* padding: 0 3px; */
  /* margin-right: 5px; */
  display: flex;
  justify-content: center;
  align-content: center;
  flex-basis: 5%;
  background-color: purple;
`

// const 

const DragHandle = sortableHandle(() => (
  <Handle>
    <img src={dragHandle} alt='drag handle' />    
  </Handle>
))

export default DragHandle

// <svg viewBox="0 0 50 50" width='10px'>
//       <path
//         d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 L 0 7.5 z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 L 0 22.5 z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 L 0 37.5 z"
//         color="#000"
//       ></path>
//     </svg>