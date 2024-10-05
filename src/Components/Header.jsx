import React from 'react';
import '../App.css'
 const Header =()=>{
    return(
        <section className='navbar'>
            <div className='logo'>
                <img src="https://www.achieversit.com/assets/images/logo-white.png" alt="logo"/>
                </div>
                <div>
                <ul className='listitems'>
                <li>Home</li>
                <li>Categories</li>
                <li>Cart</li>
                <li>Login</li>
                <li>Signup</li>

                </ul>
            </div>

        </section>
    )
};
export default Header;