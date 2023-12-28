
import SneakerCard from "./components/Sneaker-card/Sneaker-card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import {useEffect, useState} from "react";



function App() {

    const [isBasketOpen, setBasketOpen] = useState(false);
    const [data, setData] = useState([]);
    const [basketItems, setBasketItems] = useState([]);
    const [searchValue, setSearchValue] = useState('')


    useEffect(() => {
        fetch("https://658727518ff2e26ee4e076e2.mockapi.io/items")
            .then((response)=>{
                return response.json()
            })
            .then((json)=>{
                setData(json)
            })
    }, [])

    const onAddToBasket = (obj) => {
        setBasketItems(prevVal=>[...prevVal, obj])
    }

    const removeFromBasket = (id) => {
        setBasketItems(prevItems => [...prevItems.filter(item => item.id !== id)])
    }

    const isItemInBasket = (id) => {
        return basketItems.some(item => item.id === id)
    }

    const onChangeSearchInput = (event)=>{
        setSearchValue(event.target.value)
        console.log(event.target.value)
    }

    const deleteInputValue = () =>{
        setSearchValue('')
        console.log(searchValue)
    }

    return (
        <div className="wrapper">

            {isBasketOpen && <Drawer items={basketItems}
                                     closeBasket={()=>setBasketOpen(false)}
                                     deleteFromBasket={removeFromBasket}
            />}

           <Header openBasket={()=>setBasketOpen(true)}/>

            <div className="content">


                <div className="content-top">

                    <h1>{searchValue ? `Ищем "${searchValue}"` : "ВСЕ КРОССОВКИ"}</h1>
                    <div className="search-container">
                        <img src="/icons/search.svg" alt="icon-search" className="icon-search"/>
                        <input onChange={onChangeSearchInput}
                               value={searchValue}
                               type={"text"}
                               placeholder="Поиск..."
                               className="input-search"/>
                        {searchValue && <img src="/icons/cross.png"
                                             className="cross"
                                             alt="cross"
                                             onClick={deleteInputValue}
                        />}
                    </div>

                </div>

                <div className="sneakers-list">

                    {data.filter(item=>item.name.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((item)=> (
                        <SneakerCard
                            key={item.id}
                            name={item.name}
                            price={item.price}
                            imageUrl={item.imgUrl}
                            id={item.id}
                            onClickAdd={onAddToBasket}
                            onClickfavorites={()=>{console.log(`Товар добавлен в избранное`)}}
                            isAddedToBasket={isItemInBasket(item.id)}
                        />
                    ))}

                </div>

            </div>

        </div>
    );
}

export default App;
