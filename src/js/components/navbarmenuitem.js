import React from "react";

export default class NavBarMenuItem extends React.Component {
    render() {
        return (
            <button className="navbarmenuitem">
                <img className="navbaritemmenuicon" src={this.props.icon}/>
            </button>
        );
    }
}