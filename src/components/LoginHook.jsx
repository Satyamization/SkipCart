import React from 'react';
import { useContext } from 'react';
import { ModalContext } from '../App';

const LoginHook = () => {
    const loginContext = useContext(ModalContext);
    function registerClick() {
        loginContext.modalDispatch({ type: 'showRegister' })
    }
    return (
        <div>
            <form method='POST'>
                <div class="login-page">
                    <div class="form">
                        <form class="login-form">
                            <input type="text" id="user" placeholder="username" name='user' />
                            <input type="password" placeholder="password" 
                                name='password'
                                id='password'
                                 />
                            <button type="submit" name='submit' id='submit'>login</button>
                            
                        </form>
                    </div>
                </div>
                {/* <h4>{this.state.message}</h4> */}
            </form>
            <p class="message">Not registered? <button onClick={registerClick} className="bttn-without-style">Register</button></p>
        </div>
    );
};

export default LoginHook;