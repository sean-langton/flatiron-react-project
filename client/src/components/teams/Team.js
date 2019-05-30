import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

const Team = props => {
  return (
      <Card>
        <Card.Body>
          <Card.Title> {props.team.name}</Card.Title>
          <Card.Text>
            <Button onClick={props.deleteTeam} name={props.team.id} value={props.hole.tournament.id} > Delete </Button>
          </Card.Text>
        </Card.Body>
      </Card>
  )
}

export default Team
