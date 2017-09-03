import React from "react";

// Components
import FooterBarSocialItem from "./footerbarsocialitem";

export default class FooterBar extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footercontent">
                    <div className="footercontent-contactdetails-container">
                        <div className="footercontent-contactdetails">
                            <div className="footercontent-addressdetails">
                                <h5><strong>CHALET LA GIETTAZ</strong></h5>
                                <h6 className="footerdetailheader">Route du Col des Aravis</h6>
                                <h6 className="footerdetailheader">73590 La Giettaz</h6>
                                <h6 className="footerdetailheader">FRANCE</h6>
                            </div>
                            <div className="footercontent-telandemaildetails">
                                <h5><strong>TEL</strong></h5>
                                <h6 className="footerdetailheader">+33 (0)6 73 39 10 73</h6>
                                <h5><strong>Email</strong></h5>
                                <a className="hyperlink" href="#">reservations@chalet-la-giettaz.com</a>
                            </div>
                            <div className="footercontent-socialdetails">
                                <div className="footercontent-newsletter">
                                    <img className="newsletter-icon" src="/images/badges/Mail.png"/>
                                    <h6 className="footerdetailheader newsletter-title"> Get the Chalet la Ciettaz Newsletter</h6>
                                </div>
                                <div className="footercontent-sociallinks">
                                    <FooterBarSocialItem icon="/images/badges/social_instagram.png" link=""/>
                                    <FooterBarSocialItem icon="/images/badges/social_twitter.png" link=""/>
                                    <FooterBarSocialItem icon="/images/badges/social_facebook.png" link=""/>
                                    <FooterBarSocialItem icon="/images/badges/social_tripadvisor.png" link=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footercontent-copyrightfooter">
                        <div className="footercontent-copyrightleftcontent">
                            <h6>La Giettaz Properties SARL 2017</h6>
                        </div>
                        <div className="footercontent-copyrightrightcontent">
                            <h6>Site By <strong className="footercontent-companyname">RADIATOR</strong></h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}