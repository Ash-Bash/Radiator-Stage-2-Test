import React from "react";

export default class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <img className="navbarBadgeLogo" src="./images/CompanyBadgeLogo.png"/>
                <div className="navbarSocialContent"></div>
                <div className="navbarContent">
                    <h2>Hello, World!</h2>
                </div>
            </div>
        );
    }
}