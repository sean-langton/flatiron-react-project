export function fetchTournament(tournament_id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_TOURNAMENTS' });
  return fetch(`/api/tournament/${tournament_id}`)
    .then(response => {
      return response.json()
    }).then(payload => dispatch({ type: 'FETCH_TOURNAMENT', payload }));
  };
}
