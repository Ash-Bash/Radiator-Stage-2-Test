import React from "react";

// Components
import NavBarItem from "./navbaritem";
import NavBarIconItem from "./navbariconitem";
import NavBarCaladarItem from "./navbarcaladaritem";

export default class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <img className="navbarBadgeLogo" src="./images/CompanyBadgeLogo.png"/>
                <div className="navbarSocialContent"></div>
                <div className="navbarContent">
                    <NavBarItem title="The Chalet" link="#"/>
                    <NavBarItem title="The Villlage" link="#"/>
                    <NavBarItem title="Winter" link="#"/>
                    <NavBarItem title="Summer" link="#"/>
                    <NavBarItem title="Groups" link="#"/>
                    <NavBarItem title="Blogs" link="#"/>
                    <NavBarItem title="Enquire" link="#"/>
                    <NavBarIconItem icon="/images/badges/GB.png" link="#"/>
                    <NavBarIconItem icon="/images/badges/FR.png" link="#"/>
                    <NavBarCaladarItem icon="/images/badges/Cal.png" link="#"/>
                    <button className="mobileNavBarMenu">Menu</button>
                </div>
            </div>
        );
    }
}