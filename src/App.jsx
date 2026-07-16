import { useState } from "react";

function App() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function login() {

    if (username === "admin" && password === "1234") {
      alert("Login Successful");
    } else {
      alert("Invalid Username or Password");
    }

  }

  return (
    <div>

      <h1>Login Form</h1>

      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={login}>
        Login
      </button>

    </div>
  );

}

export default App;