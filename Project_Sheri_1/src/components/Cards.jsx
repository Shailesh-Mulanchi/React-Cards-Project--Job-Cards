import React from 'react'

const cards = (props) => {
  return (
  

      <div className="parent">
    <div className="card">
      <img src={props.img} alt="" />
        <h1>Memeber id:{props.memberId}</h1>
        <h3>Name:{props.name}</h3>
        <p>Address :{props.address}</p>
      <button> View Profile</button>
      </div>
    </div>
  )
}

export default cards
