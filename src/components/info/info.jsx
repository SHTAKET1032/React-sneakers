import React, {useContext} from "react";
import style from "../Drawer/Drawer.module.scss";
import {AppContext} from "../../App";


const Info = ({title, description, image}) => {

    const {setBasketOpen} = useContext(AppContext)

    return (
        <div className={style.emptyBasket}>
            <img src={image}
                 alt="emptyBasket"
                 className={style.emptyBasketImg}/>
            <h3>{title}</h3>
            <p>{description}</p>
            <button className={style.checkoutBtn}
                    onClick={()=>setBasketOpen(false)}>
                <img src="/icons/arrowBack.png"
                     className={style.arrowIcon}
                     alt="arrow"/>
                К покупкам
            </button>
        </div>)
}

export default Info;
