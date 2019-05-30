import React, { Component } from 'react';
import Team from './Team'

export default class TeamList extends Component {

  handleDelete = (event) => {
    this.props.deleteTeam({team_id: event.target.name, tournament_id: event.target.value})
  }

  listOfTeams = () => {
    return this.props.teams.map((team,index) => {
        return (
          <div key={index}>
            <Team team={team} deleteTeam={this.handleDelete}/>
          </div>
        )
      })
    }
  render() {
    return (
      <div>
        {this.listOfTeams()}
      </div>
    )
  }
}
