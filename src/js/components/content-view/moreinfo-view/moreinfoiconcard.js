import React from "react";

export default class MoreInfoIconCard extends React.Component {
    render() {
        return (
            <div className="moreinfoiconcard-container">
                <div className="moreinfo-iconcontainer">
                    <img src={ this.props.icon }/>
                </div>
                <h5>{ this.props.title }</h5>
                <h4>{ this.props.description }</h4>
            </div>
        );
    }
}