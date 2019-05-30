import React from 'react'
import Button from 'react-bootstrap/Button'
import Hole from './Hole'
const HoleList = props => {
  function listOfHoles(){
    return props.holes.map((hole,index) => {
        return (
          <div key={index}>
            <Hole hole={hole}/>
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
