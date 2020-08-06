import React from 'react'

export default props => {
    return (
        <div>
            <h2>
                Oi eu sou {props.name} de {props.arena} <img src={props.img} width='200' height='200'/>
            </h2>
        </div>
    )
}