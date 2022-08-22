import React from "react"
import {
    Switch,
    Route
} from "react-router"
import Home from "../Page/Home"
import TodoList from '../Page/TodoList'
import Food from '../Page/Food'
import Calendar from '../Page/Calendar'

function NavBar() {
    return (
        <Switch>
            <Route path="/">
                <Home />
            </Route>
            <TodoList />
            <Food />
            <Calendar />
        </Switch>

    )
}
export default NavBar