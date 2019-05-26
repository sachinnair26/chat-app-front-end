import React,{useState,useEffect} from 'react';
import './index.css';
function Login () {
    const [number,set_number] =useState(0)
    return (
        <div className='login-wrapper'>
            <div className='credential-wrapper'>
                <h1>My Crappy ChatApp</h1>
                <div className='input-button'>
                <input id="partitioned" type="text"  placeholder='Phone' onChange={(e)=>set_number(e.target.value)}/>
                <button onClick={()=>{requestOtp(number)}}>Send Otp</button>
                </div>
            </div>
        </div>
    )
}
function requestOtp(number){
   
    var data = {
        number:number
    }
    fetch('http://127.0.0.1:3001/sendotp',{
        headers: {
            'Content-Type':'text/plain',
        },
        method:'POST',
        body:JSON.stringify(data)

        
      }).then(resp_json =>{
         return resp_json.json()

      }).then(resp =>{
          console.log(resp.type);
          
      })
}
export default Login;