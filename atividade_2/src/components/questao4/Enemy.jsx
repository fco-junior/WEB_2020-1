import React from 'react'

export default props => {
    return (
        <div>
            <h2>
                Eu sou {props.name} de {props.arena}, seu verme insolente <img src={props.img} width='200' height='200'/>
            </h2>
        </div>
    )
}