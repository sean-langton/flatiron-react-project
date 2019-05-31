import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
export default class ScoreInput extends Component {

  state = {
    holeId: "",
    playerId: "",
    bogey: "",
    par: "",
    birdie: "",
    eagle: "",
    score: ""
  }

  handleHoleChange = (event) => {
    let hole = this.props.holes.filter(hole => hole.id == event.target.value)[0]
    debugger;
    this.setState({
      holeId: hole.id,
      bogey: "Failed Eagle Attempt",
      par: hole.par,
      birdie: hole.birdie,
      eagle: hole.eagle
    });
  }

  handlePlayerChange = (event) => {
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
          <option key={index} value={player.id}>  {player.name} </option>
        )
      })
  }

  listHoles = () => {
    return this.props.holes.map((hole,index) => {
        return (
          <option key={index} value={hole.id}>  {hole.name} </option>
        )
      })
  }

  render() {
    return (
      <Form onSubmit={this.handleOnSubmit}>
        <Form.Label> Select Hole </Form.Label>
        <Form.Control as="select" name="holeId" onChange={this.handleHoleChange} >
          {this.listHoles()}
        </Form.Control>
        <Form.Label> Select Player </Form.Label>
        <Form.Control as="select" name="playerId" value={this.state.holeId} onChange={this.handlePlayerChange} >
          {this.listPlayers()}
        </Form.Control>
        <ListGroup className="hole-scores">
          <ListGroup.Item> Bogey: {this.state.bogey} </ListGroup.Item>
          <ListGroup.Item> Par: {this.state.par} </ListGroup.Item>
          <ListGroup.Item> Birdie: {this.state.birdie} </ListGroup.Item>
          <ListGroup.Item> Eagle: {this.state.eagle} </ListGroup.Item>
        </ListGroup>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}
