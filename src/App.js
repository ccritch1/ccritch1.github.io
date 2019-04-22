import React, { Component } from 'react';
import Popup from "reactjs-popup";
import BurgerIcon from "./BurgerIcon";
import { bounceInRight } from 'animate.css';
import Menu from "./Menu";
import "./index.css";
import "./hamburger.css";
import logo from "./logo_1.png"
import { ReactComponent as LogoVector } from "./logo_2.svg"
import icon from './dribbble.svg';
import icon2 from './linked.svg';
import icon3 from './github.svg';
//import About from './About.js';


class Icons extends Component {
  render() {
    return (
      <div className="Icons">
        <a href="http://dribble.com/ccritch1/"> <img alt="" className="icons2" src={icon}></img></a>
        <a href="http://www.linkedin.com/in/cole-critchfield-86352b122/"><img alt="" className="icons2" src={icon2}></img> </a>
        <a href="http://www.github.com/ccritch1/"> <img alt="" className="icons2" src={icon3}></img> </a>
      </div>
    )
  }
}


const styles = {
  background: "rgba(50,50,50)",
  fontFamily: "Avenir Next",
}

const contentStyle = {
  background: "rgba(255,255,255,0)",
  color: "white",
  width: "80%",
  border: "none"
};


class Title extends Component {
  render() {
    return (
      <div>
        <h1 className="Hello" style={bounceInRight}>Hello</h1>
        <img className="logo" src={logo} alt="Logo"></img>
        <p className="welcome-l">welcome   to   my</p>
        <p className="life">LIFE</p>
      </div>

    )
  }
}


class Clogo extends Component {
  render() {
    return (
      <div className="left-logo">

        <p className="C-logo"> C</p>
        <p className="Name-Logo"> ole Critchfield</p>
      </div>
    )
  }
}

/** const Background = props => (
  <div className="BackgroundStyle.Background">
    <Particles
      params={{
        "particles": {
          "number": {
            "value": 50
          },
          "size": {
            "value": 3
          }
        },
        "interactivity": {
          "events": {
            "onhover": {
              "enable": true,
              "mode": "repulse"
            }
          }
        }
      }} />
  </div>
)*/


class App extends Component {
  render() {
    return (

      <div style={styles}>
        <div className="main">
          <Popup
            modal
            overlayStyle={{ background: "#292929" }}
            contentStyle={contentStyle}
            closeOnDocumentClick={false}
            trigger={open => <BurgerIcon open={open} />}
          >
            {close => <Menu close={close} />}
          </Popup>

        </div>
      </div>

    )
  }
}

class Main extends Component {
  render() {
    return (
      <body>
        <div>

          <div>
            <Clogo />
            <Icons />
          </div>
          <Title />
          <LogoVector className="logoVector" />

        </div>
      
        <App />
      </body>
    )
  }
}




export default Main;

