import React, { Component } from 'react';

const cursos = [
    { nome: "React" },
    { nome: "Redux" },
    { nome: "Node JS" },
    { nome: "React Native" }
];

export default class Curso extends Component {
    render() {
        return (
            <div>
                <h1>Você está olhando o curso de {cursos[this.props.params.id].nome}</h1>
            </div>
        );
    }
}