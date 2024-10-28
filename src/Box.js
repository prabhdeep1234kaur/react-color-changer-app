import React from 'react'

export const Box = ({color}) => {
  return (
    <div 
        className="box"
        style={{backgroundColor : `${color}`}}   
    >
        <p className="box-text">{color ? color: "Empty Color"}</p>
    </div>
  )
}

Box.defaultProps = {
    color: "Empty Color"
}
