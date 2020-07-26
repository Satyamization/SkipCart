import React from "react";
import { Link } from 'react-router-dom';
import Login from '../../components/Login';
import Modal from "react-modal";


function Cart(){
    return(
    <div className="main" >
        {/* ******** this should appear if not logged in ************ */}
        <div className="not-logged-cart"> 
            <h4>Missing Cart Items?</h4>
            <p>Login to see Items you have added previously</p>
            <button className="btn btn-primary">Login</button>
        </div>
        
        {/* ******** this should appear if logged in but cart is empty ************ */}
        <div className="empty-cart">
            <Link to="/"><i className="fas fa-cart-plus fa-9x empty-cart-ico"></i></Link>
            <h3 className="empty-cart-description">You have nothing in your cart</h3>
        </div>

        {/* ******** this should appear if logged in and cart is not empty ************ */}
        <div className="logged-cart">
            <h3>My Cart</h3>
        </div>
        
    </div>);
}

export default Cart;