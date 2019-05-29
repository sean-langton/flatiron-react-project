import { combineReducers } from 'redux';
import tournamentsReducer from './TournamentReducer';
import holeReducer from './HoleReducer'


const rootReducer =  combineReducers({
  tournaments: tournamentsReducer,
  holes: holeReducer
});


export default rootReducer;
