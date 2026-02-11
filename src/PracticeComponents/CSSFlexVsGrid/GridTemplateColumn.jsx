function GridTemplateColumn() {
  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: 'repeat(3, 1fr)',
    gap: '10px',
    borderRadius: '8px',
    height: '400px' // Added height to see the row effect
  };

  const itemStyle = {
    backgroundColor: '#4f46e5',
    color: 'white',
    padding: '20px',
    textAlign: 'center',
    borderRadius: '6px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  };

  const featuredStyle = {
    ...itemStyle,
    gridColumn: 'span 2' // Makes the featured item span 2 columns
  };

  return (
    <div style={containerStyle}>
      <div style={featuredStyle}>1</div>
      <div style={itemStyle}>2</div>
      <div style={itemStyle}>3</div>
      <div style={itemStyle}>4</div>
      <div style={itemStyle}>5</div>
      <div style={itemStyle}>6</div>
      <div style={itemStyle}>7</div>
      <div style={itemStyle}>8</div>
      <div style={itemStyle}>9</div>
      <div style={itemStyle}>10</div>
    </div>
  );
}

export default GridTemplateColumn;