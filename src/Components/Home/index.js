import React,{useEffect} from 'react';
import './index.css';
import Contacts from '../Contacts';
import ChatBox from '../ChatBox';
import io from 'socket.io-client';
const socket = io('http://127.0.0.2:3001')  
function Home(){
    useEffect(()=>{
       sendthis()
    })
        
   const sendthis = () =>{
       
              
        socket.on('connect',(sock)=>{
            console.log("here");
            
        })
        socket.on('name',(vick)=>{
            console.log(vick);
            
        })
    }
    
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
                    <button onClick={sendthis}>tim</button>
            </div>
        </div>
    )
}

export default Home