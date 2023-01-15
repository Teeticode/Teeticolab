import React from 'react'

function Chevron(props) {
  return (
    <div>
        <i style={{fontSize:'20px'}} className={`uil uil-arrow-circle-right ${props.active === ''? 'rotate': ''}`}></i>
    </div>
  )
}

export default Chevron