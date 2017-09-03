import React from "react";

export default class MoreInfoThumbnailCard extends React.Component {
    render() {
        return (
            <div className="moreinfothumbnailcard-container">
                <img src={ this.props.thumbnail }/>
                <h5>{ this.props.title }</h5>
                <h4>{ this.props.description }</h4>
            </div>
        );
    }
}