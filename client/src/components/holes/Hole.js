import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const Hole = props => {
  debugger;
  return (
      <Card>
        <Card.Body>
          <Card.Title> {props.hole.name}</Card.Title>
          <Card.Text>
            {new Date(props.hole.start_time).toLocaleTimeString('en-US')} | {props.hole.duration} minutes
          </Card.Text>
        </Card.Body>
        <ListGroup className="hole-scores">
          <ListGroup.Item> Bogey: Failed Eagle Attempt </ListGroup.Item>
          <ListGroup.Item> Par: {props.hole.par} </ListGroup.Item>
          <ListGroup.Item> Birdie: {props.hole.birdie} </ListGroup.Item>
          <ListGroup.Item> Eagle: {props.hole.eagle} </ListGroup.Item>
        </ListGroup>
      </Card>
  )
}

export default Hole
