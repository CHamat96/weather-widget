import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavStyles = styled.nav`
max-width:90%;
margin:25px auto;
a {
        text-decoration:none;
        color:var(--black);
        font-size:2.2rem;
        font-weight:300;
        text-transform:uppercase;
        &.active {
            font-weight:600;
            color:var(--blue);        
        }
    }

    ul {
        display:flex;
        justify-content:space-around;
        align-items:center;
        flex-wrap:wrap;
    }

    li {
        padding:10px;
    }


`

export default function NavBar(){
    return (
        <NavStyles>
            <ul>
                <li>
                    <NavLink to="/" activeclassname="activeLink">Toronto</NavLink>
                </li>
                <li>
                    <NavLink to="/Madrid" activeclassname="activeLink">Madrid</NavLink>
                </li>
                <li>
                    <NavLink to="/Tokyo" activeclassname="activeLink">Tokyo</NavLink>
                </li>
            </ul>
        </NavStyles>
    )
}