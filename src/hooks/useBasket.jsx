import {AppContext} from "../App";
import {useContext} from "react";

export const useBasket = ()=>{
    const {basketItems, setBasketItems} = useContext(AppContext);
    const priceOfAllItemsInBasket = basketItems.reduce((accum, item)=>accum + item.price, 0);

    return{basketItems, setBasketItems, priceOfAllItemsInBasket}
}
