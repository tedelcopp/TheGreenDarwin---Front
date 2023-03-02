import { React, useState } from "react";
import s from "./userSidebar.module.css";
import LogoutButton from "../Logout/Logout";
import EditAccount from "./EditAccount";
import WishList from "./WishList";
import UserReviews from "./UserReviews";
import AccountInfo from "./AccountInfo";
import ReviewsSharpIcon from "@mui/icons-material/ReviewsSharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import AppShortcutSharpIcon from "@mui/icons-material/AppShortcutSharp";
import RateReviewSharpIcon from "@mui/icons-material/RateReviewSharp";

export default function UserSidebar() {
  const [isActive, setIsActive] = useState(false);
  const [isWish, setIsWish] = useState(false);
  const [isReviews, setIsReviews] = useState(false);
  const [isInfo, setIsInfo] = useState(true);

  return (
    <>
      <div className={s.all}>
        <div className={s.sbContainer}>
          <div className={s.list}>
            <h4>
              <u>My Account</u>
            </h4>
            <ul>
              <li
                className={s.listItem}
                onClick={() => {
                  setIsInfo(true);
                  setIsActive(false);
                  setIsWish(false);
                  setIsReviews(false);
                }}
              >
                <h3 className={s.iconh}>
                  <AccountCircleSharpIcon fontSize="medium" />
                  Profile
                </h3>
              </li>
              <li
                className={s.listItem}
                onClick={() => {
                  setIsActive(true);
                  setIsWish(false);
                  setIsReviews(false);
                  setIsInfo(false);
                }}
              >
                <h3 className={s.iconh}>
                  <EditSharpIcon fontSize="medium" />
                  Edit your profile
                </h3>
              </li>
              <li
                className={s.listItem}
                onClick={() => {
                  setIsWish(true);
                  setIsActive(false);
                  setIsReviews(false);
                  setIsInfo(false);
                }}
              >
                <h3 className={s.iconh}>
                  <AppShortcutSharpIcon fontSize="medium" /> Your wish list
                </h3>
              </li>
              <li
                className={s.listItem}
                onClick={() => {
                  setIsReviews(true);
                  setIsActive(false);
                  setIsWish(false);
                  setIsInfo(false);
                }}
              >
                <h3 className={s.iconh}>
                  <RateReviewSharpIcon fontSize="medium" />
                  Your reviews
                </h3>
              </li>
              <li className={s.listItem}>
                <LogoutButton className={s.logOut} />
              </li>
            </ul>
          </div>
        </div>
        <div className={s.page}>
          {isInfo && <AccountInfo />}
          {isActive && <EditAccount />}
          {isWish && <WishList />}
          {isReviews && <UserReviews />}
        </div>
      </div>
    </>
  );
}
