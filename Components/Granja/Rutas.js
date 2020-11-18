import React, { Component } from 'react'

export default class Rutas extends Component {
    render() {
        return (
            <div>
                <h1>Rutas con href</h1>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/gallinas">Gallinas</a></li>
                    <li><a href="/gallinas/1">Gallinas/1</a></li>
                    <li><a href="/vacas">Vacas</a></li>
                    <li><a href="/cerdos">Cerdos</a></li>
                </ul>
            </div>

        )
    }
}
