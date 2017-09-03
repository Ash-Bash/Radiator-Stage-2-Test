import React from "react";

// Component
import OfferContainer from "./offercontainer";

export default class DescriptionContainer extends React.Component {
    render() {
        return (
            <div className="description-container">
                <div className="description-paragraph">
                    <h2>The Best Winter or Summer Holidays at Chalet La Giettaz</h2>
                    <p>
                        orem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                        sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                        mollit <a className="hyperlink" href="#">anim id est laborum</a>.
                    </p>
                    <p>
                        ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                        doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                        inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </p>
                </div>
                <OfferContainer className="offer-container" title="March 2017 Special Offer" description="25% discount on all stays of 7+ nights between 11th and 32st March" link="#"/>
            </div>
        );
    }
}