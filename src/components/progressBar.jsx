import { useState } from "react";
import '../styles/progressBar.css'

const styles = {
  container: {
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.452)",
    borderRadius: "8px",
    overflow: "hidden",
    height: "25px",
  },
  bar: {
    height: "100%",
    background: "linear-gradient(90deg, #aa00ffff, #f200ffff)",
    transition: "width 0.4s ease",
  },
};

export default function ProgressBar({progress, level}) {

  return (
    <div style={{ width: "95%", maxWidth: "400px", margin: "5px auto" }}>
      <p className="level-text" style={{ textAlign: "center", marginTop: "0", marginBottom: '0' }}>{`level ${level}`}</p>
      <div style={styles.container}>
        <div style={{ ...styles.bar, width: `${progress * 5}%` }} />
      </div>
    </div>
  );
}
