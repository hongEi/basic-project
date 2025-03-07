"use client"; // 클라이언트 컴포넌트로 설정

import { useState } from 'react';

export default function Home() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, pw }),
      });
      const data = await res.json();
      setResponse(data.message);
    } catch (err) {
      console.error('Error:', err);
      setResponse('Login failed');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>ID: </label>
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="Enter ID"
          />
        </div>
        <div style={{ margin: '10px 0' }}>
          <label>Password: </label>
          <input
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="Enter Password"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {response && <p>Server Response: {response}</p>}
    </div>
  );
}