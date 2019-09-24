import {combineReducers} from 'redux'
import SetUserReducer from './SetUserReducer';
import GetContactsReducer from './GetContactsReducer';
const combinedReducers= combineReducers({
SetUserReducer:SetUserReducer,
GetContactsReducer:GetContactsReducer,
})
export default combinedReducers;