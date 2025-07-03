import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { Link, useNavigate } from 'react-router-dom';
import PasswordInput from '../Password/passwordInput';
import { validateEmail } from '../utilis/helper';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      if (!validateEmail(email)) {
        setError("Please enter a valid email address.");
        return;
      }

      if (!password) {
        setError("Please enter the password");
        return;
      }

      if (!Array.isArray(userData)) {
        setError("No registered users found.");
        return;
      }

      const matchedUser = userData.find(
        (user) => user.email === email && user.password === password
      );

      if (matchedUser) {
        const updatedUsers = userData.map((user) =>
          user.email === matchedUser.email
            ? { ...user, logged_in: 1 }
            : user
        );

        localStorage.setItem("userData", JSON.stringify(updatedUsers));
        localStorage.setItem("loggedIn", JSON.stringify({
          email: matchedUser.email,
          logged_in: 1,
        }));

        window.location.href = "/home";
        navigate("/home");

        setError("");
        console.log("✅ Login successful!");
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autocomplete="current-password"
        />

        {error && <p>{error}</p>}

        <button type="submit">
          Login
        </button>
      </form>

      <p>
        Not registered yet?{" "}
        <Link to="/signup">
          Create an Account
        </Link>
      </p>
    </>
  );
};

export default Login;
