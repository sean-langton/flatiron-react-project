import React, { Component } from 'react'
import TournamentInput from '../components/tournaments/TournamentInput'
import { connect } from 'react-redux'
class TournamentContainer extends Component {

  render() {
    return (
      <div>
        Tournament Container
        <TournamentInput addTournament={this.props.addTournament}/>
      </div>
    )
  }
}
const mapStateToProps = state => ({ tournaments: state.tournaments })

const mapDispatchToProps = dispatch => ({
  addTournament: tournament => dispatch({type: 'ADD_TOURNAMENT', tournament})
})

export default TournamentContainer
