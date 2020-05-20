import React from 'react';
import {Link} from '@reach/router'

const Navbar = (props) =>{
    return(
        <div>
            <Link to ="/home">Home </Link>
            <Link to ="/hello">Hello</Link>

        </div>
    )
} 

export default Navbar;