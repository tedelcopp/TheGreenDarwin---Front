import React from "react";
import s from "../AboutUs/AboutUs.module.css";
import NavBar from "../NavBar/NavBar";
import geenPlant from "../../assets/greenF.png";
import Footer from "../Footer/Footer";

export default function AboutUs() {
  return (
    <div>
      <div className={s.nav}>
        <NavBar />
      </div>
      <h1 className={s.title}>
        <u>About Us</u>
        <div className={s.image}></div>
      </h1>
      <div className={s.aboutUsSelection}>
        <div className={s.geenImg}>
          <img src={geenPlant}></img>
        </div>

        <div className={s.containerGreen}>
          <h3 className={s.title1}>
            Welcome to our nursery company "The Green Darwin" where we bring
            nature and beauty to your doorstep. Our passion for plants and
            gardening has led us to create a one stop shop for all your
            gardening needs.
          </h3>
          <h3 className={s.title1}>
            We offer a wide range of plants, from the rarest to the most
            popular, sure to bring any garden to life. Our team of experts
            carefully selects each and every one of the plants to guarantee
            their quality and health.
          </h3>
          <h3 className={s.title1}>
            Along with plants, we also offer a variety of garden supplies,
            including potting soil, fertilizers, garden tools, and more. Whether
            you're a seasoned gardener or just getting started, we've got
            everything you need to make your gardening dreams come true.
          </h3>
          <h3 className={s.title1}>
            At our nursery, we believe that a healthy garden starts with healthy
            plants. That's why we take great care in maintaining the health of
            our plants and providing you with the information and support you
            need to keep them thriving.
          </h3>
          <h3 className={s.title1}>
            Visit us today and see for yourself why we are a favorite
            destination for gardening enthusiasts. Our friendly and
            knowledgeable staff is always here to help, and we look forward to
            helping you create a beautiful and thriving garden.
          </h3>
          <h3 className={s.title1}>
            You can contact us through our contact methods and we can gladly
            advise and guide you in your foray into the beautiful world of
            gardening.
          </h3>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
