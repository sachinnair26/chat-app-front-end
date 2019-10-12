import {GET_CONTACTS} from '../ActionCreators/index';
import {BaseUrl} from '../../constants';
import {socket} from '../../Components/Home';
export default function GetContactsAction(){
        return (dispatch,getState) =>{
            socket.on('save-contact',function(die){
                var contacts = []
                die.map(tisk =>{
                    contacts[tisk.name] = tisk.mesg
                })
                dispatch({
                    type:GET_CONTACTS,
                    contacts:contacts
                })
            })
               
        }
}