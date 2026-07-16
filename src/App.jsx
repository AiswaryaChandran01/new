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

    <div
      style={{
        width: "350px",
        margin: "100px auto",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#6484be",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px gray"
      }}
    >

      <h1
        style={{
          color: "black"
        }}
      >
        Login Form
      </h1>

      <input
        type="text"
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          width: "90%",
          padding: "10px",
          marginBottom: "15px",
          borderRadius: "5px",
          border: "1px solid gray"
        }}
      />

      <br />

      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "90%",
          padding: "10px",
          marginBottom: "15px",
          borderRadius: "5px",
          border: "1px solid gray"
        }}
      />

      <br />

      <button
        onClick={login}
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Login
      </button>

    </div>

  );
}

export default App;