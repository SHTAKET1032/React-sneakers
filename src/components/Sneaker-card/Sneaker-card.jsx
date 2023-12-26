import style from "./SneakerCard.module.scss"
import {useState} from "react";


function SneakerCard({onClickfavorites, imageUrl, name, price, id, onClickAdd}) {

    const [isAdded, setIsAdded] = useState(false);

    const onClickPlus = () => {
        onClickAdd({imageUrl, name, price, id, isAdded, setIsAdded});
        setIsAdded(!isAdded);
    }



    return(
        <div className={style.sneakerCard}>

            <div className={style.favorite}>
                <img
                    src="/icons/heart-default.svg"
                    alt="heart-unliked"
                    onClick={onClickfavorites}/>
            </div>

            <img
                src={imageUrl}
                alt="sneakers"
                className={style.cardImg}/>
            <h5 className={style.cardName}>{`Мужские Кроссовки ${name}`}</h5>

            <div className={style.cardBottom}>

                <div className={style.priceContainer}>
                    <span className={style.priceTxt}>Цена:</span>
                    <b className={style.priceNmb}>{price}.</b>
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
