import React,{useEffect} from 'react';
import './index.css';
import Contacts from '../Contacts';
import ChatBox from '../ChatBox';
import io from 'socket.io-client';
export const socket = io('http://127.0.0.2:3001',{transports:['polling','websockets']})  

function Home(){
    useEffect(()=>{
        socket.emit('user-name',{user_name:'sachinnair26'})
    },[])
    return(
        <div className='home-main'>
            <div className='home-header'>
                My Crappy Chat App 
            </div>
            <div className='home-secondary'>
                <div className='contacts-sidebar'>
                    <Contacts/> 
                </div>
                    <ChatBox/>
            </div>
        </div>
    )
}

export default Home