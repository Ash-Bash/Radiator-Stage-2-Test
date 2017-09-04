import React from "react";

// Components
import TripAdvisorView from "../tripadvisorview";

export default class ReviewQuotesContainer extends React.Component {
    render() {
        return (
            <div className="reviewquotes-container">
                <img src="./images/stella-villa.png"/>
                <div className="reviewquotes-info">
                    <div className="reviewquotes-carousel">
                    <p>
                        A fantastic place to stay where the
                        attention to detail is second to none.
                        Friendly and helpful staff who really 
                        have thought of everything. Lovely 
                        apartments in a beautiful setting
                        (we had great weather!) and all a 
                        few minutes drive from great skiing...
                    </p>
                    <h6>March 2010</h6>  
                    </div>
                    <div className="reviewqoutes-adview">
                        <TripAdvisorView />
                    </div>
                </div>
            </div>
        );
    }
}