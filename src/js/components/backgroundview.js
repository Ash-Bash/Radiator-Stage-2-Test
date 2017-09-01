import React from "react";

export default class BackgroundView extends React.Component {
    render() {
        return (
            <div className="backgroundView">
                <img className="backgroundWoodTextureImage" src="./images/BackgroundImage.png"/>
                <img className="backgroundHeaderImage" src="./images/SnowyAlpineLandscapeImage.png"/>
            </div>
        );
    }
}