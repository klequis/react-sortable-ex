import React from 'react'
import styled from 'styled-components'

// const MoreVert = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-left: 10px;
  
// `

const Try = styled.svg`
  display: flex;
  /* align-items: stretch; */
  /* justify-content: stretch; */
  margin-left: 10px;
  /* width: 100%; */
  height: 100%;
  background-color: green;
  /* max-height: 50px; */
  /* flex-basis: 20%; */
  flex-grow: 2;
`

const MoreVert = ({ fill='black', fillOpacity= 1 }) => {
  console.log('fill', fill)
  return (
    <Try
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" fill='gray' />
      <path
        style={{ 
          fill:fill, 
          'fill-opacity':fillOpacity 
        }}
        d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
      />
    </Try>
  )
}

export default MoreVert