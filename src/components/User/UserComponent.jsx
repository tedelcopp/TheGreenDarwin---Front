import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import s from './UserComponent.module.css';
import UserSidebar from "./userSidebar";



export default function UserComponent() {


    return (
        <>
            <div className={s.everything}>
                <div className={s.NavBar}>
                    <NavBar />
                </div>

                <div className={s.UserContainer}>
                    <UserSidebar />
                </div>
                <div className={s.foot}>
                    <Footer />
                </div>
            </div>
        </>
    )
}