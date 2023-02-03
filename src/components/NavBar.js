import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar(){
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/Toronto" activeClassName="activeLink">Toronto</NavLink>
                </li>
                <li>
                    <NavLink to="/Madrid" activeClassName="activeLink">Madrid</NavLink>
                </li>
                <li>
                    <NavLink to="/Tokyo" activeClassName="activeLink">Tokyo</NavLink>
                </li>
            </ul>
        </nav>
    )
}