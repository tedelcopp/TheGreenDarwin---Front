import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Login/Login";
import LogoutButton from "../Logout/Logout";

// --import style-- //
import style from "./NavBar.module.css";
import BurgerMenu from "./Burger";

export default function NavBar() {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();
  //usar la logica de abajo cada vez que se quiera chequear si el user es admin, retorna un booleano
  const isAdmin = user && user["https://pf-henry-front-one.vercel.app/roles"].includes("Admin");
  // user && console.log(user)

  let navigate = useNavigate();

  const handleClickMarket = () => {
    window.location.reload()
  };

  const handleClickHome = (e) => {
    navigate("/");
  };

  return (
    <div>
      <div className={style.background}>
        <div className={style.NavBar}>
          <div className={style.left}>
            <Link to="/" className={style.btn_left}>
              <FontAwesomeIcon
                icon={faHome}
                className={style.icon}
                onClick={(e) => handleClickHome(e)}
                alt="Home icon"
              />
            </Link>
            <Link to="/shop" className={style.btn_left}>
              Shop
            </Link>
            <Link to="/about-us" className={style.btn_left}>
              About Us
            </Link>
            <Link to="/blogs" className={style.btn_left}>
              Blog
            </Link>
          </div>

          <div className={style.right}>
            {isAuthenticated ? <>
              <div className={style.userName}> Hello, {user.nickname}!
                <BurgerMenu /></div>
            </>
              : <LoginButton className={style.btn_right} />}
            {isAdmin && 
              <Link to='/admin' className={style.btn_right}>Admin dashboard</Link>
            }
            <Link to="/cart" className={style.btn_right} onClick={window.location.reload}>

              <FontAwesomeIcon
                icon={faCartShopping}
                className={style.icon}
                
                alt="Shopping cart icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
