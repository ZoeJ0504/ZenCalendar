import React from "react"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import Todolist from "../components/Todolist"
import styled from 'styled-components'

function Home() {
    return (
        <HomeDiv>
            <BigCalendarDiv>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                />
            </BigCalendarDiv>
        </HomeDiv>

    )
}

const HomeDiv = styled.div`
background-color: #F5F1ED;
`
const BigCalendarDiv = styled.div`
padding: 40px;
font-size: 10px;
height:75%;
width:700px;
`
export default Home