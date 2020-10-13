import Card from './Card'
import './Navigate.css'
import React, { Component } from 'react'

import { connect } from 'react-redux'
import { alterarValor } from '../store/actions/createAction'
class Navigate extends Component {

    soma() {
        const soma = this.props.valor1 + this.props.valor2
        this.props.alterarValor(soma)
    }
    multiplicacao() {
        const multiplicacao = (this.props.valor1 < 0) ? 0 : this.props.valor2 * this.props.valor1
        this.props.alterarValor(multiplicacao)
    }

    maior() {
        const maior = (this.props.valor1 < this.props.valor2) ? this.props.valor2 : this.props.valor1
        this.props.alterarValor(maior)
    }

    render() {
        return (
            <Card title='valores' red>
                <div className='navigate'>
                    <input value={this.props.valor1} />
                    <input value={this.props.valor2} />                    
                </div>
            </Card>
        )
    }
}

function mapStateToProps(state) {
    return {
        valor1: state.Valor1.valor1,
        valor2: state.Valor2.valor2,
        soma: state.Soma.soma,
        multiplicacao: state.Multiplicacao.multiplicacao,
        maior: state.Maior.maior,
    }
}

function mapActionCreatorToProps(dispatch) {
    return {
        alterarValor(novoValor) {
            const action = alterarValor(novoValor)
            dispatch(action)
        }
    }
}



export default connect(mapStateToProps, mapActionCreatorToProps)(Navigate)