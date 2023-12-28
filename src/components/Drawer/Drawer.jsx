import "./Drawer.scss"


function Drawer({closeBasket, items = [], deleteFromBasket}) {

    return (
        <div className="overlay">
            <div className="drawer">

                <div className="drawerTitle">
                    <h2>Корзина</h2>
                    <img
                        src="/icons/btn-remove.svg"
                        alt="remove"
                        className="btn-remove"
                        onClick={closeBasket}/>
                </div>

                <div className="basketItems">

                    {items.map(item => (
                        <div className="basketItem" key={item.id}>
                            <img
                                className="basketItem-img"
                                src={item.imageUrl}
                                alt="Sneakers"/>
                            <div className="basketItem-info">
                                <p>{item.name}</p>
                                <b className="price-nmb">{item.price} руб.</b>
                            </div>
                            <img
                                src="/icons/btn-remove.svg"
                                alt="remove"
                                className="btn-remove"
                                onClick={()=>deleteFromBasket(item.id)}
                                />
                        </div>
                    ))}

                </div>

                <ul className="basketInfo">
                    <li className="basketInfo-item">
                        <span>Итого: </span>
                        <div></div>
                        <b>21 498 руб. </b>
                    </li>
                    <li className="basketInfo-item">
                        <span>Налог 5%: </span>
                        <div></div>
                        <b>1074 руб. </b>
                    </li>
                </ul>

                <button className="checkout-btn">
                    Оформить заказ
                    <img src="/icons/arrow.svg" className="arrowIcon" alt="arrow"/>
                </button>

            </div>

        </div>
    )
}

export default Drawer;
