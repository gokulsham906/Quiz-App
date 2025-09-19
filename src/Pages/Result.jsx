import React from "react";
import { questions } from "./Quiz";
import { useNavigate } from "react-router-dom";

const Result = ({ user, score }) => {
  const navigate = useNavigate();

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
      <h1>Quiz Completed!</h1>
      <h2>
        Hello {user}, your score is {score} / {questions.length}
      </h2>
      <button onClick={() => navigate("/home")} style={{ padding: "0.5rem 1rem" }}>
        Back to Home
      </button>
    </div>
  );
};

export default Result;
