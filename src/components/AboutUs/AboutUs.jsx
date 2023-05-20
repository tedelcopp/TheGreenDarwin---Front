import React from "react";
import s from "../AboutUs/AboutUs.module.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Carousel } from "react-responsive-carousel";
import gardiner from "../AboutUs/gardiner.jpg";
import ContactForm from "../ContactForm/ContactForm";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <div>
      <div className={s.nav}>
        <NavBar />
      </div>
      {/* <div className={s.imgaboutus}></div> */}
      <h1 className={s.title}>
        <u> About Us </u>
        <Carousel showThumbs={false} autoPlay interval={5000} infiniteLoop>
          <header>
            <img className={s.imgCar} alt="carousel1" src={gardiner} />
          </header>
          <header>
            <img className={s.imgCar} alt="carousel1" src={gardiner} />
          </header>
          <header>
            <img className={s.imgCar} alt="carousel1" src={gardiner} />
          </header>
        </Carousel>
        {/* <div className={s.image}></div> */}
      </h1>
      <div className={s.aboutUsSelection}>
        <div className={s.containerGreen}>
          <h3 className={s.title1}>
            <p>
              Welcome to our nursery company "The Green Darwin" where we bring
              nature and beauty to your doorstep. Our passion for plants and
              gardening has led us to create a one stop shop for all your
              gardening needs.
            </p>
          </h3>
          <h3 className={s.title1}>
            <p>
              We offer a wide range of plants, from the rarest to the most
              popular, sure to bring any garden to life. Our team of experts
              carefully selects each and every one of the plants to guarantee
              their quality and health.
            </p>
          </h3>
          <h3 className={s.title1}>
            <p>
              Along with plants, we also offer a variety of garden supplies,
              including potting soil, fertilizers, garden tools, and more.
              Whether you're a seasoned gardener or just getting started, we've
              got everything you need to make your gardening dreams come true.
            </p>
          </h3>
          <h3 className={s.title1}>
            <p>
              At our nursery, we believe that a healthy garden starts with
              healthy plants. That's why we take great care in maintaining the
              health of our plants and providing you with the information and
              support you need to keep them thriving.
            </p>
          </h3>
          <h3 className={s.title1}>
            <p>
              Visit us today and see for yourself why we are a favorite
              destination for gardening enthusiasts. Our friendly and
              knowledgeable staff is always here to help, and we look forward to
              helping you create a beautiful and thriving garden.
            </p>
          </h3>
          <h3 className={s.title1}>
            <p>
              You can contact us through our contact methods and we can gladly
              advise and guide you in your foray into the beautiful world of
              gardening.
            </p>
          </h3>
        </div>
      </div>
      <div>
        {" "}
        <Link>
          <button className={s.contactUs}>Contact Us</button>
        </Link>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
