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
            <ListGroup varient="flush">
            {props.team.players.map((player) => <ListGroup.Item> {player.name} </ListGroup.Item>)}
            </ListGroup>
            <Button onClick={props.deleteTeam} name={props.team.id} value={props.team.tournament.id} > Delete </Button>
          </Card.Text>
        </Card.Body>
      </Card>
  )
}

export default Team
