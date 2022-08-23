import React from "react"
import { Link } from "react-router-dom"
import Home from "../Page/Home"
import ToDoList from "../Page/ToDoPage"
import CalendarPage from "../Page/CalendarPage"
import Food from "../Page/Food"
import styled from '@emotion/styled'
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';

function NavBar() {
    return (
        <NavBarDiv>
            <div> <SelfImprovementIcon sx={{ fontSize: 50 }} />  𝑍𝑒𝑛𝐶𝑎𝑙𝑒𝑛𝑑𝑎𝑟</div>
            <Link to="/" element={<Home />}>Home</Link>
            <Link to="/todoList" element={<ToDoList />}> ToDoList</Link>
            <Link to="/calendar" element={<CalendarPage />}> Calendar</Link>
            <Link to="/food" element={<Food />}>Food</Link>
        </NavBarDiv>
    )
}
const NavBarDiv = styled.div`
font-size: 24px;
padding: 20px;
display:flex;
justify-content:space-between;
background-color:#D4D2D5;
`

export default NavBar