import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class AnimalesMenu extends Component {
    render() {
        return (
            <div>
                <h1>Rutas con NavLink</h1>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/gallinas">Gallinas</NavLink></li>
                    <li><NavLink to="/vacas">Vacas</NavLink></li>
                    <li><NavLink to="/cerdos">Cerdos</NavLink></li>
                </ul>
            </div>

        )
    }
}
