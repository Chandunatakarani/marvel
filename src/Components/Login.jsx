import React, { useState } from "react";
import '../App.css';
export default function Login() {
    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [errors, SetErrors] = useState({
        email: '',
        password: ''
    })
    const userpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passpattern = /^[\w]{4,8}$/
    const clickevent = () => {
        if (email.trim() === '') {
            SetErrors((errors) => ({ ...errors, email: 'enter email' }))
        }
        else if (!userpattern.test(email)) {
            SetErrors((errors) => ({ ...errors, email: 'enter valid email' }))

        }
        else {
            SetErrors((errors) => ({ ...errors, email: '' }))

        }
        if (password.trim() === '') {
            SetErrors((errors) => ({ ...errors, password: 'enter password' }))
        }
        else if (!passpattern.test(password)) {
            SetErrors((errors) => ({ ...errors, password: 'enter valid password' }))
        }
        else {
            SetErrors((errors) => ({ ...errors, password: '' }))

        }
    }
    return (
        <form>
            <div className="custom-container">
                <div className="row">
                    <h3>Login</h3>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address : </label>
                        <input type="email" className="form-control" value={email}
                            onChange={(e) => { SetEmail(e.target.value) }}
                        />
                        {errors.email && <span className="text-danger">{errors.email}</span>}


                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password : </label>
                        <input type="password" className="form-control" value={password}
                            onChange={(e) => { SetPassword(e.target.value) }}
                        />
                        {errors.password && <span className="text-danger">{errors.password}</span>}

                    </div>
                    <button type="button" className="btn" onClick={clickevent}>Submit</button>
                </div>
                {/* <div className="col">
                    <p>Don't have an account? <a href='/Register'>Register</a></p>
                    <p><a href='/'>Home</a></p>

                </div> */}

            </div>
        </form>

    )
}
