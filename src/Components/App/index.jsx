import React, { useState } from "react";

function ListItem({ item, onItemClick }) {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
    onItemClick(item);
  }

  return (
    <div
      className={`list-item ${isActive ? "active" : ""}`}
      onClick={handleClick}
    >
      {item}
    </div>
  );
}

function App1() {
  const [activeItem, setActiveItem] = useState(null);

  function handleItemClick(item) {
    if (activeItem === item) {
      setActiveItem(null);
    } else {
      setActiveItem(item);
    }
  }

  const items = ["item 1", "item 2", "item 3"];

  return (
    <div className="list">
      {items.map((item) => (
        <ListItem key={item} item={item} onItemClick={handleItemClick} />
      ))}
    </div>
  );
}

export default App1;
