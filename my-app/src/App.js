import React from "react"
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home"
import ToDoList from './components/ToDoList';
import Calendar from './components/Calendar';
import Food from "./components/Food"

function App() {
  return (
    <div className="App">
      <p>Hello</p>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/*toDoList" element={< ToDoList />} />
        <Route path="/*calendar" element={<Calendar />} />
        <Route path="/*food" element={<Food />} />
      </Routes>
      <NavBar />

    </div>
  );
}

export default App;
