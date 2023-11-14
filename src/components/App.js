import { useState } from "react";
import Form from "./Form";
import "../index.css";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  //initial items in list is 0
  const [items, setItems] = useState([]);
  //add items using functional paradigm
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  //delete a specific item
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  //toggle item is packed or not
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  //clear all items
  function handleClearItems() {
    //if no items just return;
    if (!items.length) return;
    //confirm box
    const confirmed = window.confirm(
      "You Sure Want To Delete All The Items in the list 🤔"
    );
    //if yes then delete else do nothing
    if (confirmed) setItems([]);
  }

  //jsx
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        onUpdateItems={handleToggleItem}
        onDeleteItems={handleDeleteItems}
        onClearItems={handleClearItems}
        items={items}
      />
      <Stats items={items} />
    </div>
  );
}
