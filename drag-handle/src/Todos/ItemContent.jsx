import React, { useState } from 'react'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { sortableHandle } from 'react-sortable-hoc'
import DragHandleIcon from '@material-ui/icons/DragHandle'

const options = ['One', 'Two']
const ITEM_HEIGHT = 48

const ItemContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  /* background-color: lightblue; */
`

// Left side
const Left = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 100%;
  /* background-color: red; */
`

const Handle = styled.div`
  /* width: 30px; */
  /* padding: 0 3px; */
  /* margin-right: 5px; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-basis: 5%;
  /* background-color: #e4e4e4; */
  background-color: #ebebeb;
  /* background-color: purple; */
  /* box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 2px 1px -1px;
    transition-delay: 0;
    transition-duration: 0.3s;
    transition-property: box-shadow;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
  ::after {
    content: '';
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    opacity: 0;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: opacity 0.3s ease-in-out;
  }
  :hover {
    transform: scale(1.2, 1.2);
  }
  
`

const Completed = styled(Checkbox)`
  /* background-color: blue; */
  flex-basis: 5%;
`

const Title = styled(TextField)`
  flex-basis: 100%;
  /* background-color: orange; */
`



const DragHandle = sortableHandle(() => <Handle><DragHandleIcon /></Handle>)


// Right side
const Right = styled.div`
  /* flex-basis: 10%; */
  /* justify-content: flex-end;
  align-items: center;
  align-content: center; */
  /* background-color: blue; */
`

const More = styled(Menu)`
  /* background-color: yellow; */
`


const ItemContent = ({ value }) => {
  const [_value, _setValue] = useState(value)
  const [anchorEl, setAnchorEl] = useState(null)
  const [completed, setCompleted] = useState(false)
  const open = Boolean(anchorEl)
  
  const handleValueChange = e => {
    const val = e.target.value
    console.log('val', val)
    _setValue(e.target.value)
  }

  const handleMoreClick = e => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleCompleteClick = (e) => {
    const b = e.target.checked
    setCompleted(b)
  }
  return (
    <ItemContentWrapper id={`ICW-${value}`}>
      <Left id={`Left-${value}`}>
        <DragHandle />
        <Completed
          checked={completed}
          onChange={handleCompleteClick}
          value="checkedA"
          inputProps={{
            'aria-label': 'primary checkbox'
          }}
        />
        <Title
          // variant="filled"
          label="Title"
          multiline={true}
          value={_value}
          onChange={handleValueChange}
        />
      </Left>
      <Right id={`Right-${value}`}>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleMoreClick}
        >
          <MoreVertIcon />
        </IconButton>
        <More
          id="more-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200
            }
          }}
        >
          {options.map(option => (
            <MenuItem
              key={option}
              selected={option === 'Pyxis'}
              onClick={handleClose}
            >
              {option}
            </MenuItem>
          ))}
        </More>
      </Right>
    </ItemContentWrapper>
  )
}

export default ItemContent