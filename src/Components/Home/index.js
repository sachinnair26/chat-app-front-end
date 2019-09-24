import React from 'react';
import './index.css';
import Contacts from '../Contacts';

 function Home(){
    return(
        <div className='home-main'>
            <div className='home-header'>
                My Crappy Chat App 
            </div>
            <div className='home-secondary'>
                <div className='contacts-sidebar'>
                    <Contacts/> 
                </div>
                <div className='chatbox'>

                </div>
            </div>
        </div>
    )
}

export default Home