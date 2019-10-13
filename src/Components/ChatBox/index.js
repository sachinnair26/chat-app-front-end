import React, { useState, useEffect, useRef, use } from 'react'
import { connect } from 'react-redux';
import './index.css';
import { socket } from '../Home';
function ChatBox({ selected_contact, contacts }) {
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
                    socket.emit('fetch-more', { name: 'sachinnair26', contact: selected_contact, offset: 2, limit: 1 })
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
            console.log(tin);
            
        })
    })

    const sendChat = () => {
        socket.emit("message", { contact: selected_contact, message: message, user: 'sachinnair26' })
    }

    return (

        <div className='chat-box-wrapper'>
            <div className='message-pane' ref={new_ref}>
                {selected_contact !== "" ?
                    <div className='messages-drawer'>
                        {
                            contacts[selected_contact].map(chat =>

                                (chat.reciver === selected_contact ?
                                    <div className='reciver' key={chat._id}>
                                        {chat.message}
                                        {new Date(chat.timestamp).toString()}
                                    </div>
                                    :
                                    <div className='sender'>
                                        {chat.message}
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

}
export default connect(mapStateToProps, mapActionToProps)(ChatBox);