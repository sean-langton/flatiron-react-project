import { combineReducers } from 'redux';
import tournamentsReducer from './TournamentReducer';
import holesReducer from './HoleReducer'


const rootReducer =  combineReducers({
  tournaments: tournamentsReducer,
  holes: holesReducer
});


export default rootReducer;
