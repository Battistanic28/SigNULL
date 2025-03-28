import { useState } from "react";
import { loginUser } from "../api";
import { useAuth } from "../hooks/useAuth";
import './styles.css'

const Login = () => {
  const { handleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const formData = {'email': email, 'password': password}

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    const result = await loginUser(formData);

    // Define AuthResponse type
    if (typeof result === "object") {
      const {access_token, user} = result;
      handleLogin(access_token, user);
    } else {
      setError(result);
    }
  };

  return (
    <div className="form-container">
      <h3>Login</h3>
      {error && <p className="error-message">{error}</p>}
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
