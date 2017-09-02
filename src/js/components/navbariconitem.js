import React from "react";

export default class NavBarIconItem extends React.Component {
    render() {
        return (
            <button className="navbariconitem">
                <img className="navbaritemicon" src={this.props.icon}/>
            </button>
        );
    }
}