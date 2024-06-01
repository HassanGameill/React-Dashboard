import React, { useState, useRef, useEffect } from 'react';
import './scrollpicker.css';

const ScrollPicker = ({ items, selectedItem, onChange }) => {
  const listRef = useRef(null);

  const handleScroll = () => {
    const scrollTop = listRef.current.scrollTop;
    const itemHeight = listRef.current.childNodes[0].offsetHeight;
    const index = Math.round(scrollTop / itemHeight);
    onChange(items[index]);
  };

  useEffect(() => {
    const itemHeight = listRef.current.childNodes[0].offsetHeight;
    const selectedIndex = items.indexOf(selectedItem);
    listRef.current.scrollTop = selectedIndex * itemHeight;
  }, [selectedItem, items]);

  return (
    <div className="scroll-picker">
      <ul ref={listRef} onScroll={handleScroll}>
        {items.map((item, index) => (
          <li key={index} className={item === selectedItem ? 'selected' : ''}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollPicker;
