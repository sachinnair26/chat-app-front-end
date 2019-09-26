import {SELECT_CONTACT} from '../ActionCreators';

const initalState = {
    selected_contact:""
}

export default function SelectContactReducer(state=initalState,action){
    switch(action.type){
        case SELECT_CONTACT:
             var selected_contact =action.selected_contact
            return{
                ...state,selected_contact
            }
        default:
            return state;
    }
}