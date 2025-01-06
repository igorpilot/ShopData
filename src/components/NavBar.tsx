import {NavLink} from "react-router-dom";
import {Button} from "@mui/material";


export const NavBar = ()=>{
    return <div>
        <NavLink to={'/inventory'}><Button variant="contained">Склад</Button></NavLink>
        <NavLink to={'/arrival'}><Button variant="contained">Приход</Button></NavLink>
        <NavLink to={'/sales'}><Button variant="contained">Продажі</Button></NavLink>
        <NavLink to={'/result'}><Button variant="contained">Звіт</Button></NavLink>

    </div>
}