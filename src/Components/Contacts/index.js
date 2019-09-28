import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import './index.css';
import GetContactsAction from '../Action/GetContactsAction';
import SelectContactAction from '../Action/SelectContactAction';

function Contacts({contacts,GetContactsAction,SelectContactAction}){
 useEffect(()=>{
     GetContactsAction()
 },[])
 
    return(
        <div>
            {Object.keys(contacts).map(contact =><div className='single-contact' key={contact} onClick={()=>SelectContactAction(contact)}>
            {contact}
            </div>)}
            
        </div>
    )
}
const mapStateToProps = state =>({
    contacts:state.GetContactsReducer
})
const mapActionToProps ={
    GetContactsAction:GetContactsAction,
    SelectContactAction:SelectContactAction
}
export default connect(mapStateToProps,mapActionToProps)(Contacts);