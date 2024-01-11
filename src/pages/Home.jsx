// import SneakerCard from "../components/Sneaker-card/Sneaker-card";
//
//
// function Home({
//                   data,
//                   searchValue,
//                   onChangeSearchInput,
//                   deleteInputValue,
//                   onAddToBasket,
//                   isItemInBasket,
//                   onAddToFavorite,
//                   isLoading
//               }) {
//     console.log('daaaata', data)
//
//     const renderItems = () => {
//         const filtredItems = data.filter((item) =>
//             item.name.toLowerCase().includes(searchValue.toLowerCase())
//         );
//         console.log('filte', filtredItems)
//         console.log('data', data)
//
//         return (isLoading ? [...Array(10)] : filtredItems).map(({id, name, price, imgUrl}) => (
//             <SneakerCard
//                 key={id}
//                 name={name}
//                 price={price}
//                 imageUrl={imgUrl}
//                 id={id}
//                 onClickAdd={onAddToBasket}
//                 onAddToFavorite={onAddToFavorite}
//                 isAddedToBasket={isItemInBasket(id)}
//                 loading
//             />
//         ))
//     }
//
//     return (
//         <div className="content">
//
//
//             <div className="content-top">
//
//                 <h1>{searchValue ? `Ищем "${searchValue}"` : "ВСЕ КРОССОВКИ"}</h1>
//                 <div className="search-container">
//                     <img src="/icons/search.svg" alt="icon-search" className="icon-search"/>
//                     <input onChange={onChangeSearchInput}
//                            value={searchValue}
//                            type={"text"}
//                            placeholder="Поиск..."
//                            className="input-search"/>
//                     {searchValue && <img src="/icons/cross.png"
//                                          className="cross"
//                                          alt="cross"
//                                          onClick={deleteInputValue}
//                     />}
//                 </div>
//
//             </div>
//
//             <div className="sneakers-list">
//                 {renderItems()}
//             </div>
//
//         </div>
//     )
// }
//
//
// export default Home;

import SneakerCard from "../components/Sneaker-card/Sneaker-card";


function Home({
                  data,
                  searchValue,
                  onChangeSearchInput,
                  deleteInputValue,
                  onAddToBasket,
                  isItemInBasket,
                  onAddToFavorite,
                  isLoading,
                  basketItems
              }) {
    const renderItems = () => {
        const filtredItems = data.filter((item) =>
            item.name.toLowerCase().includes(searchValue.toLowerCase())
        )
        return (
            (isLoading ? [...Array(12)] : filtredItems).map((item, index) => (
                <SneakerCard
                    key={index}
                    onAddToFavorite={onAddToFavorite}
                    onClickAdd={onAddToBasket}
                    loading={isLoading}
                    name={item?.name || 'Default Name'}
                    price={item?.price || 0}
                    imgUrl={item?.imgUrl}
                />
            ))
        );
    }

    // renderItems()
    return (
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
                {renderItems()}
            </div>

        </div>
    )
}


export default Home;

