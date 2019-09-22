import {combineReducers} from 'redux'
import SetUserReducer from './SetUserReducer';

const combinedReducers= combineReducers({
SetUserReducer:SetUserReducer
})
export default combinedReducers;