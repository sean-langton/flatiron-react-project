export default function holeReducer(state = {
  loading: false,
  tournament: [],
  holes: []
}, action) {
  switch (action.type) {
    case 'LOADING_TOURNAMENT':
      return { ...state, loading: true}
    case 'FETCH_TOURNAMENT':
      debugger;
      return {...state, loading: false, tournament:action.payload}
    default:
      return state;
  }
};
