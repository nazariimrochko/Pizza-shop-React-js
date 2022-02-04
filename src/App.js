import React, {useEffect, useState} from 'react';
import {Header,} from "./componnents";
import {MainContent, Cart} from "./pages";
import {Routes, Route,} from "react-router-dom";
import axios from "axios";

function App() {
    const [dataPizzas, setDataPizzas] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/db.json')
            .then(({data: {pizzas}}) => {
                setDataPizzas(pizzas)
            });
    }, [])


    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<MainContent itemPizza={dataPizzas}/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
