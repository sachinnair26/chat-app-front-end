import {SELECT_CONTACT} from '../ActionCreators';

export default function SelectContactAction(contact){
    return {
        type:SELECT_CONTACT,
        selected_contact:contact
    }
}