import { useSelector } from "react-redux";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay } from "swiper";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/free-mode";
import style from "./OffertCarroussel.module.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProducts } from "../../redux/actions/actionIndex"; //change to ofertProducts

function OffertCarroussel() {
  const dispatch = useDispatch();
  const ofertProducts = useSelector((state) => state.allProducts); //change to ofertProducts

  useEffect(() => {
    dispatch(getProducts()); //change to ofertProducts
  }, []);

  return (
    <div className="m-5">
      <div className={style.flexContainer}>
        <h2 className="blueOur">Check out our</h2>
        <h2 className={style.green}>Discounts!</h2>
      </div>

      <div className={style.reel}>
        <Swiper
          speed={2000}
          freeMode={true}
          grabCursor={true}
          modules={[Autoplay, Keyboard]}
          autoplay={{
            delay: 3000,
          }}
          keyboard={{
            enabled: true,
          }}
          className="mySwiper m-4 justify-content-center w-100"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
              centeredSlides: true,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 15,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {ofertProducts.map((e) => {
            return (
              <SwiperSlide key={e.id}>
                <Link to={`/products/${e.id}`} key={e.id}>
                  <ProductCard
                    key={e.id}
                    id={e.id}
                    img={e.img}
                    name={e.name}
                    price={e.price}
                  />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
export default OffertCarroussel;
