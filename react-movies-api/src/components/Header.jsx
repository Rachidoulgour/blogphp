import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css'

export default function Header(props){
    return(<ul>
        <li>
            <NavLink className="Home" to="/" exact activeClassName='active'>Home</NavLink>
            {/* <NavLink className="Movie" to="/Movie" exact activeClassName='active'>Movie</NavLink> */}
            <NavLink className="UpComing" to="/UpComing" exact activeClassName='active'>UpComing</NavLink>
            <NavLink className="Series" to="/Series" exact activeClassName='active'>Series</NavLink>
        </li>
    </ul>
)
    
    }