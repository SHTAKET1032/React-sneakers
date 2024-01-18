import {Link} from "react-router-dom";

import "./Header.scss"
// import {useContext} from "react";
// import {AppContext} from "../../App";

import {useBasket} from "../../hooks/useBasket";

function Header({openBasket}) {

    // const {priceOfAllItemsInBasket} = useContext(AppContext)
    const {priceOfAllItemsInBasket} = useBasket()
    return (
        <header className="header">

            <div className="header-left">
                <Link to="/">
                    <img src="/icons/main-logo.png" className="header-logo-img" alt="main-logo"/>
                </Link>
                <div className="header-txt">
                    <h3>REACT SNEAKERS</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>

            <div className="header-right">
                <ul className="header-list-items">
                    <li onClick={openBasket}
                        className="header-list-item">
                        <img src="/icons/basket.svg" alt="icon-basket" className="header-item-svg"/>
                        <span className="header-item-txt">{priceOfAllItemsInBasket + priceOfAllItemsInBasket * 0.05} &#8381;</span>
                    </li>
                    <Link to="/favorites">
                        <li className="header-list-item">
                            <img src="/icons/favorite.svg" alt="icon-favor" className="header-item-svg"/>
                            <span className="header-item-txt">Закладки</span>
                        </li>
                    </Link>
                    <Link to="/orders">
                    <li className="header-list-item">
                        <img src="/icons/profile.svg" alt="icon-profile" className="header-item-svg"/>
                        <span className="header-item-txt">Профиль</span>
                    </li>
                    </Link>
                </ul>
            </div>

        </header>
    )
}

export default Header;
