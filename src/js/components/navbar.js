import React from "react";

export default class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <img className="navbarBadgeLogo" src="./images/CompanyBadgeLogo.png"/>
                <div className="navbarSocialContent"></div>
                <div className="navbarContent">
                    <button className="mobileNavBarMenu">Menu</button>
                </div>
            </div>
        );
    }
}