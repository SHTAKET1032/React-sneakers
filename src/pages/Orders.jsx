import React, {useContext, useEffect, useState} from "react";
import SneakerCard from "../components/Sneaker-card/Sneaker-card";
import {AppContext} from "../App";
import axios from "axios";

// import {useEffect} from "react";

function Orders({onAddToFavorite, onAddToBasket}) {

    const [orders, setOrders] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        async function fetchDataOrders() {
            try {
                setIsLoading(true)

                const {data} = await axios.get("https://65958c3804335332df82f0ba.mockapi.io/sneakers/2/orders")
                setOrders(data.reduce((acc, obj) => [...acc, ...obj.items], []));
                setIsLoading(false)
            } catch (error) {
                alert('Ошибка при запросе данных.');
                console.error(error)
            }
        }

        fetchDataOrders()
    }, [])

    console.log(orders)

    return (
        <div className="content">


            <div className="content-top">

                <h1>Мои заказы</h1>

            </div>

            <div className="sneakers-list">
                {orders.length < 1 ? (
                    "Тут будут мои заказы"
                ) : ((isLoading ? [...Array(8)] : orders).map((item, index) => (
                        <SneakerCard
                            key={item?.id}
                            loading={isLoading}
                            {...item}/>
                    ))
                )
                }
            </div>

        </div>
    )
}

export default Orders;
