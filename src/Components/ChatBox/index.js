import React,{useState} from 'react'
import {connect} from 'react-redux';
import './index.css';
import {socket} from '../Home';
function ChatBox({selected_contact}){
    const [message,update_message] = useState('')
    
    const sendChat = ()=>{
      
           socket.emit("message",{contact:selected_contact,message:message,user:'sachinnair26'})
            
    }
     
return(
    
    <div className='chat-box-wrapper'>
    <div className='message-pane'>

    </div>
    <div className='input-and-button'>
    <input className='input-bar' onChange={(e)=>update_message(e.target.value)}/>

    <button onClick={sendChat} disabled={message === '' ? true :false}>send</button>
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