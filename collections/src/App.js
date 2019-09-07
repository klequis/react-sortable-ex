import React, { useState } from 'react'
import { sortableContainer, sortableElement } from 'react-sortable-hoc'
import arrayMove from 'array-move'

const SortableItem = sortableElement(({ value }) => <li>{value}</li>)

const SortableContainer = sortableContainer(({ children }) => {
  return <ul>{children}</ul>
})

const initCollections = [[0, 1, 2], [0, 1, 2, 3, 4], [0, 1, 2]]

const App = () => {
  const [collections, setCollections] = useState(initCollections)

  const onSortEnd = ({ oldIndex, newIndex, collection }) => {
    const newCollections = [...collections]

    newCollections[collection] = arrayMove(
      collections[collection],
      oldIndex,
      newIndex
    )

    setCollections(newCollections)
  }

  return (
    <SortableContainer onSortEnd={onSortEnd}>
      {collections.map((items, index) => (
        <React.Fragment key={index}>
          <strong>LIST {index}</strong>
          <ul>
            {items.map((item, i) => (
              <SortableItem
                key={item}
                value={`Item ${item}`}
                index={i}
                collection={index}
              />
            ))}
          </ul>
        </React.Fragment>
      ))}
    </SortableContainer>
  )
}

export default App
