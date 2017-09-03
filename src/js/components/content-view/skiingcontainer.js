import React from "react";

export default class SkiingContainer extends React.Component {
    render() {
        return (
            <div className="skiing-container">
                <img src="./images/stella-caraman.png"/>
                <div className="skiing-info">
                    <h2>Only <strong>5 Minutes</strong> from Evasion Mont Blanc</h2>
                    <div className="skiing-liftinfo">
                        <h6 className="skiing-liftinfoitem">Lift Status:</h6>
                        <ul className="skiing-liftinfoitem skiing-liftinfolist">
                            <li className="skiing-liftinfolistitem"><h6 className="lifeinfo-openmarker">{ this.props.lifts_open }</h6> <h6>Open</h6></li>
                            <li className="skiing-liftinfolistitem"><h6 className="lifeinfo-scheduledmaker">{ this.props.lifts_scheduled }</h6> <h6>Scheduled</h6></li>
                        </ul>
                    </div>
                    <button>Skiing / Snowboarding</button>
                </div>
            </div>
        );
    }
}