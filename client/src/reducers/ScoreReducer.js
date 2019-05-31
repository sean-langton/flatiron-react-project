export default function scoreReducer(state = {
  loading: false,
  tournament_id: "",
  holes: [],
  players: [],
  scores: []
}, action) {
  switch (action.type) {
    case 'LOADING_HOLES':
      return { ...state, loading: true}
    case 'FETCH_HOLES':
      return {...state, loading: false, holes:action.payload}
    case 'LOADING_PLAYERS':
      return { ...state, loading: true}
    case 'FETCH_PLAYERS':
      return {...state, loading: false, players:action.payload}
    default:
      return state;
  }
};
