import React, {Component} from 'react'

export default class Questao4 extends Component {
    render(){
        return (
            <div>
                {React.Children.map(this.props.children, Questao2 => {
                    return React.cloneElement(Questao2, { ...this.props })
                })}
            </div>
        )
    }
}