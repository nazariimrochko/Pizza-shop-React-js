import React, {useCallback, useEffect} from 'react';
import {Categories, PizzaBlock, PizzaLoaderBlock, SortPopup} from "../componnents";
import {useDispatch, useSelector} from "react-redux";
import {setCategory, setSortBy} from '../redux/action/filters'
import {fetchPizzas} from "../redux/action/pizzas";
import {setPizzaToBasket} from "../redux/action/basket";


const MainContent = () => {
    const dispatch = useDispatch();
    const items = useSelector(({pizzas}) => pizzas.items);
    const isLoaded = useSelector(({pizzas}) => pizzas.isLoaded);
    const {category, sortBy} = useSelector(({filters}) => filters);
    const basketItem = useSelector(({basket}) => basket.items)

    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category,))
    }, [sortBy, category,])

    const onSelectCategory = useCallback((index) => {
        dispatch(setCategory(index))
    }, []);

    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type))
    }, []);

    const addPizzaToBasket = obj => {
        dispatch(setPizzaToBasket(obj))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                />
                <SortPopup
                    activeSortType={sortBy.type}
                    onClickSortType={onSelectSortType}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map((obj) =>
                        <PizzaBlock onClickAddPizza={addPizzaToBasket} {...obj}
                                    isLoading={true}
                                    amountAded={basketItem[obj.id] && basketItem[obj.id].items.length}
                                    key={obj.id}/>)
                    : Array(10).fill(0)
                        .map((item, index) => <PizzaLoaderBlock key={index}/>)
                }
            </div>
        </div>
    );
};

export default MainContent;
