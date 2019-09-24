import {GET_CONTACTS} from '../ActionCreators';

const initialState ={
   
}
export default function GetContactsReducer(state=initialState,action){
    switch(action.type){
        case GET_CONTACTS:
            var cont = action.contacts
            return {
                ...state,...cont
            }
        default:
            return state
    }
}