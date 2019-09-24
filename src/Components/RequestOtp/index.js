import React, { useState, useReducer } from 'react';
import { auth } from '../../config';
import './index.css';
import { connect } from 'react-redux';
import firebase from 'firebase';
import SetUserAction from '../Action/SetUserAction';
import {BaseUrl} from '../../constants';
function RequestOtp({SetUserAction,history}) {
    
    const [number, set_number] = useState(0)
    const [set_input, changeInput] = useState(false)
    const [verify_otp,set_verifyotp] =useState(0)
    const onSendOtp = (number) => {
        
        var recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
            'size': 'invisible',

        })
        auth.signInWithPhoneNumber(`+91${number.toString()}`,recaptchaVerifier).then(confirmResult => {
            changeInput(true)
            window.confirm_result = confirmResult
        })
    }
    const onVerifyOtp = (otp) =>{
        window.confirm_result.confirm(otp).then(result =>{
            var user = result.user;
            var send_data = {
                email:user.email,
                display_name:user.displayName,
                phone_number:user.phoneNumber,
                photo_url:user.photoURL,
                _id :user.uid,
                user_name:"sachinanir26"
                

            }
            sendUserData(send_data).then(point =>{
                SetUserAction(send_data)
                history.push('/home')
            })
        })
        
    }
    const sendUserData = (data) =>{
        return fetch(`${BaseUrl}/saveuser`,{
            method:'POST',
            mode:'no-cors',
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(data)
        })
    }
    return (
        <div className='login-wrapper'>
            <div className='credential-wrapper '>
                <h1>My Crappy ChatApp</h1>
                <div id='recaptcha-container'></div>
                {set_input ?
                    (<span className='input-button'>
                        <input id="partitioned" type="text" 
                        placeholder='Enter Otp'
                         onChange={(e) => set_verifyotp(e.target.value)} />
                        <button id='sign-in-button' 
                        onClick={() => { onVerifyOtp(verify_otp) }}>
                        Verify Otp
                        </button>
                    </span>
                    )
                    :
                    (
                        <span className="input-button">
                            <input id="partitioned" type="text" 
                            placeholder='Phone' 
                            onChange={(e) => set_number(e.target.value)} />
                            <button id='sign-in-button' 
                            onClick={() => { onSendOtp(number) }}>
                            Send Otp
                            </button>
                        </span>
                    )
                }
            </div>
        </div>
    )
}




const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { SetUserAction })(RequestOtp);