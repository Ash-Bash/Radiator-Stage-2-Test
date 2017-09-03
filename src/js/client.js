import React from "react";
import ReactDOM from "react-dom";

//Components
import BackgroundView from "./components/backgroundview";
import NavBar from "./components/navbar/navbar";
import FooterBar from "./components/footerbar/footerbar";
import ContentView from "./components/content-view/contentview";

class App extends React.Component {
    render() {
        return (
            <div className="appView">
                <BackgroundView className="backgroundView"/>
                <div className="wrapper">
                    <NavBar className="navbar"/>
                    <ContentView className="content"/>
                </div>
                <FooterBar className="footer"/>
            </div>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<App/>, app);