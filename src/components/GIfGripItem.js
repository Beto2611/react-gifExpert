import React from 'react'

export const GIfGripItem = ({title,url}) => {
    return (
        <div className ="card animate__lightSpeedOutRight">
           <img src={url} alt={title}></img> 
           <p>{title}</p>
        </div>
    )
}
