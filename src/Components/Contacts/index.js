import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import './index.css';
import GetContactsAction from '../Action/GetContactsAction';
import SelectContactAction from '../Action/SelectContactAction';
import {socket} from '../Home';
function Contacts({contacts,GetContactsAction,SelectContactAction}){
    console.log(contacts);
    
    const [search_result,set_search_result] = useState([])
    useEffect(()=>{
        GetContactsAction()
        socket.on('search-result',function(val){
            set_search_result(val)
            
        })
    },[])
   
    return(
        <div>
        <div className='search'>
            <input onChange={(e)=>{e.target.value.length >0 ? socket.emit('contact-search',e.target.value):set_search_result([])}}/> 
            <div className='search-param'>{search_result.length >0 ? search_result.map(res =>(<div>{res}</div>)):null}</div>
        </div>
            {Object.keys(contacts).map(contact =><div className='single-contact' key={contacts[contact].name} onClick={()=>SelectContactAction(contacts[contact].name)}>
            {contacts[contact].name}
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