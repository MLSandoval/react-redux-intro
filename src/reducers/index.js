import {combineReducers} from 'redux';
import clockReducer from './clock_reducer.js';


const rootReducer = combineReducers({
    clock: clockReducer,
});


export default rootReducer