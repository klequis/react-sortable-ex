import React, { useState } from 'react'
import { sortableContainer, sortableElement } from 'react-sortable-hoc'
import arrayMove from 'array-move'

import ItemContent from './ItemContent'
import styled from 'styled-components'

export const ListItem = styled.li`
  display: 'flex'; 
  box-align: 'center';
  align-items: 'center';
  width: '100%';
  padding: '0 20px';
  background-color: '#fff';
  box-sizing: 'border-box';
  position: 'relative';
`
export const List = styled.ul`
  /* list-style-type: none; */
  /* margin-block-start: 0; */
  /* margin-block-end: 0; */
  /* margin-inline-start: 0; */
  /* margin-inline-end: 0; */
  /* padding-inline-start: 0; */

  // //
  list-style: none;
  position: relative;
  z-index: 0;
  background-color: '#f3f3fe';
  border: '1px solid #efefef';
  outline: 'none';
  user-select: 'none'; // solves the selection while drag problem
  color: '#333';
  font-weight: 300;
`

/* <DragHandle /> <button>{value}</button> */
const SortableItem = sortableElement(({ value }) => {
  return (
    <ListItem>
      <ItemContent value={value} />
    </ListItem>
  )
})

const SortableContainer = sortableContainer(({ children }) => {
  return <List>{children}</List>
})

const initItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6']

const Todos = () => {
  const [items, setItems] = useState(initItems)

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex))
  }

  return (
    <SortableContainer onSortEnd={onSortEnd}>
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </SortableContainer>
  )
}

export default Todos
