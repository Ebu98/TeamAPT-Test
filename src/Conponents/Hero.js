import React from "react";
import "./Hero.css";
import Fade from "react-reveal/Fade";

function Hero() {
  return (
    <div className="hero-body">
      <div className="icon-container">
        <div className="left-icon">
          <img src="./assets/logo.png" alt="" />
        </div>
        <div className="right-icon">
          <img src="./assets/frame-right.png" alt="" />
        </div>
      </div>
      <div className="star-icon">
        <img src="./assets/top-stars.png" alt="" />
      </div>

      <div className="container">
        <Fade bottom>
          <div className="text-body">
            <h3>Unlock to</h3>
            <h2>Power your dreams!</h2>
          </div>
        </Fade>
        <Fade bottom>
          <p className="hero-para">
            stand a chance to win
            <br />
            N3,000,000 everyday for the next 5days
          </p>
        </Fade>

        <div className="card">
          <h3>🚀 How To Play</h3>
          <ol>
            <li>Guess the right combination of numbers </li>
            <li>Win N3,000,000 instantly</li>
          </ol>
          <p>Sound unbelievable? well guess right & see for yourself!</p>
          <div className="card2">
            <p>
              💡Think well before you guess, You can only have 2 attempts per
              <br />
              day and even after you win, you can come back the next day
              <br />
              to try for another jackpot
            </p>
          </div>
        </div>
        <button className="button">
          Play The Game{" "}
          <img src="./assets/Vector.png" alt="" className="arrow-image" />{" "}
        </button>
        <div className="image-container">
          <div className="coin-right">
            <img src="./assets/coin-right.svg" alt="" className="ri-image" />
          </div>
          <div className="coin-left">
            <img src="./assets/coin-left.svg" alt="" className="li-image" />
          </div>
          <div className="star-image">
          <img src="./assets/star1.png" alt="" />
          <img src="./assets/star2.png" alt="" />
          </div>
          <div className="coin-pot">
            <img src="./assets/coin-pot.svg" alt="" className="pot-image" />
          </div>
          <div
            className=""
            style={{
              position: "absolute",
              bottom: "0",
              // height: "500px",
              overflow: "hidden",
            }}
          >
            <img className="rotateLightBeam" src="/assets/Group2.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
