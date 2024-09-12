import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Login.module.css";
import { useAuth } from "../context/AuthContext";
import brightLightLogo from "../assets/ogImage.png";

let predefinedUsername = "brightlight_immigration_user";
let predefinedPassword = "ephgstsyvbwnuxeb";

let Login = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let { login } = useAuth();
  let navigate = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    if (username === predefinedUsername && password === predefinedPassword) {
      alert("Login Successful. Redirecting to dashboard in few seconds.");
      localStorage.setItem("isLoggedIn", "true");
      login();
      setTimeout(() => {
        navigate("/users/admin/dashboard");
      }, 2000);
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className={styles.login}>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className={styles.submitButton} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
