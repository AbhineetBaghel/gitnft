import React from "react";
import { useState } from "react";
import Card from "../components/Card";
import logo from '../img/logo.png';
import { ConnectButton } from '@rainbow-me/rainbowkit';

import "./Index.scss";
export default function Test() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState("");

  function search() {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }
  return (
    <>
      <div className="container-relative">
        <div className="row-absolut">


      {/* Menu */}
      <div className="menu">
        <div className="container flex">
          {/* Mobile Button */}
          <div className="mobile-btn">
            <ion-icon name="grid" />
          </div>
          <div className="logo">
            <img
              src={logo}
              alt="LOGO"
            />
          </div>

          <a href="#" className="btn">
            Connect Wallet
          </a>
          <ConnectButton />
        </div>
      </div>
      {/* End Menu */}
      {/* Header */}
      <header className="header">
        <div className="container flex">
          <div className="text">
            <h1 className="mb">
              Get Your First <br />
              <span>NFT</span> By Us
            </h1>
            <p className="mb">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sunt
              sed tempora neque molestiae corrupti nobis harum ullam eos nam!
            </p>
            {/* sir ka likha coad starts*/}
            <input className="search" value={username} onChange={(e) => setUsername(e.target.value)} />
            <button className="search-btn" onClick={search}>Search for User</button>

            {userData && <Card data={userData} username={username} />}
            {/* sir ka likha coad end */}
            {/* search option ka alt*/}
            {/* <a href="#" className="btn">
              Connect Wallet
            </a> */}
            {/* search option ka alt khatam */}
          </div>
          <div className="visual">
            <img
              src="https://github.githubassets.com/images/modules/site/home-campaign/astrocat.png?width=480&format=webpll"
              alt=""
            />
          </div>
        </div>
      </header>
      {/* End Header */}
      
      {/* Explore */}
      <div className="section" id="explore">
          <div className="container flex">
            <div className="visual">
              <img src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/explore.jpg" alt="" />
            </div>
            <div className="text">
              <h2 className="primary mb">
                Explore Our Fitness <br />
                Studio
              </h2>
              <p className="tertiary mb">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
                esse vitae ratione quos maiores eveniet temporibus illum! Eligendi
                amet officia unde sint totam ut optio. Molestiae, illo quia?
              </p>
              <a href="#" className="btn mt">Get Started Now</a>
            </div>
          </div>
        </div>
        {/* End Explore */}
        {/* Trainer */}
        <div className="section" id="trainer">
          <h2 className="primary mb">Our Professional Trainers</h2>
          <div className="container flex">
            <div className="trainer">
              <img src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer1.jpg" alt="" />
              <h3 className="secondary mb">Alan Smith</h3>
              <p className="tertiary mb">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
              </p>
              <a href="#" className="btn-2">
                <ion-icon name="arrow-redo-circle-outline" />
              </a>
            </div>
            <div className="trainer">
              <img src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer2.jpg" alt="" />
              <h3 className="secondary mb">Alan Smith</h3>
              <p className="tertiary mb">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
              </p>
              <a href="#" className="btn-2">
                <ion-icon name="arrow-redo-circle-outline" />
              </a>
            </div>
            <div className="trainer">
              <img src="https://raw.githubusercontent.com/programmercloud/pgc-gym/main/img/trainer3.jpg" alt="" />
              <h3 className="secondary mb">Alan Smith</h3>
              <p className="tertiary mb">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla.
              </p>
              <a href="#" className="btn-2">
                <ion-icon name="arrow-redo-circle-outline" />
              </a>
            </div>
          </div>
        </div>
        {/* End Trainer */}

      </div>
      </div>
    </>
  );
}
