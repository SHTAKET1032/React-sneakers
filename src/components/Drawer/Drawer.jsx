// import {Link} from "react-router-dom";

import style from "./Drawer.module.scss"
import Info from "../info/info";
import {useContext, useState} from "react";
import {AppContext} from "../../App";
import axios from "axios";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


function Drawer({closeBasket, items = [], deleteFromBasket}) {


    const {basketItems ,setBasketItems} = useContext(AppContext)
    const [isOrderComplete, setIsOrderComplete] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const [isLoading, setIsLoading] = useState(false)


    const onClickOrder = async () => {
        try {
            setIsLoading(true);
            const {data} = await axios.post("https://65958c3804335332df82f0ba.mockapi.io/sneakers/2/orders", {items: basketItems});
            setOrderId(data.id)
            setIsOrderComplete(true);
            setBasketItems([]);

            for (let i = 0; i < basketItems.length; i++){
                const item = basketItems[i];
                await axios.delete(`https://658727518ff2e26ee4e076e2.mockapi.io/basket/${item.id}`);
                await delay(1000);
            }
        } catch (error) {
            alert("Не удалось создать заказ.");
        }
        setIsLoading(false);
    }

    return (
        <div className={style.overlay}>
            <div className={style.drawer}>


                <div className={style.drawerTitle}>
                    <h2>Корзина</h2>
                    <img
                        src="/icons/btn-remove.svg"
                        alt="remove"
                        className={style.btnRemove}
                        onClick={closeBasket}/>
                </div>

                {
                    items.length > 0 ? (
                        <>
                            <div className={style.basketItems}>
                                {items.map(item => (
                                    <div className={style.basketItem} key={item.id}>
                                        <img
                                            className={style.basketItemImg}
                                            src={item.imgUrl}
                                            alt="Sneakers"/>
                                        <div className={style.basketItemInfo}>
                                            <p>{item.name}</p>
                                            <b className="price-nmb">{item.price} руб.</b>
                                        </div>
                                        <img
                                            src="/icons/btn-remove.svg"
                                            alt="remove"
                                            className={style.btnRemove}
                                            onClick={() => deleteFromBasket(item.id)}
                                        />
                                    </div>
                                ))}

                            </div>

                            <ul className={style.basketInfo}>
                                <li className={style.basketInfoItem}>
                                    <span>Итого: </span>
                                    <div></div>
                                    <b>21 498 руб. </b>
                                </li>
                                <li className={style.basketInfoItem}>
                                    <span>Налог 5%: </span>
                                    <div></div>
                                    <b>1074 руб. </b>
                                </li>
                            </ul>

                            <button disabled={isLoading}
                                    className={style.checkoutBtn}
                                    onClick={onClickOrder}>
                                Оформить заказ
                                <img src="/icons/arrow.svg"
                                     className={style.arrowIcon}
                                     alt="arrow"/>
                            </button>
                        </>
                    ) : (
                        <Info
                            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
                            description={isOrderComplete ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке` : "Добавьте хотябы одну пару кроссовок."}
                            image={isOrderComplete ? "/icons/completed.png" : "/icons/emptyBasket.png"}/>
                    )
                }


            </div>

        </div>
    )
}

export default Drawer;
