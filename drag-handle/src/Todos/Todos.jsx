import React, { Component, useState } from 'react'
import {
  sortableContainer,
  sortableElement,
  sortableHandle
} from 'react-sortable-hoc'
import arrayMove from 'array-move'
import styled from 'styled-components'
import MoreVert from './MoreVert'


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
`;

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
    return (
      <ListItemContent>
        <TitleInput value={this.state._value} onChange={this.handleValueChange} />
        <MoreVert fill="orange" />
      </ListItemContent>
    )
  }
}

// const DragHandle = sortableHandle(() => <div style={handle}>::</div>)
const DragHandle = sortableHandle(() => <Handle>::</Handle>)


const SortableItem = sortableElement(({ value }) => (
  // <li style={listItem}>
  //   <DragHandle />
  //   <ListContent />
  // </li>
  <ListItem>
    <DragHandle />
    <ListContent />
  </ListItem>
))

const SortableContainer = sortableContainer(({ children }) => {
  // return <ul style={listStyle}>{children}</ul>
  return <List>{children}</List>
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
