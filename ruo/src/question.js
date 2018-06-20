import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Question extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">כמה אוטיסט אתה?</h1>
                </header>
                <p className="App-intro">
                    בחר את התשובה המתאימה
                </p>
                <p className="App-intro">
                    איך קוראים לך?
                </p>
                <button onClick={this.props.onClick}>יוסי</button>
            </div>
        );
    }
}

export default Question;
