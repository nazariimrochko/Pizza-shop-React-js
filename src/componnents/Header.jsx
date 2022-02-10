import React from 'react';
import logoSvg from "../assets/img/pizza-logo.svg";
import ButtonBasket from "./ButtonBasket";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {

    return (
        <div className="header">
            <div className="container">
                <Link to={'/'}>
                    <div className="header__logo">
                        <img width="38" src={logoSvg} alt="Pizza logo"/>
                        <div>
                            <h1>React Pizza</h1>
                            <p>Найсмасніша Піцца в Світі</p>
                        </div>
                    </div>
                </Link>
                <div className="header__cart">
                    <Link to={'/cart'}>
                        <ButtonBasket  className="button--cart" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
