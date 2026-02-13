import { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        onLogin();
      } else {
        setError(data.message || "Login failed");
      }
  } catch (err) {
    setError("an error occurred during login/ server error");
  }
  };
     
     return(
        <div style={{ 
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <div style={{ maxWidth: "500px", padding: "30px", backgroundColor: "rgba(255, 255, 255, 0.95)", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: "100%", padding: "10px", marginBottom: "10px", boxSizing: "border-box" }}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: "100%", padding: "10px", marginBottom: "10px", boxSizing: "border-box" }}
              />

              <button type="submit" style={{ width: "100%" }}>Login</button>
              </form>
                {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
        </div>
      );
}
export default Login;