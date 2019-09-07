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

const ListContent = value => {
  const [_value, _setValue] = useState({ value })
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  
  const handleValueChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  const handleMoreClick = e => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <ListItemContent>
      <TextField
        label="Title"
        value={_value}
        onChange={this.handleValueChange}
      />
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleMoreClick}
      >
        <MoreVertIcon />
      </IconButton>
    </ListItemContent>
  )
}

// const DragHandle = sortableHandle(() => <div style={handle}>::</div>)
const DragHandle = sortableHandle(() => <Handle>::</Handle>)

const SortableContainer = sortableContainer(({ children }) => {
  // return <ul style={listStyle}>{children}</ul>
  return <List>{children}</List>
})

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
