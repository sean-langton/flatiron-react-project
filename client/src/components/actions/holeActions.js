export function fetchHoles(tournament_id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_HOLES' });
  return fetch(`/api/tournament/${tournament_id}/hole`)
    .then(response => {
      return response.json()
    }).then(payload => dispatch({ type: 'FETCH_HOLES', payload }));
  };
}

export function fetchTournament(tournament_id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_TOURNAMENTS' });
  return fetch(`/api/tournament/${tournament_id}`)
    .then(response => {
      return response.json()
    }).then(payload => dispatch({ type: 'FETCH_TOURNAMENT', payload }));
  };
}

export function addHole(payload) {
  debugger;
  return (dispatch) => {
    dispatch({ type: 'CREATING_HOLE' });
  return fetch(`/api/tournament/1/hole`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers:{
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json()
  }).then(payload => dispatch({ type: 'ADD_HOLE', payload }));
  };
}
