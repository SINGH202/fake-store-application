import React from "react";
import { NavLink } from "react-router-dom";

const links = [
    {
        title:"Home",
        to:"/"
    },
    {
        title:"About",
        to:"/about"
    },
    {
        title:"Product",
        to:"/product"
    },
    {
        title:"Login",
        to:"/login"
    }
]

const Navbar = () =>{
    return(
        <div style={{backgroundColor:"gray", padding:"20px"}}>
            {links.map(({title, to}, index) =>{
                return <NavLink key={index} to={to} style={{padding:10, textDecoration:"none"}} activeStyle={{fontWeight:"bold", color:"red"}}>{title}</NavLink>
            })}
        </div>
    )
}

export default Navbar;