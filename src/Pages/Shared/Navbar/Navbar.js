
import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
      
        signOut(auth);
        localStorage.removeItem('accessToken');
      };
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/allcourse">All Course</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/forum">Forum</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
        
        {/* <li><Link to="/login">Login</Link></li> */}
        <li>{user ? <button className="btn btn-ghost"  onClick={logout} >Sign Out <span>{user.email}</span></button> : <Link to="/login">Login</Link>}</li>
    </>
    return (
        
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">AUTISM CARE</a>
                <h6 className='text-sm'>Autism ,Think different</h6>
                

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;