import React from 'react';
import './App.css';
import Yosi from "./yosi";
import Question from "./question";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            clicked: false
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            clicked: true
        });
    }

    render() {
        return (
            <div>
                {this.state.clicked ? <Yosi /> : <Question onClick={this.handleClick} />}
            </div>
        );
    }
};

export default App;
