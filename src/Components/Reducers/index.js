import {combineReducers} from 'redux'
import SetUserReducer from './SetUserReducer';
import GetContactsReducer from './GetContactsReducer';
import SelectContactReducer from './SelectContactReducer';

const combinedReducers= combineReducers({
SetUserReducer:SetUserReducer,
GetContactsReducer:GetContactsReducer,
SelectContactReducer:SelectContactReducer
})
export default combinedReducers;