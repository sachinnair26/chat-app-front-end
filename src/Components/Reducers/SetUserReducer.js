import {USER} from '../ActionCreators';

const initialState = {
    user :{}
}


export default function SetUserReducer(state=initialState,action){
    
    switch(action.type){
        case USER :
            var user = action.user
            return {
                ...state,
                user
            }
        default:
            return state;
    }

}