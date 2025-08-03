import React, { useState, useRef, useEffect } from 'react';

const ThreeDotsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const dotStyle = {
    width: '6px',
    height: '6px',
    backgroundColor: '#000',
    borderRadius: '50%',
    margin: '3px 0',
  };

  const menuButtonStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '6px',
    position: 'relative',
  };

  const dropdownStyle = {
    position: 'absolute',
    top: '100%',
    right: 0,
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '6px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
    zIndex: 4,
    padding: '8px 0',
    minWidth: '100px',
  };

  const itemStyle = {
    padding: '8px 12px',
    cursor: 'pointer',
    fontSize: '14px',
    whiteSpace: 'nowrap',
  };

  const itemHoverStyle = {
    backgroundColor: '#f0f0f0',
  };

  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }} ref={menuRef}>
      <div style={menuButtonStyle} onClick={() => setIsOpen(!isOpen)}>
        <div style={dotStyle}></div>
        <div style={dotStyle}></div>
        <div style={dotStyle}></div>
      </div>

      {isOpen && (
        <div style={dropdownStyle}>
          {['Edit', 'Delete'].map((item, index) => (
            <div
              key={item}
              style={{
                ...itemStyle,
                ...(hoveredItem === index ? itemHoverStyle : {}),
              }}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              onClick={() => {
                alert(`${item} clicked`);
                setIsOpen(false);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThreeDotsMenu;
