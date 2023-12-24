import SneakerCard from "./components/Sneaker-card/Sneaker-card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import {useEffect, useState} from "react";



function App() {

    const [isBasketOpen, setBasketOpen] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://658727518ff2e26ee4e076e2.mockapi.io/items")
            .then((response)=>{
                return response.json()
            })
            .then((json)=>{
                setData(json)
            })
    }, [])

    return (
        <div className="wrapper">

            {isBasketOpen && <Drawer closeBasket={()=>setBasketOpen(false)}/>}

           <Header openBasket={()=>setBasketOpen(true)}/>

            <div className="content">


                <div className="content-top">

                    <h1>ВСЕ КРОССОВКИ</h1>
                    <div className="search-container">
                        <img src="/icons/search.svg" alt="icon-search" className="icon-search"/>
                        <input placeholder="Поиск..." className="input-search"/>
                    </div>

                </div>

                <div className="sneakers-list">

                    {data.map((item)=> (

                        <SneakerCard
                            name={item.name}
                            price={item.price}
                            imageUrl={item.imgUrl}
                            onClickAdd={()=>{console.log(`Вы кликнули на кроссовки ${item.name}`)}}
                            onClickfavorites={()=>{console.log(`Товар добавлен в избранное`)}}
                        />
                    ))}

                </div>

            </div>

        </div>
    );
}

export default App;
