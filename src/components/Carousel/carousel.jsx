import React from "react";
import s from '../Carousel/carousel.module.css'
import background1 from '../../assets/search.jpg'
import background2 from '../../assets/search2.jpg'
import background3 from '../../assets/search3.jpg'
import background4 from '../../assets/search4.jpg'
import background5 from '../../assets/search6.jpg'
import background6 from '../../assets/search7.jpg'

import { Carousel } from "react-responsive-carousel";

export default function Carouselle() {
    return (
        <div className={s.containerH}>


            <Carousel showThumbs={false} autoPlay interval={5000} infiniteLoop>

                <div>
                    <header>
                        <img className={s.imgCar} alt="carousel1" src={background1} />
                    </header>
                    <div className={s.nameInite}>Welcome to </div>
                    <div className={s.nameInite2}>Vivero Henry!</div>
                    <div className={s.bar_slogan}>
                        <span className={s.h1_slogan}>"Leave it in our hands"</span>
                    </div>
                </div>
                <div>
                    <header>
                        <img className={s.imgCar} alt="carousel2" src={background2} />
                    </header>

                    <div className={s.bar2}>
                        <span className={s.h1}>Explore our </span>
                        <span className={s.barVariety}> VARIETY </span>
                        <button className={s.hShop}><a href="/shop">Go To Shop</a></button>

                    </div>
                </div>
                <div>
                    <header>
                        <img className={s.imgCar} alt="carousel4" src={background4} />
                    </header>
                    <div className={s.name}>Vivero Henry</div>
                    <div className={s.bar}>
                        <span className={s.h1_3}>Delighted to share our passion with you!</span>
                    </div>
                </div>
                <div>
                    <header>
                        <img className={s.imgCar} alt="carousel4" src={background5} />
                    </header>
                    <div className={s.name}>Vivero Henry</div>
                    <div className={s.bar}>
                        <span className={s.h1_1}>Buy our selected plants in </span>
                        <span className={s.h1_steps}>three simple steps!</span>
                    </div>
                </div>
                <div>
                    <header>
                        <img className={s.imgCar} alt="carousel4" src={background6} />
                    </header>
                    <div className={s.name}>Vivero Henry</div>
                    <div className={s.bar_life}>
                        <span className={s.h1}>Bring </span>
                        <span className={s.h2}>life</span>
                        <span className={s.h1}>to your</span>
                        <span className={s.h2}>home</span>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}