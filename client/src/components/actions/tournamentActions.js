export function fetchTournaments() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_TOURNAMENTS' });
  return fetch('/api/tournament')
    .then(response => {
      return response.json()
    }).then(payload => dispatch({ type: 'FETCH_TOURNAMENTS', payload }));
  };
}

export function addTournament(payload) {
  console.log('Creating Tournament')
  return (dispatch) => {
    dispatch({ type: 'CREATING_TOURNAMENT' });
  return fetch('/api/tournament/new', {
    method: 'post',
    body: payload
  })
  }
}
