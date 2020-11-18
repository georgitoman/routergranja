import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AnimalesMenu from './Granja/AnimalesMenu'
import Cerdos from './Granja/Cerdos'
import Gallinas from './Granja/Gallinas'
import Home from './Granja/Home'
import Vacas from './Granja/Vacas'

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <AnimalesMenu />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/gallinas" component={Gallinas} />
                    <Route exact path="/vacas" component={Vacas} />
                    <Route exact path="/cerdos" component={Cerdos} />
                    <Route exact path="/gallinas/:estado" render={props => {
                        var estado = props.match.params.estado;
                        return <Gallinas estado={estado} />
                    }} />
                </Switch>
            </BrowserRouter>
        )
    }
}
