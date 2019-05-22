import { combineReducers } from 'redux';
import tournamentsReducer from './TournamentReducer';


const rootReducer =  combineReducers({
  tournaments: tournamentsReducer
});


export default rootReducer;
