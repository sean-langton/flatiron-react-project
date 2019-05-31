import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
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

  handleScore = (event) => {
    this.setState({
      score: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    debugger;
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
        <Form.Control as="select" name="playerId" onChange={this.handlePlayerChange} >
          {this.listPlayers()}
        </Form.Control>
        <fieldset>
        <Form.Group>
          <Form.Check type="radio" action value={1} name="scores" onClick={this.handleScore} label={`Bogey: ${this.state.bogey}`} />
          <Form.Check type="radio" action value={0} name="scores" onClick={this.handleScore} label={`Par: ${this.state.par}`} />
          <Form.Check type="radio" action value={-1} name="scores" onClick={this.handleScore} label={`Birdie: ${this.state.birdie}`} />
          <Form.Check type="radio" action value={-2} name="scores"onClick={this.handleScore} label={`Eagle: ${this.state.eagle}`} />
        </Form.Group>
        </fieldset>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}
