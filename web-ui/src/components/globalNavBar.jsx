import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
class GlobalNavBar extends Component {
    
    render() { 
        return (                
             <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary m4">
                <a className="navbar-brand" href="/">Team2</a>
                
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            
            </Navbar> 
        );
    }
}
 
export default GlobalNavBar;