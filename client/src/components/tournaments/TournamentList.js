import React from 'react'

const TournamentList = props => {
  function listOfTournaments(){
    return props.tournaments.tournaments.map((tournament,index) => {
        return tournament.name
      })
    }

  return (
    <div>
      {listOfTournaments()}
    </div>
  )

}

export default TournamentList
