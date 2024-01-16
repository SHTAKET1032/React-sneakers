import React,{useContext} from "react";
import SneakerCard from "../components/Sneaker-card/Sneaker-card";
import {AppContext} from "../App";

// import {useEffect} from "react";

function Favorites({onAddToFavorite, onAddToBasket}) {
    // const stateContext = useContext(AppContext)
    // console.log(stateContext)
    const {favorites} = useContext(AppContext)
    console.log(favorites)

    return (
        <div className="content">


            <div className="content-top">

                <h1>Мои закладки</h1>

            </div>

            <div className="sneakers-list">
                {favorites.length < 1 ? (
                    "Тут будут мои закладки"
                ) : (
                    favorites.map(({id, name, price, imgUrl}) => (
                        <SneakerCard
                            key={id}
                            name={name}
                            price={price}
                            imgUrl={imgUrl}
                            id={id}
                            liked={true}
                            onClickAdd={onAddToBasket}
                            onAddToFavorite={onAddToFavorite}/>
                    ))
                )
                }
            </div>

        </div>
    )
}

export default Favorites;
