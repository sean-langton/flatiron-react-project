import React, { Component } from 'react'
//import TournamentInput from '../components/tournaments/TournamentInput'
import { connect } from 'react-redux'
import { fetchTournament, fetchHoles } from  '../components/actions/holeActions';
import HoleList from '../components/holes/HoleList'
import Tournament from '../components/holes/Tournament'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class HoleContainer extends Component {

  componentDidMount() {
    this.props.fetchTournament(this.props.tournament_id)
    this.props.fetchHoles(this.props.tournament_id)
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Tournament tournament={this.props.holes.tournament} />
          </Row>
          <Row>
            <Col>
            HoleInputs Gonna Go Here
            </Col>
            <Col>
            <HoleList holes={this.props.holes.holes} />
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tournament_id: ownProps.match.params.tournament_id,
    holes: state.holes
  }
}
const mapDispatchToProps = dispatch => {
  return {
      fetchHoles: (payload) => { dispatch(fetchHoles(payload)) },
      fetchTournament: (payload) => {dispatch(fetchTournament(payload)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HoleContainer)
