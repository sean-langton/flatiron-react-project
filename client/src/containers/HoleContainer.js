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
    debugger;
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            {console.log('I"M IN THE HOLE CONTAINER')}
            <Holes />
          </Row>
        </Container>
      </div>
    )
  }
}
const mapStateToProps = state => ({ tournament: state.tournament })

const mapDispatchToProps = dispatch => {
  return {
      fetchTournament: () => { dispatch(fetchTournament()) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HoleContainer)
