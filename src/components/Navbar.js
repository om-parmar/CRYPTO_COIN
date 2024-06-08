import React from 'react'
import { Link } from 'react-router-dom'


export default function Navbar() {
    return (
        <div className='n-con' >
            <div className='navbar'>
            <Link style={{textDecoration: 'none'}} to={"/"}><h1>crypto-coin</h1></Link>
                
                
            </div>
            <div className='navbar'>
               
                <Link style={{textDecoration: 'none'}} to="/bitcoin"><h1>coin</h1></Link>
                <Link style={{textDecoration: 'none'}} to="/Theory"><h1>Theory</h1></Link>
                
                
               
                
                
            </div>




        </div>
    )
}