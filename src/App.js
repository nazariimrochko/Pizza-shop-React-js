import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Routes, Route,} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Header,} from "./componnents";
import {MainContent, Cart} from "./pages";
import {setPizzas} from './redux/action/pizzas'


function App() {

    const dispatch = useDispatch();
    useEffect(() => {
        axios.get('http://localhost:3001/db.json')
            .then(({data: {pizzas}}) => {
                dispatch(setPizzas(pizzas))
            });
    }, [])

    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<MainContent/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
