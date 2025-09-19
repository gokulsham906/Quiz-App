import React from "react";
import { useNavigate } from "react-router-dom";

const Home = ({ user, setUser, setScore }) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setScore(0);
    navigate("/quiz");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        flexDirection: "column",
        textAlign: "center",
        gap: "1rem",
      }}
    >
      <h1>Welcome to Quiz App!</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}
      >
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          onChange={(e) => setUser(e.target.value)}
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        />
        <button disabled={user.length === 0} type="submit" style={{ padding: "0.5rem 1rem" }}>
          Start Quiz
        </button>
      </form>
    </div>
  );
};

export default Home;
