import React, { Component } from 'react'
import TournamentInput from '../components/tournaments/TournamentInput'
import { connect } from 'react-redux'
import { fetchTournaments } from  '../components/actions/tournamentActions';
import TournamentList from '../components/tournaments/TournamentList'
class TournamentContainer extends Component {

  componentDidMount() {
    this.props.fetchTournaments()
    debugger;
  }

  render() {
    return (
      <div>
        Tournament Container
        <TournamentInput addTournament={this.props.addTournament}/>
        <TournamentList tournaments={this.props.tournaments}/>
      </div>
    )
  }
}
const mapStateToProps = state => ({ tournaments: state.tournaments })

const mapDispatchToProps = dispatch => {
  return {
    fetchTournaments: () => {
      dispatch(fetchTournaments())
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TournamentContainer)
