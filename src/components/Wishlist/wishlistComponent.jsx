import WishlistProducts from './grillWishlist'
import Navbar from "../NavBar/NavBar";
import s from './wishlistComponent.module.css'
import { Link } from "react-router-dom";

const WishlistComponent = () => {

    return (
        <>
            <div className={s.navbar}>
                <Navbar/>
            </div>
           <div className={s.container}>
           <Link to={`/`}>
                <div className={s.backButton}>
                    <h3>Back</h3>
                </div>
            </Link>
            <div className={s.title}>MY LIST ♥</div>
           </div>
            
                <div className={s.grid}>
                    <WishlistProducts/>
                </div>
        </>
    )

}
export default WishlistComponent