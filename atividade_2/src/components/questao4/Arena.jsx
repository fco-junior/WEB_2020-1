import React from 'react'

export default props => {
    return (
        <div>
            
            {React.Children.map(props.children, child => {
                return React.cloneElement(child, { ...props });
            })}

        </div>
    )
}