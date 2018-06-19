import  React from 'react';
import {Link } from 'react-router-dom'
import {Col} from '../Grid'
const Header =() => {
        return (
            <nav className="navbar navbar-expand-lg ">

                <Link to="/home" activeClassName="active">home</Link>
                {"||"}
                <Link to="saved" activeClassName="active">saved Article</Link>
              
            </nav>
        );
}
export default Header;
