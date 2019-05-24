import React, { Component } from 'react'
//import TournamentInput from '../components/tournaments/TournamentInput'
//import { connect } from 'react-redux'
//import { fetchTournaments, addTournament } from  '../components/actions/tournamentActions';
//import TournamentList from '../components/tournaments/TournamentList'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
//mport Col from 'react-bootstrap/Col'

class HoleContainer extends Component {

//  componentDidMount() {
//    this.props.fetchTournaments()
//  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            BALLS
          </Row>
        </Container>
      </div>
    )
  }
}
//const mapStateToProps = state => ({ tournaments: state.tournaments })

//const mapDispatchToProps = dispatch => {
//  return {
//      addTournament: (payload) => { dispatch(addTournament(payload)) },
//      fetchTournaments: () => { dispatch(fetchTournaments()) }
//  }
//}

export default HoleContainer
