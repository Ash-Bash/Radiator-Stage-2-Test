import React from "react";

// Components
import NavBarItem from "./navbaritem";
import NavBarIconItem from "./navbariconitem";
import NavBarCaladarItem from "./navbarcaladaritem";
import NavBarMenuItem from "./navbarmenuitem";
import NavBarSocialItem from "./navbarsocialitem";

export default class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <img className="navbarBadgeLogo" src="./images/CompanyBadgeLogo.png"/>
                <div className="navbarSocialContent">
                    <NavBarSocialItem icon="/images/badges/social_instagram.png" link=""/>
                    <NavBarSocialItem icon="/images/badges/social_twitter.png" link=""/>
                    <NavBarSocialItem icon="/images/badges/social_facebook.png" link=""/>
                </div>
                <div className="navbarContent">
                    <NavBarItem title="The Chalet" link="#"/>
                    <NavBarItem title="The Village" link="#"/>
                    <NavBarItem title="Winter" link="#"/>
                    <NavBarItem title="Summer" link="#"/>
                    <NavBarItem title="Groups" link="#"/>
                    <NavBarItem title="Blog" link="#"/>
                    <NavBarItem title="Enquire" link="#"/>
                    <NavBarIconItem icon="/images/badges/GB.png" link="#"/>
                    <NavBarIconItem icon="/images/badges/FR.png" link="#"/>
                    <NavBarCaladarItem icon="/images/badges/Cal.png" link="#"/>
                    <NavBarMenuItem icon="/images/badges/Menu Filled-50.png" link="#"/>
                </div>
            </div>
        );
    }
}