import React from 'react'

function Button(props) {
  return (
    <span className='w-fit'>
      <button className={`font-semibold text-lg bg-black p-2 m-2 rounded-xl hover:border-2 hover:border-cyan-600 px-4 hover:text-cyan-600 border-2    ${props.style}`} onClick={props.click}>{props.text}</button>
    </span>
  )
}

export default Button
