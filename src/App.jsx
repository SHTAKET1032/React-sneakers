import SneakerCard from "./components/Sneaker-card/Sneaker-card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import {useState} from "react";



const data = [
    {name: 'Nike Blazer Mid Suede', price: 12999, imgUrl: '/img-sneakers/1.jpg'},
    {name: 'Nike Air Max 270', price: 12000, imgUrl: '/img-sneakers/2.jpg'},
    {name: 'Under Armour Curry 8', price: 10000, imgUrl: '/img-sneakers/3.jpg'},
    {name: 'Nike Kyrie 7', price: 15000, imgUrl: '/img-sneakers/4.jpg'},
    {name: 'Jordan Air Jordan 11', price: 18000, imgUrl: '/img-sneakers/5.jpg'},
    {name: 'Nike Lebron XVIII Low', price: 14500, imgUrl: '/img-sneakers/6.jpg'},
    {name: 'Puma X Aka Boku Future Rider', price: 8900, imgUrl: '/img-sneakers/7.jpg'},
    {name: 'Nike Kyrie Flytrap IV', price: 11900, imgUrl: '/img-sneakers/8.jpg'},
]



function App() {

    const [isBasketOpen, setBasketOpen] = useState(false)

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
