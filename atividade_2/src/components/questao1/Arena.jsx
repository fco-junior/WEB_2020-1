import React from 'react'
import { GOKU, VEGETA } from '../../constants'

const Hero = props =>
    <h2> Oi eu sou {props.name} <img src={props.img} width='200' height='200'/> </h2>

const Enemy = props =>
    <h2> Eu sou {props.name}, seu verme insolente <img src={props.img} width='200' height='150'/> </h2>

export default props => {

    return (
        <div>
            <Hero name='Goku' img={GOKU}/>
            <Enemy name='Vegeta' img={VEGETA} />
        </div>
    )

}