import React from "react";
import '../App.css';
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import { Link } from "react-router-dom";
export const Home = () => {
    return (
        <div className="homes">
            <Header />
            <h1 className="text-center">welcome to the react page</h1>
            {/* <div className="btns">
                <div className="fit">
                    <Link to='./Login'>
                        <button className="btn">Login</button>
                    </Link>
                </div>
                <div className="fit">
                    <Link to="./Register">
                        <button className="btn">Register</button>
                    </Link>
                </div> */}

            {/* </div> */}
        </div>
    )
}