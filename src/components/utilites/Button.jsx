import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button className='text-white bg-primary py-4 px-8'>
                {{ props.text }}
            </button>
        </div>
    )
}

export default Button
