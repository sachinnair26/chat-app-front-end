import {GET_CONTACTS} from '../ActionCreators/index';
import {BaseUrl} from '../../constants';
export default function GetContactsAction(){
        return (dispatch,getState) =>{
            fetch(`${BaseUrl}/home?_id=sachinnair26`,{
                method:'GET',   
            }).then(point =>{
                return point.json()
                
            }).then(val =>{
                var tim ={}
                tim[val.name] = val.mesg_ref
                dispatch({
                    type:GET_CONTACTS,
                    contacts:tim
                })
            })
        }
}