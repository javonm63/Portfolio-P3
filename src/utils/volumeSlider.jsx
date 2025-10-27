import React, { useState } from "react";
import { Volume2, VolumeX } from "lucide-react"; 

const VolumeSlider = ({ label = "Volume", onChange }) => {
  const [volume, setVolume] = useState(50);

  const handleChange = (e) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (onChange) onChange(newVolume);
  };

  return (
    <div style={styles.wrapper}>
      <span style={styles.label}>{label}</span>
      <div style={styles.control}>
        {volume === 0 ? (
          <VolumeX size={22} color="#890000ff" />
        ) : (
          <Volume2 size={22} color="#4b4b4bff" />
        )}
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleChange}
          style={{
            ...styles.slider,
            background: `linear-gradient(90deg, #02c623b3 ${volume}%, #e0e0e0 ${volume}%)`,
          }}
        />
        <span style={styles.value}>{volume}</span>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    background: "#a8a8a8ff",
    borderRadius: "16px",
    padding: "12px 16px",
    width: "65%",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    fontFamily: "'Poppins', sans-serif",
    marginBottom: '10px'
  },
  label: {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#333333d0",
    marginBottom: "8px",
  },
  control: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    gap: "10px",
  },
  slider: {
    appearance: "none",
    width: "100%",
    height: "8px",
    borderRadius: "8px",
    outline: "none",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
  value: {
    fontSize: "0.9rem",
    fontWeight: "500",
    color: "#666",
    width: "32px",
    textAlign: "right",
  },
};

export default VolumeSlider;