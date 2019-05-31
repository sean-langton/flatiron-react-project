import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
export default class ScoreInput extends Component {

  state = {
    holeId: 0,
    playerId: 0,
    score: 0
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addScore(this.state)
    this.setState({
      holeId: 0,
      playerId: 0,
      score: 0
    })
  }
  listPlayers = () => {
    return this.props.players.map((player,index) => {
        return (
          <option key={index} id={player.id}>  {player.name} </option>
        )
      })
  }
  listHoles = () => {
    return this.props.holes.map((hole,index) => {
        return (
          <option key={index} id={hole.id}>  {hole.name} </option>
        )
      })
  }
  render() {
    return (
      <Form onSubmit={this.handleOnSubmit}>
        <Form.Label> Select Player </Form.Label>
        <Form.Control as="select">
          {this.listPlayers()}
        </Form.Control>
        <Form.Label> Select Hole </Form.Label>
        <Form.Control as="select">
          {this.listHoles()}
        </Form.Control>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}
