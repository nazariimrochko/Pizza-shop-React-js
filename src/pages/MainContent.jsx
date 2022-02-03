import React from 'react';
import {Categories, PizzaBlock, SortPopup} from "../componnents";

const arrTypes = ['Мясна', 'Вегетеріанська', 'Гостра', 'Закрита']
const arrTypesSort = ['Ціні', 'Алфавіту', 'Популярності']

const MainContent = ({itemPizza}) => {


    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={(element) => console.log(element)} types={arrTypes}/>
                <SortPopup itemsSort={arrTypesSort}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {itemPizza.map((obj) => <PizzaBlock {...obj}  key={obj.id}/>)}
            </div>
        </div>
    );
};

export default MainContent;
