import React from 'react'
import Button from 'react-bootstrap/Button'

const HoleList = props => {
  debugger;
  function listOfHoles(){
    return props.holes.holes.map((hole,index) => {
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
