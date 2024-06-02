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

const App = () => {
  return (
    <div className="App">
      <OTPLogin />
    </div>
  );
};

export default App;
