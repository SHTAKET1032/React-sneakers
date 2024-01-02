import style from "./Drawer.module.scss"


function Drawer({closeBasket, items = [], deleteFromBasket}) {

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
                                            src={item.imageUrl}
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

                            <button className={style.checkoutBtn}>
                                Оформить заказ
                                <img src="/icons/arrow.svg"
                                     className={style.arrowIcon}
                                     alt="arrow"/>
                            </button>
                        </>
                        ) : (
                            <div className={style.emptyBasket}>
                            <img src="/icons/emptyBasket.png"
                                 alt="emptyBasket"
                                 className={style.emptyBasketImg}/>
                            <h3>Корзина пустая</h3>
                            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                            <button className={style.checkoutBtn}
                                    onClick={closeBasket}>
                                <img src="/icons/arrowBack.png"
                                     className={style.arrowIcon}
                                     alt="arrow"/>
                                К покупкам
                            </button>
                        </div>)
                }


            </div>

        </div>
    )
}

export default Drawer;
