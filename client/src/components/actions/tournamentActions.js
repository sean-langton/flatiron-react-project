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
  console.log(payload)
  debugger;
  return (dispatch) => {
    dispatch({ type: 'CREATING_TOURNAMENT' });
  return fetch('/api/tournament', {
    method: 'POST',
    body: JSON.stringify(payload),
    headers:{
      'Content-Type': 'application/json'
    }
  })
  }
}
