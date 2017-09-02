import React from "react";

export default class NavBarMenuItem extends React.Component {
    render() {
        return (

            <div class="navbarmenuitem-dropdown">
                <button class="navbarmenuitembtn">
                    <img className="navbaritemmenuicon" src={this.props.icon}/>
                </button>
                <div class="dropdown-content">
                    <a href="#">The Chalet</a> 
                    <a href="#">The Village</a> 
                    <a href="#">Winter</a> 
                    <a href="#">Summer</a> 
                    <a href="#">Groups</a> 
                    <a href="#">Blog</a> 
                    <a href="#">Enquire</a> 
                    <a href="#">Facebook</a> 
                    <a href="#">Twitter</a> 
                    <a href="#">Instagram</a>
                </div>
          </div>
        );
    }
}