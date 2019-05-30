import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

const HoleList = props => {
  function listOfHoles(){
    return props.holes.map((hole,index) => {
      debugger;
        return (
          <div key={index}>
            <Card>
              <Card.Body>
                <Card.Title> {hole.name}</Card.Title>
                <Card.Text>
                  {new Date(hole.start_time).toLocaleTimeString('en-US')} | {hole.duration} minutes
                  <Button href={"holes/"+hole.id+"/delete"}> Delete </Button>
                </Card.Text>
              </Card.Body>
              <ListGroup className="hole-scores">
                <ListGroup.Item> Bogey: Failed Eagle Attempt </ListGroup.Item>
                <ListGroup.Item> Par: {hole.par} </ListGroup.Item>
                <ListGroup.Item> Birdie: {hole.birdie} </ListGroup.Item>
                <ListGroup.Item> Eagle: {hole.eagle} </ListGroup.Item>
              </ListGroup>
            </Card>
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
