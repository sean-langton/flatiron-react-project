import { combineReducers } from 'redux';
import tournamentsReducer from './TournamentReducer';
import holeReducer from './HoleReducer'
import teamReducer from './TeamReducer'


const rootReducer =  combineReducers({
  tournaments: tournamentsReducer,
  holes: holeReducer,
  teams: teamReducer
});


export default rootReducer;
