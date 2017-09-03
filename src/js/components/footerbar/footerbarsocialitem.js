import React from "react";

export default class FooterBarSocialItem extends React.Component {
    render() {
        return (
            <button className="footerbarsocialitem">
                <img className="footerbaritemsocialicon" src={this.props.icon}/>
            </button>
        );
    }
}