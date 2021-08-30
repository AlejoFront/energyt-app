import React from 'react'

const ItemsFooter = ({value, change, label, edit}) => {
    return (
        <div className='form__group'>
            <label>{label}</label>
            <input 
                type='text' 
                className='input_Foot' 
                value={value} 
                onChange={(e) => change(e.target.value)}
                disabled={edit}    
            />
        </div>
    )
}

export default ItemsFooter
