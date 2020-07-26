import React from 'react'

export default props => {
    return (
        <div>
            {React.Children.map(props.children, Questao1 => {
                return React.cloneElement(Questao1, { ...props })
            })}
        </div>
    )
}