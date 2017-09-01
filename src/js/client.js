import React from "react";
import ReactDOM from "react-dom";

//Components
import BackgroundView from "./components/backgroundview";

class App extends React.Component {
    render() {
        return (
            <div>
                <BackgroundView className="backgroundView"/>
            </div>
        );
    }
}

const app = document.getElementById('app');
ReactDOM.render(<App/>, app);