import React from 'react';
import PropTypes from 'prop-types'

const categoriesName = ['Мясна', 'Вегетеріанська','Гриль', 'Гостра']

const Categories = React.memo(({activeCategory, onClickCategory}) => {

    return (
        <div className="categories">
            <ul>
                <li onClick={() => onClickCategory(null)}
                    className={null === activeCategory ? 'active' : ''}
                >Всі
                </li>
                {categoriesName.map((element, index) => {
                    return <li key={`${element}_${index}`}
                               onClick={() => onClickCategory(index)}
                               className={index === activeCategory ? 'active' : ''}
                    > {element}</li>
                })}
            </ul>
        </div>
    );
})

Categories.propTypes ={
    // activeCategory: PropTypes.oneOf([PropTypes.number, null]),
    onClickCategory: PropTypes.func.isRequired,
}
Categories.defaultProps = {activeCategory: null ,}

export default Categories;
