//Dependences
import React from 'react';

// Components
import GridViewItem from "./GridViewItem";

export default class GridView extends React.Component {
    constructor() {
        super();
        this.name = "Ashley Chapman Design";
    
    }

    render() {

        var items = [
            {
                title: "Honours Project",
                description: "This Project I did for my Universiy's (UWS) Honours Year. Which was about making a News Desktop Application using Web Technologies that was Cross-Platform.",
                thumbnail: "./static/assets/images/honours/image1.png",
                toLink: "/portfolio/honoursproject",
                buttonType: "btn-primary"
            },
            {
                title: "Project Study Module",
                description: "This Project I did for My Third Year In one of My Modules at University, was about making a Web Application Using Node.Js and REST APIs to make a Radio App.",
                thumbnail: "./static/assets/images/projectstudy/image1.png",
                toLink: "/portfolio/studyproject",
                buttonType: "btn-primary"
            },
            {
                title: "Nodejs Account System",
                description: "This was a Personal Project to see if it was possible to Make a Website that has a User Account System using Node.JS, Handlebars, Bootstrap and MongoDB, which was a success.",
                thumbnail: "./static/assets/images/nodeaccountsystem/image1.png",
                toLink: "/portfolio/nodejsaccountsystem",
                buttonType: "btn-primary"
            }
        ];

        return (
            <div className="gridViewItemCell">
                    <div className="cellbtn">
                        <img id="thumbnailGridItem" className="gridviewitem-thumbnail" src={this.props.thumbnail} alt="Card image cap"/>
                        <div className="gridviewitem-block">
                            <h5 className="gridviewitem-title">{this.props.title}</h5>
                            <div className="gridviewitem-apartmenttypes">
                                <div className="gridviewitem-numofbedsindicator">
                                    <img src="./images/badges/bed16x11.png"/>
                                    <h6>{this.props.numBeds}</h6>
                                </div>
                                <div className="gridviewitem-numofpeopleindicator">
                                    <img src="./images/badges/person12x12.png"/>
                                    <h6>{this.props.numPeople}</h6>
                                </div>
                            </div>                            
                        </div>
                    </div>
                </div>
        );
    }
}