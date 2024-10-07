import React from "react";
import '../App.css';
export default function Login() {
    return (
        <form>
        <div className="custom-container">
                <div className="row">
                    <h3>Login</h3>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address : </label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password : </label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn">Submit</button>
                </div>
                <div className="col">
                <p>Don't have an account? <a href='/Register'>Register</a></p>
                <p><a href='/'>Home</a></p>

                </div>
                
        </div>
        </form>

    )
}
