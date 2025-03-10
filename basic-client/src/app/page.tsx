"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import LoginForm from "@/components/forms/LoginForm";
import ResponseMessage from "@/components/forms/ResponseMessage";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, pw }),
      });
      const data = await res.text();
      setResponse(data);
    } catch (err) {
      console.error("Error:", err);
      setResponse("Login failed");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <Header />
      <LoginForm
        id={id}
        pw={pw}
        onIdChange={(e) => setId(e.target.value)}
        onPwChange={(e) => setPw(e.target.value)}
        onSubmit={handleSubmit}
      />
      <ResponseMessage message={response} />
    </div>
  );
}
