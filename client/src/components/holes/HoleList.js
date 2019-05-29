import React from 'react'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
const HoleList = props => {
  function listOfHoles(){
    return props.holes.map((hole,index) => {
        return (
          <div>
          <h3> {hole.name} </h3>
          </div>
        )
      })
    }

  return (
    <div>
      {listOfHoles()}
    </div>
  )

}

export default HoleList
