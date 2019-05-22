export function fetchTournaments() {
  console.log('Fetching Tournaments')
  return (dispatch) => {
    dispatch({ type: 'LOADING_TOURNAMENTS' });
  return fetch('/api/tournament')
    .then(response => {
      return response.json()
    }).then(payload => dispatch({ type: 'FETCH_TOURNAMENTS', payload }));
  };
}
