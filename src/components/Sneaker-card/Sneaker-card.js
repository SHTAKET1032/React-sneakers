import React from "react";
import "./Sneaker-card.scss"


function SneakerCard(props) {
    return(
        <div className="sneaker-card">

            <div className="favorite">
                <img src="/icons/heart-default.svg" alt="heart-unliked"/>
            </div>

            <img src={props.imageUrl} alt="sneakers" className="sneaker-card-img"/>
            <h5 className="sneaker-card-name">{`Мужские Кроссовки ${props.name}`}</h5>

            <div className="sneaker-card-bottom">

                <div className="price-container">
                    <span className="price-txt">Цена:</span>
                    <b className="price-nmb">{props.price}.</b>
                </div>


                <img src="/icons/plus.svg" alt="plus-icon" className="btn-state-add btn-plus" onClick={props.priKlicke}/>

            </div>

        </div>
    )
}

export default SneakerCard;
