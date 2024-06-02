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
import OTPLogin from "./components/OTPLogin";
import Form from "./components/Form";
import WishCards from "./components/WishCards";

const App = () => {
  const [name, setName] = useState("");

  const handleNameChange = (newName) => {
    setName(newName);
  };
  return (
    <div className="App">
      <h1>Birthday Wisher</h1>
      <Form onChangeName={handleNameChange} />
      {name && <WishCards name={name} />}
    </div>
  );
};

export default App;
