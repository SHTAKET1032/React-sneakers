import SneakerCard from "./components/Sneaker-card/Sneaker-card";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";




function App() {
    return (
        <div className="wrapper">

           <Drawer/>

           <Header/>

            <div className="content">


                <div className="content-top">

                    <h1>ВСЕ КРОССОВКИ</h1>
                    <div className="search-container">
                        <img src="/icons/search.svg" alt="icon-search" className="icon-search"/>
                        <input placeholder="Поиск..." className="input-search"/>
                    </div>

                </div>

                <div className="sneakers-list">

                    <SneakerCard/>
                    <SneakerCard/>
                    <SneakerCard/>
                    <SneakerCard/>
                    <SneakerCard/>


                </div>

            </div>

        </div>
    );
}

export default App;
