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

  render() {
    debugger;
    return (
      <Form onSubmit={this.handleOnSubmit}>

      </Form>
    )
  }
}
