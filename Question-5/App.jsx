import {
  useState,
  useRef,
  useEffect,
  useCallback,
  Suspense,
  useContext,
} from "react";
import React from "react";
import { BusinessCard } from "./components/BusinessCard";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Profile from "./components/Profile";
import { useForm } from "react-hook-form";
import "./App.css";
import ParagraphGenerator from "./components/ParagraphGenerator";
import GitHubInfoCard from "./components/GitHubInfoCard";

const App = () => {
  const [username, setUsername] = useState("octocat");
  const [submittedUsername, setSubmittedUsername] = useState("octocat");
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedUsername(username);
  };
  return (
    <div className="App">
      <h1>GitHub Info Card</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
        <button type="submit">Fetch Info</button>
      </form>
      <GitHubInfoCard username={submittedUsername} />
    </div>
  );
};

export default App;
