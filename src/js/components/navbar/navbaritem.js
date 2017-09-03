import React from "react";

export default class NavBarItem extends React.Component {
    render() {
        return (
            <button className="navbaritem">
                {this.props.title}
            </button>
        );
    }
}