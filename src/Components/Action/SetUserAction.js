import {USER} from '../ActionCreators';

export default function SetUserAction(data){
    
    return {
        type:USER,
        user : data
    }
}