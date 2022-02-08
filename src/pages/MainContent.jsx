import React, {useCallback} from 'react';
import {Categories, PizzaBlock, SortPopup} from "../componnents";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from '../redux/action/filters'


const MainContent = () => {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);
    console.log(items)

        const onSelectCategory = useCallback((index) => {
            dispatch(setCategory(index))
        },[]);

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={onSelectCategory}/>
                <SortPopup/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items.map((obj) => <PizzaBlock {...obj} key={obj.id}/>)}
            </div>
        </div>
    );
};

export default MainContent;
