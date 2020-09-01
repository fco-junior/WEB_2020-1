import React, { Component } from 'react'
import axios from 'axios'
import TableRow from './TableRow.jsx'

export default class List extends Component {

    constructor(props) {
        super(props)
        this.state = { disciplinas: [] }
    }

    componentDidMount() {
        axios.get('http://localhost:3002/disciplinas/list')
            .then(
                (res) => {
                    this.setState({ disciplinas: res.data })
                }
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }


    montarTabela() {
        if (!this.state.disciplinas) return
        return this.state.disciplinas.map(
            (disciplina, i) => {
                return <TableRow disciplina={disciplina} key={i} />;
            }
        )
    }

    render() {
        return (
            <div>
                <p>Listar disciplinas</p>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>Capacidade</th>
                            <th colSpan="2" style={{ textAlign: "center" }}>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.montarTabela()}
                    </tbody>
                </table>
            </div>
        )
    }
}