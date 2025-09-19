import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const questions = [
  { question: "What is React?", options: ["Library", "Framework", "Language"], answer: "Library" },
  { question: "Who developed React?", options: ["Google", "Facebook", "Microsoft"], answer: "Facebook" },
];

const Quiz = ({ setScore }) => {
  const [questionIdx, setQuestionIdx] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (selectedAns) => {
    const isCorrect = selectedAns.trim().toLowerCase() === questions[questionIdx].answer.trim().toLowerCase();
    if (isCorrect) setScore(prev => prev + 1);

    if (questionIdx < questions.length - 1) setQuestionIdx(prev => prev + 1);
    else navigate("/result");
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
      <h1>Quiz Page</h1>
      <h2>{questions[questionIdx].question}</h2>
      {questions[questionIdx].options.map((option, idx) => (
        <button
          key={idx}
          onClick={() => handleAnswer(option)}
          style={{ padding: "0.5rem 1rem", margin: "5px" }}
        >
          {option}
        </button>
      ))}
      <button onClick={() => navigate("/home")} style={{ padding: "0.5rem 1rem", marginTop: "1rem" }}>
        Back to Home
      </button>
    </div>
  );
};

export default Quiz;
