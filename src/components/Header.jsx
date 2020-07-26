import React, { useState } from "react";
import { Link } from "react-router-dom";


import Modal from "react-modal";
import { useContext } from "react";
import { ModalContext } from "../App";
import LoginHook from "./LoginHook";
import Register from "./Register";


Modal.setAppElement('#root')
function Header() {

    const loginContext = useContext(ModalContext);

    function loginClick(){
        setModalIsOpen(true);
        loginContext.modalDispatch({type: 'showLogin'});
    }

    const customSt = {
        overlay: { zIndex: 1000
        ,
        background: "#00000080"},
        content : {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)',
            backgroundColor:"#eeeeee",
            padding: "0",
          }
        
    }

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg bg-color">
            <Link className="navbar-brand brand" to="/">SkipCart</Link>
            <input type="text" placeholder="Search" id="search-box"></input>

            <button onClick={loginClick} >Login</button>



            {modalIsOpen && (
                <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} style={customSt}>

                    <div className="login-modal">
                    {loginContext.modalState.LoginState?<LoginHook />:<Register />}
                    <div>
                        <button onClick={() => setModalIsOpen(false) } className="logn-close-button" >✕</button>
                    </div>
                     </div>

                </Modal>
            )}

            <Link to="/cart" className="ml-auto">
                <button name="Cart">Cart</button>
            </Link>
        </nav>

    );
}


export default Header;
