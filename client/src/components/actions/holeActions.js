export function fetchTournament() {
  debugger;
  return (dispatch) => {
    dispatch({ type: 'LOADING_TOURNAMENT' });
  return fetch('/api/tournament/1/hole')
    .then(response => {
      return response.json()
    }).then(payload => dispatch({ type: 'FETCH_TOURNAMENT', payload }));
  };
}
