import { React, useState } from "react";
import s from './userSidebar.module.css'
import LogoutButton from "../Logout/Logout";
import EditAccount from './EditAccount'
import WishList from "./WishList";
import UserReviews from "./UserReviews";
import AccountInfo from "./AccountInfo";


export default function UserSidebar() {

    const [isActive, setIsActive] = useState(false)
    const [isWish, setIsWish] = useState(false)
    const [isReviews, setIsReviews] = useState(false)
    const [isInfo, setIsInfo] = useState(true)


    return (
        <>
            <div className={s.all}>
                <div className={s.sbContainer}>
                    <div className={s.list}>
                        <h4>My Account </h4>
                        <ul>
                            <li className={s.listItem} onClick={() => { setIsInfo(true); setIsActive(false); setIsWish(false); setIsReviews(false) }}><h3>My info</h3></li>
                            <li className={s.listItem} onClick={() => { setIsActive(true); setIsWish(false); setIsReviews(false); setIsInfo(false) }}><h3>Edit Account</h3></li>
                            <li className={s.listItem} onClick={() => { setIsWish(true); setIsActive(false); setIsReviews(false); setIsInfo(false) }}><h3>Wish List</h3></li>
                            <li className={s.listItem} onClick={() => { setIsReviews(true); setIsActive(false); setIsWish(false); setIsInfo(false) }}><h3>My Reviews</h3></li>
                            <li className={s.listItem}> <LogoutButton /></li>
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
    )
}