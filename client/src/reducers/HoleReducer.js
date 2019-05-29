export default function holeReducer(state = {
  loading: false,
  tournament_id: "",
  holes: []
}, action) {
  switch (action.type) {
    case 'LOADING_HOLES':
      return { ...state, loading: true, holes: []}
    case 'FETCH_HOLES':
      return {...state, loading: false, holes:action.payload}
    default:
      return state;
  }
};
