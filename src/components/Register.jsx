import React from 'react';
import { useContext } from 'react';
import { ModalContext } from '../App';

const Register = () => {
    const loginContext = useContext(ModalContext);

    function registerClick() {
        loginContext.modalDispatch({ type: 'showLogin' });
    }
    return (
        <div>
            <form method='POST'>
                <div class="login-page">
                    <div class="form">
                        <form class="login-form">
                        <input type="text" id="name" placeholder="Full Name"            
                                name='name' />
                            <input type="email" id="user" placeholder="email"   
                                name='email' />
                            <input type="password" placeholder="password" 
                                name='password'
                                id='password'/>
                            <button type="submit" name='submit' id='submit'>login</button>
                            
                        </form>
                    </div>
                </div>
                {/* <h4>{this.state.message}</h4> */}
            </form>
            <p class="message">already registered <button onClick={registerClick} className="bttn-without-style">Login</button></p>
        </div>
    );
};

export default Register;