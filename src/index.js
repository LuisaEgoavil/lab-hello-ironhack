import React from 'react'
//or import React, {Component} from 'react'

import ReactDOM from 'react-dom'

import './style.css'

//or class App extends Component {etc etc etc}
class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div class="logo">
                    <img src="/images/ironhack-logo.svg"></img>
                    <img src="/images/menu-top.svg"></img>
                    <img src="/images/react-logo.svg"></img>
                <div class="introtext">
                    <h1 class="title">Welcome to ReactJS</h1>
                    <p class="welcome">You will learn how to use<br></br> the most popular fronted library,<br></br> and become a super Ninja developer</p>
                </div>
                <button class="button">Awesome</button>
                </div>
                <div class="container">
                    <img src="/images/icon1.png"></img>
                    <h4>Declarative</h4>
                    <p>React makes it<br></br>painless to create<br></br> interactive UIs.</p>
                    <img src="/images/icon2.png"></img>
                    <h4>Components</h4>
                    <p>Build encapsulated<br></br>components that<br></br>manage their state.</p>
                    <img src="/images/icon3.png"></img>
                    <h4>Single-Way</h4>
                    <p>A set of immutable<br></br>values are passed to<br></br>the component's.</p>
                    <img src="/images/icon4.png"></img>
                    <h4>JSX</h4>
                    <p>Statically-typed,<br></br>designed to run on<br></br>modern browsers.</p>
                </div>
                <div>
                </div>
                
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#myApp'))