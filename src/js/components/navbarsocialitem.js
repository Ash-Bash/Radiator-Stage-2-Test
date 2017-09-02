import React from "react";

export default class NavBarSocialItem extends React.Component {
    render() {
        return (
            <button className="navbarsocialitem">
                <img className="navbaritemsocialicon" src={this.props.icon}/>
            </button>
        );
    }
}