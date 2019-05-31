import React, { Component } from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { fetchHoles, fetchPlayers } from  '../components/actions/scoreActions';
import ScoreInput from '../components/scores/ScoreInput'
class ScoreContainer extends Component {

  componentDidMount() {
    this.props.fetchHoles(this.props.tournament_id)
    this.props.fetchPlayers(this.props.tournament_id)
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
           <ScoreInput players={this.props.scores.players} holes={this.props.scores.holes}/>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tournament_id: ownProps.match.params.tournament_id,
    scores: state.scores
  }
}
const mapDispatchToProps = dispatch => {
  return {
      fetchHoles: (payload) => {dispatch(fetchHoles(payload)) },
      fetchPlayers: (payload) => {dispatch(fetchPlayers(payload)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreContainer)
