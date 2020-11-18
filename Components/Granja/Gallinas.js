import React, { Component } from 'react'

export default class Gallinas extends Component {
    render() {
        if (this.props.estado == 1) {
            return (
                <div>
                    <h1>HUEVOS</h1>
                    <img src="https://ep01.epimg.net/elpais/imagenes/2020/02/20/estilo/1582190872_291135_1582192738_noticia_normal_recorte1.jpg" />
                </div>
            )
        } else {
            return (
                <div>
                    <h1>GALLINAS</h1>
                    <img src="https://myanimals.com/es/wp-content/uploads/2018/12/taman%CC%83os-de-gallinas.jpg" />
                </div>
            )
        }
    }
}
