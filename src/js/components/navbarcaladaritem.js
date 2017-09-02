import React from "react";

export default class NavBarCaladarItem extends React.Component {
    render() {
        return (
            <button className="navbarcaladaritem">
                <img className="navbaritemcaladaricon" src={this.props.icon}/>
            </button>
        );
    }
}