import React, {useEffect, useState} from 'react';
import {Header,} from "./componnents";
import {MainContent,Cart} from "./pages";
import {Routes,Route,} from "react-router-dom";

function App() {
    const [dataPizzas, setDataPizzas] = useState([])

    useEffect(() => {
    fetch('http://localhost:3000/db.json')
        .then((response) => response.json())
        .then(json =>{setDataPizzas(json.pizzas)
    })
    },[])


    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path="/"  element={ <MainContent itemPizza={dataPizzas}/>}  />
                    <Route path="/cart" element={<Cart/>}  />
                </Routes>
            </div>
        </div>
    );
}

export default App;
