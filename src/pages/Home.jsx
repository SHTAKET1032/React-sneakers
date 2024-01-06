import SneakerCard from "../components/Sneaker-card/Sneaker-card";


function Home({
                  data,
                  searchValue,
                  onChangeSearchInput,
                  deleteInputValue,
                  onAddToBasket,
                  isItemInBasket,
                  onAddToFavorite
              }) {
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

                {data.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()))
                    .map(({id, name, price, imgUrl}) => (
                        <SneakerCard
                            key={id}
                            name={name}
                            price={price}
                            imageUrl={imgUrl}
                            id={id}
                            onClickAdd={onAddToBasket}
                            onAddToFavorite={onAddToFavorite}
                            isAddedToBasket={isItemInBasket(id)}
                        />
                    ))}

            </div>

        </div>
    )
}


export default Home;
