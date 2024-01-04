import axios from "axios";
import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";

import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";


function App() {

    const [isBasketOpen, setBasketOpen] = useState(false);
    const [data, setData] = useState([]);
    const [basketItems, setBasketItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [searchValue, setSearchValue] = useState('')


    useEffect(() => {
        // fetch("https://658727518ff2e26ee4e076e2.mockapi.io/items")
        //     .then((response)=>{
        //         return response.json()
        //     })
        //     .then((json)=>{
        //         setData(json)
        //     })
        axios.get("https://658727518ff2e26ee4e076e2.mockapi.io/items").then((res) => {
            setData(res.data)
        })
        axios.get("https://658727518ff2e26ee4e076e2.mockapi.io/basket").then((res) => {
            setBasketItems(res.data)
        })
    }, [])

    const onAddToBasket = (obj) => {
        axios.post("https://658727518ff2e26ee4e076e2.mockapi.io/basket", obj);
        setBasketItems(prevVal => [...prevVal, obj])
    }

    const removeFromBasket = (id) => {
        axios.delete(`https://658727518ff2e26ee4e076e2.mockapi.io/basket/${id}`);
        setBasketItems(prevItems => [...prevItems.filter(item => item.id !== id)])
    }

    const onAddToFavorite = (obj) => {
        axios.post("https://65958c3804335332df82f0ba.mockapi.io/sneakers/2/favorites", obj);
        setFavorites(prevVal => [...prevVal, obj])
    }

    const isItemInBasket = (id) => {
        return basketItems.some(item => item.id === id)
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
        console.log(event.target.value)
    }

    const deleteInputValue = () => {
        setSearchValue('')
        console.log(searchValue)
    }

    return (
        <div className="wrapper">

            {isBasketOpen && <Drawer items={basketItems}
                                     closeBasket={() => setBasketOpen(false)}
                                     deleteFromBasket={removeFromBasket}
            />}

            <Header openBasket={() => setBasketOpen(true)}/>

            <Routes>
                <Route path='/' exact
                    element={
                        <Home
                            data={data}
                            searchValue={searchValue}
                            onChangeSearchInput={onChangeSearchInput}
                            deleteInputValue={deleteInputValue}
                            onAddToBasket={onAddToBasket}
                            onAddToFavorite={onAddToFavorite}
                            isItemInBasket={isItemInBasket}
                        />
                    }
                />
            </Routes>

            <Routes>
                <Route path='/favorites' exact
                    element={
                        <Favorites/>
                    }
                />
            </Routes>


        </div>
    );
}

export default App;
