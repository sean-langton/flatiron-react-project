export default function teamReducer(state = {
  loading: false,
  tournament_id: "",
  tournament: {}
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
