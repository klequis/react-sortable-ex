import React, { useState } from 'react';
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";

const SortableItem = sortableElement(({ value }) => <li>{value}</li>);

const SortableContainer = sortableContainer(({ children }) => {
  return <ul>{children}</ul>;
});

const initItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"]

const App = () => {
  const [items, setItems] = useState(initItems)

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };


    return (
      <SortableContainer onSortEnd={onSortEnd}>
        {items.map((value, index) => (
          <SortableItem key={`item-${value}`} index={index} value={value} />
        ))}
      </SortableContainer>
    );
}

export default App;
