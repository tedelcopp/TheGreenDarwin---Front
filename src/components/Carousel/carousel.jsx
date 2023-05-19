import React from "react";
import s from "../Carousel/carousel.module.css";
import background1 from "../../assets/search.jpg";
import background2 from "../../assets/search2.jpg";
import background3 from "../../assets/search3.jpg";
import background4 from "../../assets/search4.jpg";
import background5 from "../../assets/search6.jpg";
import background6 from "../../assets/search7.jpg";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";

export default function Carouselle() {
  return (
    <div className={s.containerH}>
      <Carousel>
        <div>
          <header>
            <img className={s.imgCar} alt="carousel1" src={background1} />
          </header>
          <div className={s.nameInite}>Welcome to </div>
          <div className={s.nameInite2}>The Green Darwin!</div>
          <div className={s.bar_slogan}>
            <span className={s.h1_slogan}>Leave it in our hands</span>
            <Link to="/about-us">
              <button className={s.hAbouts}>
                <a className={s.uS}>Our Team</a>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <header>
            <img className={s.imgCar} alt="carousel2" src={background2} />
          </header>

          <div className={s.barExplore}>
            <span className={s.explore}>Explore our </span>
            <span className={s.barVariety}> VARIETY </span>
            <Link to="/shop">
              <button className={s.hShop}>
                <a>Go To Shop</a>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <header>
            <img className={s.imgCar} alt="carousel4" src={background4} />
          </header>
          <div className={s.name}>The Green Darwin</div>
          <div className={s.bar}>
            <span className={s.h1_3}>
              Delighted to share our passion
              <span className={s.h1_steps}> with you!</span>
            </span>
          </div>
        </div>
        <div>
          <header>
            <img className={s.imgCar} alt="carousel4" src={background5} />
          </header>
          <div className={s.name}>The Green Darwin</div>
          <div className={s.bartop}>
            <span className={s.h1_1}>Buy our selected plants in </span>
            <span className={s.h1_steps}>three simple steps!</span>
          </div>
        </div>
        <div>
          <header>
            <img className={s.imgCar} alt="carousel4" src={background6} />
          </header>
          <div className={s.name}>The Green Darwin</div>
          <div className={s.bar_life}>
            <span className={s.h1}>Bring </span>
            <span className={s.h2}>life</span>
            <span className={s.h1}>to your</span>
            <span className={s.h2}>home</span>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
