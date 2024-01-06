
import SneakerCard from "../components/Sneaker-card/Sneaker-card";
// import {useEffect} from "react";

function Favorites({items, onAddToFavorite, onAddToBasket}) {
    // useEffect(()=>{
    //     console.log(items)
    // }, [])
    return (
        <div className="content">


            <div className="content-top">

                <h1>Мои закладки</h1>

            </div>

            <div className="sneakers-list">
                {items.length < 1 ? (
                    "Тут будут мои закладки"
                ) : (
                    items.map(({id, name, price, imageUrl}) => (
                        <SneakerCard
                            key={id}
                            name={name}
                            price={price}
                            imageUrl={imageUrl}
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
