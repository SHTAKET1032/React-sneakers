import React from "react";
import ContentLoader from "react-content-loader"

import style from "./SneakerCard.module.scss"
import {useEffect, useState} from "react";


function SneakerCard({
                         onAddToFavorite,
                         imgUrl,
                         name,
                         price,
                         id,
                         onClickAdd,
                         isAddedToBasket,
                         liked = false,
                         loading = false
                     }) {

    const [isAdded, setIsAdded] = useState(isAddedToBasket);
    const [isLiked, setIsLiked] = useState(liked)


    const onClickPlus = () => {
        if (isAdded) {
            return
        }
        setIsAdded(true);
        onClickAdd({imgUrl, name, price, id});
    }

    const onClickFavorite = () => {
        // if (isLiked) {
        //     return
        // }
        setIsLiked(!liked);
        onAddToFavorite({imgUrl, name, price, id})
    }

    useEffect(() => {
        setIsAdded(isAddedToBasket)
    }, [isAddedToBasket])


    return (

        loading ? (
                <ContentLoader
                    speed={2}
                    width={220}
                    height={250}
                    viewBox="0 0 150 230"
                    backgroundColor="dimgray"
                    foregroundColor="#FFF">
                    <rect x="0" y="0" rx="10" ry="10" width="150" height="155"/>
                    <rect x="0" y="161" rx="5" ry="5" width="150" height="10"/>
                    <rect x="0" y="178" rx="5" ry="5" width="100" height="11"/>
                    <rect x="0" y="199" rx="5" ry="5" width="77" height="23"/>
                    <rect x="115" y="195" rx="5" ry="5" width="32" height="28"/>
                </ContentLoader>) : (
                <div className={style.sneakerCard}>

                    <div className={style.favorite}>
                        <img
                            src={!isLiked ? "/icons/heart-default.svg" : "/icons/heart-liked.svg"}
                            alt="heart-unliked"
                            onClick={onClickFavorite}/>
                    </div>

                    <img
                        src={imgUrl}
                        alt="sneakers"
                        className={style.cardImg}
                    />
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
                            onClick={onClickPlus}
                        />

                    </div>
                </div>
            )
    )
}

export default SneakerCard;
