import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import Login from "../Pages/login";
import Cart from "../Pages/Cart";


const Navigation = () => {

    const cartStyle = {
        background: '#F59E0D',
        display:'flex',
        padding: '6px 12px',
        borderRadius : '15px',
    }
    const { cart } = useContext(CartContext);

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between py-4">
          
                  <img style={{height:45}} src="./images/logo.png" alt="logo image" />

              
              <ul className="flex items-center">
                  <li className="font-bold text-yellow-600 "> <Link to="/">Home</Link> </li>
                  <li className="ml-6 font-bold text-yellow-600"> <Link to="/products">Pizza</Link> </li>
                  <li className="ml-6 font-bold text-yellow-600"> <Link to="/login">Sign in</Link> </li>
                  <li className="ml-6">
                      <Link to="/cart">
                           <div style={ cartStyle }>
                              <span className="text-black">{cart.totalItems}</span>
                              <img className="ml-2" src="./images/cart.png" alt="cart image" />
                           </div>
                      </Link>                      
                  </li>
                  <li className="ml-6 font-bold text-yellow-600"> <Link to="/admin">Admin</Link> </li>
              </ul>
      </nav>
    </>
  );
};

export default Navigation;
