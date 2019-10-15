import {GET_CONTACTS,UPDATE_MESSAGES} from '../ActionCreators/index';
import {BaseUrl} from '../../constants';
import {socket} from '../../Components/Home';
export function GetContactsAction(die){
    
        return (dispatch,getState) =>{

                var contacts = {}
                    var mesg_size = die.mesg_size
                    var mesg = die.mesg
                    contacts[die.name] = {mesg,mesg_size}
                
                dispatch({
                    type:GET_CONTACTS,
                    contacts:contacts
                
            })
               
        }
}

export function UpdateMessages(data){
    
    return (dispatch,getState) =>{
        var contacts = {}
        var mesg = data.mesg
        contacts[data.name] = {mesg}
          var name = data.name
        dispatch({
            type:UPDATE_MESSAGES,
            updated_mesg:{...contacts,name}
        })
    }
}