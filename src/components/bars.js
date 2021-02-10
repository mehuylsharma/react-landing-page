import { Component } from 'react';

export class SearchBar extends Component {
    render() {
        return (
            <div className="search-bar fixed">
                <input className="search" type="text" placeholder="Search for any location"></input>
            </div>
        )
    }
}

export class NavBar extends Component {
    render() {
        return (
            <div className="nav-bar">
                <div className="item">OUR TEAM</div>
                <div className="item">ABOUT US</div>
                <div className="item">CONTACT US</div>
            </div>
        )
    }
}