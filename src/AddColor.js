import React from 'react'

const AddColor = ({color, setColor}) => {
    return (
        <form onSubmit={(e)=>e.preventDefault()}> 
        <input 
            type="text"
            place="Add color"
            value={color}
            onChange={(e)=>setColor(e.target.value)}
        />
        
        </form>
    )
}

export default AddColor

