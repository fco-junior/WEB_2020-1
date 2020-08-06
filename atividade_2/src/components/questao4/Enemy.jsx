import React from 'react'

export default props => {
    return (
        <div>
            <div className='card' Style='width: 25rem;'>
                <div className='card-body'>
                    <h2 className='card-title'>Enemy: Prince Vegeta</h2>
                    <h3 className='card-subtitle mb-2'>Arena: {props.arena}</h3>
                    <img className='card-img-top' src={props.img} height='220' />
                    <h4 className='card-text text-muted'>
                        Eu sou {props.name}, seu verme insolente!
                    </h4>
                </div>
            </div>
            <br/>
        </div>
        
    )
}