import React from 'react';
import '../css/Header.css';
import {Link} from "react-router-dom";
import logoImage from '../image/logo.PNG';
import '../css/Header.css';

const Header = () => {
    return (
        <>
            <div className='headerStyle'>
                <div className="logo" >
                    <Link to="/" className="ti">Deep Dive</Link>
                </div>
                <div><img src={logoImage} alt="Logo" className="logoimage" /></div>
                <div className="loginb"><Link to='/login' className='lb'>
                    Login
                </Link></div>

                <div className="signupb"><Link to='/signup' className='sb'>Sign up</Link></div>
                <div className="qna"><Link to='/Postmain' className='qa'>
                    Q&A
                </Link></div>
            </div>
        </>

    );
};

export default Header;