//Dependences
import React from 'react';

export default class TripAdvisorView extends React.Component {

    render() {

        return (
            <div class="triadvisorview">
                <img src="./images/stella-villa-small.png"/>
                <div className="triadvisorview-info">
                    <h3 className="triadvisorview-info-title">Chalet La Giettaz</h3>
                    <div className="triadvisorview-info-reviewbar">
                        <img className="triadvisorview-info-dummyrating" src="./images/badges/dumby_rating.png"/>
                        <p>75 Reviews</p>
                    </div>
                    <div className="triadvisorview-info-rating">
                        <p className="triadvisorview-info-paragraph">
                            #1 of 1 Speciality Lodging in La Giettaz
                        </p>
                        <img src="./images/badges/social_tripadvisor_color.png"/>
                    </div>
                    <button className="triadvisorview-info-button">Discover More On TripAdvisor</button>
                </div>
            </div>
        );
    }
}