import React from "react";

// Components
import FooterBarSocialItem from "./footerbarsocialitem";

export default class FooterBar extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footercontent">
                    <div className="footercontent-contactdetails">
                        <div className="footercontent-addressdetails">
                            <h3><strong>CHALET LA GIETTAZ</strong></h3>
                            <h4 className="footerdetailheader">Route du Col des Aravis</h4>
                            <h4 className="footerdetailheader">73590 La Giettaz</h4>
                            <h4 className="footerdetailheader">FRANCE</h4>
                        </div>
                        <div className="footercontent-telandemaildetails">
                            <h3><strong>TEL</strong></h3>
                            <h4 className="footerdetailheader">+33 (0)6 73 39 10 73</h4>
                            <h3><strong>Email</strong></h3>
                            <a className="hyperlink" href="#">reservations@chalet-la-giettaz.com</a>
                        </div>
                        <div className="footercontent-socialdetails">
                            <div className="footercontent-newsletter">
                                <img className="newsletter-icon" src="/images/badges/Mail.png"/>
                                <h4 className="footerdetailheader newsletter-title"> Get the Chalet la Ciettaz Newsletter</h4>
                            </div>
                            <div className="footercontent-sociallinks">
                                <FooterBarSocialItem icon="/images/badges/social_instagram.png" link=""/>
                                <FooterBarSocialItem icon="/images/badges/social_twitter.png" link=""/>
                                <FooterBarSocialItem icon="/images/badges/social_facebook.png" link=""/>
                                <FooterBarSocialItem icon="/images/badges/social_tripadvisor.png" link=""/>
                            </div>
                        </div>
                    </div>
                    <div className="footercontent-copyrightfooter">
                        <div className="footercontent-copyrightleftcontent">
                            <h6>La Giettaz Properties SARL 2017</h6>
                        </div>
                        <div className="footercontent-copyrightrightcontent">
                            <h6>Site By <strong>RADIATOR</strong></h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}