import style from "./SneakerCard.module.scss"
import {useState} from "react";


function SneakerCard(props) {
    const [isAdded, setIsAdded] = useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded)
    }


    return(
        <div className={style.sneakerCard}>

            <div className={style.favorite}>
                <img
                    src="/icons/heart-default.svg"
                    alt="heart-unliked"
                    onClick={props.onClickfavorites}/>
            </div>

            <img
                src={props.imageUrl}
                alt="sneakers"
                className={style.cardImg}/>
            <h5 className={style.cardName}>{`Мужские Кроссовки ${props.name}`}</h5>

            <div className={style.cardBottom}>

                <div className={style.priceContainer}>
                    <span className={style.priceTxt}>Цена:</span>
                    <b className={style.priceNmb}>{props.price}.</b>
                </div>


                <img
                    src={!isAdded ? "/icons/plus.svg" : "/icons/added.svg"}
                    alt="plus-icon"
                    className={style.btnPlus}
                    onClick={onClickPlus}/>

            </div>

        </div>
    )
}

export default SneakerCard;
