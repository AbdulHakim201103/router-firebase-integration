import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { getAuth, signOut } from "firebase/auth";
import app from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";



const auth = getAuth(app)

const Header = () => {
  const [user] = useAuthState (auth)
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        {
          user && <>
            <Link to="/products">Products</Link>
          </>
        }
        <Link to="/orders">Orders</Link>
        <Link to="/reviews">Reviews</Link>
        <Link to="/register">Register</Link>
        {
          user && <>
            <Link to="/vip">VIP</Link>
          </>
        }
        {
          user?.uid 
          ?
          <button onClick={() => signOut(auth)} className="sign-out">Sign Out</button>
          : 
          <Link to="/login">Login</Link>
        }
        <span >{user?.displayName && user.displayName }</span>
      </nav>
    </div>
  );
};

export default Header;
