import React, { Component } from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { fetchTournament} from  '../components/actions/scoreActions';
class ScoreContainer extends Component {

  componentDidMount() {
    this.props.fetchTournament(this.props.tournament_id)
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
           Team Selectors Go Here
          </Row>
          <Row>
            Scoreboard Goes Here
          </Row>
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    tournament_id: ownProps.match.params.tournament_id,
  }
}
const mapDispatchToProps = dispatch => {
  return {
      fetchTournament: (payload) => {dispatch(fetchTournament(payload)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ScoreContainer)
