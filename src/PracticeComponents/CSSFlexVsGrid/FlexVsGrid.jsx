function FlexVsGrid() {
  const boxStyle = {
    backgroundColor: "#4f46e5",
    color: "white",
    padding: "12px",
    textAlign: "center",
    borderRadius: "6px"
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Flexbox Example</h2>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
          marginBottom: "12px",
          border: "2px solid red"
        }}
      >
        <div style={boxStyle}>One</div>
        <div style={boxStyle}>Two</div>
        <div style={boxStyle}>Three</div>
      </div>

      <p style={{ color: "#555", fontSize: "14px" }}>
        Flexbox is used for one-dimensional layouts (row or column). It’s ideal
        for aligning items like navbars, buttons, and cards.
      </p>

      <hr style={{ margin: "24px 0" }} />

      <h2>Grid Example</h2>

      <div
        style={{
          display: "grid",
          // gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateColumns: "1fr 3fr 1fr",
          gap: "12px",
          marginBottom: "12px"
        }}
      >
        <div style={boxStyle}>A</div>
        <div style={boxStyle}>B</div>
        <div style={boxStyle}>C</div>
        <div style={boxStyle}>D</div>
        <div style={boxStyle}>E</div>
        <div style={boxStyle}>F</div>
      </div>

      <p style={{ color: "#555", fontSize: "14px" }}>
        Grid is used for two-dimensional layouts (rows and columns). It’s best
        for page layouts, dashboards, and structured designs.
      </p>
    </div>
  );
}

export default FlexVsGrid;
