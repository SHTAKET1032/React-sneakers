import React from "react";
import "./Sneaker-card.scss"


function SneakerCard() {
    return(
        <div className="sneaker-card">

            <div className="favorite">
                <img src="/icons/heart-default.svg" alt="heart-unliked"/>
            </div>

            <img src="/img-sneakers/1.jpg" alt="sneakers" className="sneaker-card-img"/>
            <h5 className="sneaker-card-name">Мужские Кроссовки Nike Blazer Mid Suede</h5>

            <div className="sneaker-card-bottom">

                <div className="price-container">
                    <span className="price-txt">Цена:</span>
                    <b className="price-nmb">12 999 руб.</b>
                </div>


                <img src="/icons/plus.svg" alt="plus-icon" className="btn-state-add btn-plus"/>

            </div>

        </div>
    )
}

export default SneakerCard;
