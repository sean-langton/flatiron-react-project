import React, { Component } from 'react'
//import TournamentInput from '../components/tournaments/TournamentInput'
import { connect } from 'react-redux'
import { fetchTournament } from  '../components/actions/holeActions';
import Holes from '../components/holes/Holes'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
//import Col from 'react-bootstrap/Col'

class HoleContainer extends Component {

  componentDidMount() {
    this.props.fetchTournament(this.props.tournament_id)
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Holes />
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({tournament_id: ownProps.match.params.tournament_id})

const mapDispatchToProps = dispatch => {
  return {
      fetchTournament: (payload) => { dispatch(fetchTournament(payload)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HoleContainer)
