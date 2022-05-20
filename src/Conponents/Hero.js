import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-body">
      <div className="container">
        <div className="text-body">
          <h3>Unlock to</h3>
          <h2>Power your dreams!</h2>
        </div>
        <p>
          stand a chance to win
          <br />
          #3,000,000 everyday for the next 5days
        </p>
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
        <button className="button">Play The Game </button>
        <div>
          <div className="second-image">
          </div>
          <div>
            <img src="./assets/coin-pot.png" alt="" className="pot-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
