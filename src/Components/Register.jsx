import React,{useState} from "react";
import '../App.css';
export default function Register() {
    const[username,SetUsername]=useState('');
    const[email,SetEmail]=useState('');
    const[password,SetPassword]=useState('');
    const[confirmpassword,SetConfirmpassword]=useState('');
    const[errors,SetErrors]=useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''  
    })
    const userpattern=/^[A-Z][\w]{8,15}$/
    const emailpattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passpattern=/^[\w]{4,8}$/
    const clickevent1=()=>{
            if(username.trim()===''){
                  SetErrors((errors)=>({...errors,username:'enter username'}))
            }
            else if(!userpattern.test(username)){
                SetErrors((errors)=>({...errors,username:'enter valid username'}))
            }
            else{
                SetErrors((errors)=>({...errors,username:''}))

            }
            if(email.trim()===''){
                SetErrors((errors)=>({...errors,email:'enter email'}))
          }
          else if(!emailpattern.test(email)){
            SetErrors((errors)=>({...errors,email:'enter valid email'}))
          }
          else{
            SetErrors((errors)=>({...errors,email:''}))

          }
          if(password.trim()===''){
            SetErrors((errors)=>({...errors,password:'enter password'}))
      }
      else if(!passpattern.test(password)){
        SetErrors((errors)=>({...errors,password:'enter valid password'}))
      }
      else{
        SetErrors((errors)=>({...errors,password:''}))

      }
      if(confirmpassword.trim()===''){
        SetErrors((errors)=>({...errors,confirmpassword:'enter password'}))
        if(password == confirmpassword){
        SetErrors((errors)=>({...errors,confirmpassword:''}))
        }
        else{
        SetErrors((errors)=>({...errors,confirmpassword:'Wrong Password'}))
        }
  } 
        else{
        SetErrors((errors)=>({...errors,confirmpassword:''}))

        }
    }

    return (
        <form>
        <div className="custom-container">
                <div className="row">
                    <h3>Register</h3>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Username : </label>
                        <input type="text" className="form-control" value={username}
                        onChange={(e)=>{SetUsername(e.target.value)}} />
                        {errors.username&&<span className="text-danger">{errors.username}</span>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address : </label>
                        <input type="email" className="form-control" value={email}
                        onChange={(e)=>{SetEmail(e.target.value)}}/>
                        {errors.email&&<span className="text-danger">{errors.email}</span>}


                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password : </label>
                        <input type="password" className="form-control" value={password}
                        onChange={(e)=>{SetPassword(e.target.value)}} />
                        {errors.password&&<span className="text-danger">{errors.password}</span>}

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password : </label>
                        <input type="password" className="form-control" value={confirmpassword} 
                        onChange={(e)=>{SetConfirmpassword(e.target.value)}}/>
                        {errors.confirmpassword&&<span className="text-danger">{errors.confirmpassword}</span>}

                    </div>
                    <button type="button" className="btn" onClick={clickevent1}>Submit</button>
                </div>
                <div className="col">
                <p>Already have an account? <a href='/Login'>Login</a></p>
                <p><a href='/'>Home</a></p>
                </div>
        </div>
        </form>

    )
}
