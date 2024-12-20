import React from "react";

export default function StudentItem(props) {
  return (
    <button
      style={{
        width: "300px",
        background: props.index % 2 === 0 ? "#f0f0f0" : "#e0e0e0",
        color: "#000",
        padding: "10px 0",
        borderRadius: 7,
        border: "1px solid #ccc",
        fontSize: 16,
        cursor: "pointer",
        textAlign: "center",
      }}
    >
      {props.student.first_name} {props.student.last_name}
    </button>
  );
}
