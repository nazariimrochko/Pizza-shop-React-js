import React from 'react';
import {Header,} from "./componnents";
import {MainContent,Cart} from "./pages";
import {Routes,Route,} from "react-router-dom";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Routes>
                    <Route path="/" element={<MainContent/>}  />
                    <Route path="/cart" element={<Cart/>}  />
                </Routes>
            </div>
        </div>
    );
}

export default App;
