export function fetchHoles(tournament_id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_HOLES' });
  return fetch(`/api/tournament/${tournament_id}/hole`)
    .then(response => {
      return response.json()
    }).then(payload => dispatch({ type: 'FETCH_HOLES', payload }));
  };
}

export function fetchPlayers(tournament_id) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PLAYERS' });
  return fetch(`/api/tournament/${tournament_id}/player`)
    .then(response => {
      return response.json()
    }).then(payload => dispatch({ type: 'FETCH_PLAYERS', payload }));
  };
}
