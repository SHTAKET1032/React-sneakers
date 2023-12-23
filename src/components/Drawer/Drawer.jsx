import "./Drawer.scss"


function Drawer(props) {
    return (
        <div className="overlay">
            <div className="drawer">

                <div className="drawerTitle">
                    <h2>Корзина</h2>
                    <img
                        src="/icons/btn-remove.svg"
                        alt="remove"
                        className="btn-remove"
                        onClick={props.closeBasket}/>
                </div>

                <div className="basketItems">

                    <div className="basketItem">
                        <img
                            className="basketItem-img"
                            src="/img-sneakers/1.jpg"
                            alt="Sneakers"/>
                        <div className="basketItem-info">
                            <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                            <b className="price-nmb">12 999 руб.</b>
                        </div>
                        <img
                            src="/icons/btn-remove.svg"
                            alt="remove"
                            className="btn-remove"/>
                    </div>

                    <div className="basketItem">
                        <img
                            className="basketItem-img"
                            src="/img-sneakers/2.jpg"
                            alt="Sneakers"/>
                        <div className="basketItem-info">
                            <p>Мужские Кроссовки Nike Air Max 270</p>
                            <b className="price-nmb">12 999 руб.</b>
                        </div>
                        <img
                            src="/icons/btn-remove.svg"
                            alt="remove"
                            className="btn-remove"/>
                    </div>

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
