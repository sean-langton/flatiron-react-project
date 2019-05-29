export function fetchTournament(tournament_id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_HOLES' });
  return fetch(`/api/tournament/${tournament_id}/hole`)
    .then(response => {
      return response.json()
    }).then(payload => dispatch({ type: 'FETCH_HOLES', payload }));
  };
}
