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
            var name = action.updated_mesg.name;
            var mesg = action.updated_mesg[name].mesg
            tim[name] = {}
            tim[name] = {...state[name]}
            mesg.map(ish =>{
                tim[name].mesg.push(ish)
            })            
           
            return {...tim,...state}
        default:
            return state
    }
}