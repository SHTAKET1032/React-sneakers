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

        axios.get("https://65958c3804335332df82f0ba.mockapi.io/sneakers/2/favorites").then((res) => {
            setFavorites(res.data)
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

    const onAddToFavorite = async (obj) => {
        try {
            if(favorites.find((favObj) => favObj.id === obj.id)){
                axios.delete(`https://65958c3804335332df82f0ba.mockapi.io/sneakers/2/favorites/${obj.id}`)
            } else {
                const {data} = await axios.post(`https://65958c3804335332df82f0ba.mockapi.io/sneakers/2/favorites`, obj)
                setFavorites((prevState)=>[...prevState, data])
            }
        }
        catch (error){
            alert("Не удалось добавить в favorite")
        }
    }

    // const removeFromFavorite = (id) => {
    //     axios.delete(`https://65958c3804335332df82f0ba.mockapi.io/sneakers/2/favorites/${id}`);
    //     setFavorites(prevItems => [...prevItems.filter(item => item.id !== id)])
    // }

    const isItemInBasket = (id) => {
        return basketItems.some(item => item.id === id)
    }

    const onChangeSearchInput = (event) => {
        setSearchValue(event.target.value)
    }

    const deleteInputValue = () => {
        setSearchValue('')
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

                <Route path='/favorites' exact
                    element={
                        <Favorites
                            items={favorites}
                            onAddToFavorite={onAddToFavorite}
                            onAddToBasket={onAddToBasket}/>
                    }
                />
            </Routes>


        </div>
    );
}

export default App;
