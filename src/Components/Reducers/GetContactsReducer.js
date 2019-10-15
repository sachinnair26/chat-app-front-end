import {GET_CONTACTS,UPDATE_MESSAGES} from '../ActionCreators';

const initialState ={
}
export default function GetContactsReducer(state=initialState,action){
    
    switch(action.type){
        case GET_CONTACTS:
            var cont = action.contacts
            return {
                ...state,...cont
            }
        case UPDATE_MESSAGES:
            var tim = {}
            tim[action.updated_mesg.name] = [...state[action.updated_mesg['name']]]
            action.updated_mesg[action.updated_mesg.name].map(tis =>{
                tim[action.updated_mesg.name].push(tis)
            })
            return {...state,...tim}
        default:
            return state
    }
}