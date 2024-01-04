import style from "./SneakerCard.module.scss"
import {useEffect, useState} from "react";


function SneakerCard({onAddToFavorite, imageUrl, name, price, id, onClickAdd, isAddedToBasket}) {

    const [isAdded, setIsAdded] = useState(isAddedToBasket);
    const [isLiked, setIsLiked] = useState(false)


    const onClickPlus = () => {
        if(isAdded){
            return
        }
        setIsAdded(true);
        onClickAdd({imageUrl, name, price, id});
    }

    const onClickFavorite = () => {
        if(isLiked){
            return
        }
        setIsLiked(true);
        onAddToFavorite({imageUrl, name, price, id})
    }

    useEffect(()=>{
        setIsAdded(isAddedToBasket)
    }, [isAddedToBasket])



    return(
        <div className={style.sneakerCard}>

            <div className={style.favorite}>
                <img
                    src={!isLiked ? "/icons/heart-default.svg" : "/icons/heart-liked.svg"}
                    alt="heart-unliked"
                    onClick={onClickFavorite}/>
            </div>

            <img
                src={imageUrl}
                alt="sneakers"
                className={style.cardImg}/>
            <h5 className={style.cardName}>{`Мужские Кроссовки ${name}`}</h5>

            <div className={style.cardBottom}>

                <div className={style.priceContainer}>
                    <span className={style.priceTxt}>Цена:</span>
                    <b className={style.priceNmb}>{price}p.</b>
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
