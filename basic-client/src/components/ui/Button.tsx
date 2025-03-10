import React from "react";

export default function Button() {
  return (
    <button
      type="submit"
      style={{
        padding: '10px',
        fontSize: '16px',
        backgroundColor: '#0070f3',
        color: 'white',
        border: 'none',
        cursor: 'pointer'
      }}
    >
      Login
    </button>
  );
}