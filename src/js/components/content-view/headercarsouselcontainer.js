import React from "react";
import { Carousel } from "react-responsive-carousel";

export default class HeaderCarsouselContainer extends React.Component {
    
    render() {
        return (
            <div className="headerCarousel">
                <Carousel className="headerCarousel-container" axis="horizontal" showStatus={false} showThumbs={false} showArrows={false} emulateTouch>
                    <div>
                        <h2>THE PERFECT</h2>
                        <br />
                        <h4>Boutique Alpine Escape</h4>
                    </div>
                    <div>
                        <h2>THE PERFECT</h2>
                        <br />
                        <h4>Boutique Alpine Escape</h4>
                    </div>
                    <div>
                        <h2>THE PERFECT</h2>
                        <br />
                        <h4>Boutique Alpine Escape</h4>
                    </div>
                </Carousel>
            </div>
        );
    }
}