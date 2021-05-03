import React, { useEffect } from "react";
import Logo from "./../../../../assets/images/logo.svg";
import Hamburger from "./../../../../assets/images/icon-hamburger.svg";
import CloseHamburger from "./../../../../assets/images/icon-close-menu.svg";
import "./style.scss";

export const AppHeader = () => {
  useEffect(() => {
    const hamburger = document.querySelector("#hamburger");
    const navUl = document.querySelector("#nav-ul");
    // console.log(hamburger.classList);

    hamburger.addEventListener("click", () => {
      if (navUl.classList.length === 1) {
        hamburger.innerHTML =
          '<img src= "' + CloseHamburger + ' " alt="hamburger icon"/> ';
        navUl.classList.add("show");
      } else {
        hamburger.innerHTML =
          '<img src= "' + Hamburger + ' " alt="hamburger icon"/> ';
        navUl.classList.remove("show");
      }
      // console.log(navUl.classList);
    });
  });



  return (
    <header className="hero">
      <div className="header-content">
        <nav id="nav" className="nav">
          <span>
            <img src={Logo} alt="crowdfund logo" />
          </span>

          <button className="menu" id="hamburger">
            <img src={Hamburger} alt="hamburger icon" />
          </button>
          <ul className="nav-ul" id="nav-ul">
            <li>
              <a href="#about">About</a>
            </li>
            <li className="mid-anchor">
              <a href="#discover">Discover</a>
            </li>
            <li>
              <a href="#getStarted">Get Started</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
