import React,{useState} from 'react'
import {connect} from 'react-redux';
import './index.css';

function ChatBox(){
return(
    <div className='chat-box-wrapper'>
    <div className='message-pane'>

    </div>
    <div className='input-and-button'>
    <input className='input-bar'/>
    <button>send</button>
    </div>
    </div>
)
}
const mapStateToProps = state =>({
selected_contact:state.SelectContactReducer.selected_contact
})
const mapActionToProps = {

}
export default connect(mapStateToProps,mapActionToProps)(ChatBox);