import {GET_CONTACTS,UPDATE_MESSAGES} from '../ActionCreators/index';
import {BaseUrl} from '../../constants';
import {socket} from '../../Components/Home';
export function GetContactsAction(die){
        return (dispatch,getState) =>{

                var contacts = []
                die.map(tisk =>{
                    contacts[tisk.name] = tisk.mesg
                })
                dispatch({
                    type:GET_CONTACTS,
                    contacts:contacts
                
            })
               
        }
}

export function UpdateMessages(data){
    
    return (dispatch,getState) =>{
        var contacts = []
        var name = ''
                data.map(tisk =>{
                    name = tisk.name
                    contacts[tisk.name] = tisk.mesg
                })
          
        dispatch({
            type:UPDATE_MESSAGES,
            updated_mesg:{...contacts,name}
        })
    }
}