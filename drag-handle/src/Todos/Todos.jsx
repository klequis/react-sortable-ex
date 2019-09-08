import React, { Component, useState } from 'react'
import {
  sortableContainer,
  sortableElement,
  sortableHandle
} from 'react-sortable-hoc'
import arrayMove from 'array-move'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import DragHandleIcon from '@material-ui/icons/DragHandle'
import Checkbox from '@material-ui/core/Checkbox'

const options = ['One', 'Two']
const ITEM_HEIGHT = 48

const Handle = styled.div`
  position: 'relative';
  display: 'block';
  width: 18;
  opacity: 0.5;
  margin-right: 20px;
  cursor: row-size;
`

const List = styled.ul`
  list-style: none;
  position: relative;
  z-index: 0;
  background-color: #f3f3fe;
  border: 1px solid #efefef;
  outline: none;
  user-select: none;
  color: #333;
  font-weight: 300;
`

const ListItem = styled.li`
  -webkit-box-align: center;
  align-items: center;
  background-color: #fff;
  box-sizing: border-box;
  display: flex;
  margin-bottom: 5px;
  padding: 0 20px;
  position: relative;
  width: 100%;
  :first-child {
    margin-top: 5px;
  }
`
const ListItemContent = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`

const TitleInput = styled.input`
  width: 100%;
`

const ListContent = ({ value }) => {
  console.log('value', value)
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
    <ListItemContent>
      <Checkbox
        checked={completed}
        onChange={handleCompleteClick}
        value="checkedA"
        inputProps={{
          'aria-label': 'primary checkbox'
        }}
      />
      <TextField label="Title" value={_value} onChange={handleValueChange} />
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleMoreClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
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
      </Menu>
    </ListItemContent>
  )
}

// const DragHandle = sortableHandle(() => <div style={handle}>::</div>)
const DragHandle = sortableHandle(() => <DragHandleIcon />)

const SortableContainer = sortableContainer(({ children }) => {
  // return <ul style={listStyle}>{children}</ul>
  return <List>{children}</List>
})

const SortableItem = sortableElement(({ value }) => (
  // <li style={listItem}>
  //   <DragHandle />
  //   <ListContent />
  // </li>
  <ListItem>
    <DragHandle />
    <ListContent value={value} />
  </ListItem>
))

const App = () => {
  const initItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
  const [items, setItems] = useState(initItems)

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const newItems = arrayMove(items, oldIndex, newIndex)
    setItems(newItems)
  }

  return (
    <SortableContainer onSortEnd={onSortEnd} useDragHandle>
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </SortableContainer>
  )
}

export default App
