export default function tournamentsReducer(state = {
  loading: false,
  tournaments: []
}, action) {
  switch (action.type) {
    case 'LOADING_TOURNAMENTS':
      return { ...state, loading: true}
      case 'FETCH_TOURNAMENTS':
        console.log('Fetching Tournaments')
        return {...state, loading: false, tournaments:action.payload}
      default:
        return state;
  }
};
