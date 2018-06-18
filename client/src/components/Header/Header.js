import  React from 'react';
import {Link } from 'react-router-dom'
const Header =() => {
        return (
            <nav className="navbar navbar-expand-lg  bg-primary">
                <Link to="/home" activeClassName="active">home</Link>
                {"   |   "}
                <Link to="saved" activeClassName="active">saved Article</Link>
            </nav>
        );
}
export default Header;
