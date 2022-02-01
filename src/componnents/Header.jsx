import React from 'react';
import logoSvg from "../assets/img/pizza-logo.svg";
import ButtonBasket from "./ButtonBasket";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__logo">
                    <img width="38" src={logoSvg} alt="Pizza logo"/>
                    <div>
                        <h1>React Pizza</h1>
                        <p>Найсмасніша Піцца в Світі</p>
                    </div>
                </div>
                <div className="header__cart">
                    <ButtonBasket className="button--cart" />
                </div>
            </div>
        </div>
    );
};

export default Header;
