import React,{useState,useEffect} from 'react';
import './index.css';
import GetContactsAction from '../Action/GetContactsAction';
import {connect} from 'react-redux';

function Contacts({contacts,GetContactsAction}){
 useEffect(()=>{
     GetContactsAction()
 },[])
 console.log(contacts);
 
    return(
        <div>
            {Object.keys(contacts).map(contact =><div className='single-contact'>
            {contact}
            </div>)}
            
        </div>
    )
}
const mapStateToProps = state =>({
    contacts:state.GetContactsReducer
})
const mapActionToProps ={
    GetContactsAction:GetContactsAction
}
export default connect(mapStateToProps,mapActionToProps)(Contacts);