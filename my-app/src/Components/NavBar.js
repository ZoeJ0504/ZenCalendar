import React from "react"
import { Link } from "react-router-dom"
import Home from "./Home"
import ToDoList from "./ToDoList"
import Calendar from "./Calendar"
import Food from "./Food"

function NavBar() {
    return (
        <div>
            <Link to="*" element={<Home />}>Home</Link>
            <Link to="/*todoList" element={<ToDoList />}> ToDoList</Link>
            <Link to="/*calendar" element={<Calendar />}> Calendar</Link>
            <Link to="/*food" element={<Food />}>Food</Link>
        </div>
    )
}

export default NavBar