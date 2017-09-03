import React from "react";

// Components
import MoreInfoIconCard from "./moreinfoiconcard";
import MoreInfoThumbnailCard from "./moreinfothumbnailcard";

export default class MoreInfoView extends React.Component {
    render() {
        return (
            <div className="moreinfo-container">
                <MoreInfoIconCard title="Groups" description="Group Bookings and Information" icon="./images/badges/Glasses.png"/>
                <MoreInfoIconCard title="Faqs" description="Additional information to help you make the most of your trip" icon="./images/badges/Crossroads.png"/>
                <MoreInfoThumbnailCard title="06 Feb 2017" description="Snow has arrived better late than never" thumbnail="./images/SnowyAlpineLandscapeImage2.png"/>
            </div>
        );
    }
}