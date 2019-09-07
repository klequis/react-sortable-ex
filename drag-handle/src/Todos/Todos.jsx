import React, { Component, useState } from 'react'
import {
  sortableContainer,
  sortableElement,
  sortableHandle
} from 'react-sortable-hoc'
import arrayMove from 'array-move'

const listStyle = {
  listStyle: 'none',
  position: 'relative',
  zIndex: 0,
  backgroundColor: '#f3f3fe',
  border: '1px solid #efefef',
  outline: 'none',
  userSelect: 'none', // solves the selection while drag problem
  color: '#333',
  fontWeight: 300
}

const listItem = {
  display: 'flex', // gets rid of bullet on drag
  webkitBoxAlign: 'center',
  alignItems: 'center',
  width: '100%',
  padding: '0 20px',
  backgroundColor: '#fff',
  boxSizing: 'border-box',
  position: 'relative'
}

const handle = {
  position: 'relative',
  // top: 1,
  display: 'block',
  width: 18,
  // height: 11,
  opacity: 0.5,
  marginRight: 20,
  cursor: 'row-size'
  // background: 'linear-gradient(180deg,#000,#000 20%,#fff 0,#fff 40%,#000 0,#000 60%,#fff 0,#fff 80%,#000 0,#000)',
}

class ListContent extends React.Component {
  state = {
    _value: this.props.vlaue
  }

  handleValueChange = e => {
    this.setState({
      value: e.target.value
    })
  }
  render() {
    return <input value={this.state._value} onChange={this.handleValueChange} />
  }
}

const DragHandle = sortableHandle(() => <div style={handle}>::</div>)

const SortableItem = sortableElement(({ value }) => (
  <li style={listItem}>
    <DragHandle />
    <ListContent />
  </li>
))

const SortableContainer = sortableContainer(({ children }) => {
  return <ul style={listStyle}>{children}</ul>
})

class App extends Component {
  state = {
    items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex)
    }))
  }

  render() {
    const { items } = this.state

    return (
      <SortableContainer onSortEnd={this.onSortEnd} useDragHandle>
        {items.map((value, index) => (
          <SortableItem key={`item-${value}`} index={index} value={value} />
        ))}
      </SortableContainer>
    )
  }
}

export default App
