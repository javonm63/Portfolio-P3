import React, { useState } from "react";

const ToggleButton = ({ label = "Music", onToggle }) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    if (onToggle) {
      onToggle(newState)
    } else {
      
    };
  };

  return (
    <div style={styles.wrapper}>
      <span style={styles.label}>{label}</span>
      <div
        onClick={handleToggle}
        style={{
          ...styles.toggle,
          background: isOn ? "#4cd964" : "#d6d6d6",
        }}
      >
        <div
          style={{
            ...styles.knob,
            transform: isOn ? "translateX(22px)" : "translateX(0)",
            background: isOn ? "#fff" : "#f2f2f2",
          }}
        ></div>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "#a8a8a8ff",
    borderRadius: "12px",
    padding: "10px 16px",
    width: "65%",
    boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
    fontFamily: "'Poppins', sans-serif",
    marginBottom: '20px'
  },
  label: {
    fontSize: "1rem",
    color: "#333333d0",
    fontWeight: "600",
  },
  toggle: {
    width: "46px",
    height: "24px",
    borderRadius: "20px",
    cursor: "pointer",
    position: "relative",
    transition: "background 0.3s ease",
  },
  knob: {
    width: "22px",
    height: "22px",
    borderRadius: "50%",
    position: "absolute",
    top: "1px",
    left: "1px",
    transition: "transform 0.3s ease, background 0.3s ease",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
  },
};

export default ToggleButton;