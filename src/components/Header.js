import React, { Component } from 'react';
import {  Link } from 'react-router-dom';
export default class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="header_wrap">
               <ul className="fl">
                <li><Link to={'/'} className="nav-link">Home</Link></li>
                <li><Link to={'/about'} className="nav-link">About</Link></li>
                <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            </ul> 
            </div>
        )
    }
}