import React, { useState, useEffect, useRef, use } from 'react'
import { connect } from 'react-redux';
import {GetContactsAction,UpdateMessages} from '../Action/GetContactsAction';
import './index.css';
import { socket } from '../Home';
function ChatBox({ selected_contact, contacts,GetContactsAction,UpdateMessages }) {
    const [message, update_message] = useState()
    const [avoid_born, setAvoidBorn] = useState(false)
    const new_ref = useRef()
    useEffect(() => {
        new_ref.current.scrollTop = new_ref.current.scrollHeight
    }, [selected_contact])


    useEffect(() => {
        if (avoid_born) {
            const handleEvent = (listener) => {
                if (new_ref.current.scrollTop <= 0) {
                    socket.emit('fetch-more', { name: 'sachinnair26', contact: selected_contact, offset: 1, limit: 1 })
                }
            }
            new_ref.current.addEventListener('scroll', handleEvent)
        }
        else {
            setAvoidBorn(true)
        }
    }, [selected_contact])
    useEffect(()=>{
        socket.on('more-fetched',function(tin){

            UpdateMessages(tin)
        })
    },[])

    const sendChat = () => {
        socket.emit("message", { contact: selected_contact, message: message, user: 'sachinnair26' })
    }

    return (

        <div className='chat-box-wrapper'>
            <div className='message-pane' ref={new_ref}>
                {selected_contact !== "" ?
                    <div className='messages-drawer'>
                        {
                            contacts[selected_contact].mesg.map(chat =>
                              
                               (chat.reciver === selected_contact ?
                                    <div className='reciver' >
                                        <div className='single-mesg-reciver'>
                                        {chat.message}
                                        <br/>
                                        <span className='date-and-time'>

                                        {new Date(chat.timestamp).toString().slice(0,16)}
                                        </span>
                                        </div>
                                    </div>
                                    :
                                    <div className='sender'>
                                    <div className='single-mesg-sender'>
                                        {chat.message}
                                        <br/>
                                        <span className='date-and-time'>

                                        {new Date(chat.timestamp).toString().slice(0,16)}
                                        </span>
                                        </div>
                                    </div>)
                            )
                        }
                    </div>
                    :
                    (<h1>select a contact</h1>)}
            </div>
            <div className='input-and-button'>
                <input className='input-bar' onChange={(e) => { update_message(e.target.value) }} />

                <button onClick={sendChat} disabled={message === '' ? true : false}>send</button>
            </div>
        </div>
    )
}
const mapStateToProps = state => ({
    selected_contact: state.SelectContactReducer.selected_contact,
    contacts: state.GetContactsReducer
})
const mapActionToProps = {
GetContactsAction:GetContactsAction,
UpdateMessages:UpdateMessages
}
export default connect(mapStateToProps, mapActionToProps)(ChatBox);