import React, {useState} from 'react';
import PropTypes from 'prop-types'
import classNames from "classnames";

const PizzaBlock = ({id, name, price, imageUrl, types, sizes, onClickAddPizza,amountAded}) => {
    const typesOfPizza = ['тонке', 'традиційне'];
    const sizesOfPizza = [26, 30, 40]


    const [activeType, setActiveType] = useState(types[0]);
    const [activeSize, setActiveSize] = useState(0);

    const chooseType = (index) => {
        setActiveType(index)
    }
    const chooseSize = (index) => {
        setActiveSize(index)
    }
    const onAddPizza = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
            type: typesOfPizza[activeType],
            size: sizesOfPizza[activeSize],
        }
        onClickAddPizza(obj)
    }

    return (
        <div className="pizza-block">
            <img className="pizza-block__image" src={imageUrl} alt="Pizza"/>
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {typesOfPizza.map((item, index) => (
                        <li onClick={() => chooseType(index)}
                            className={classNames({
                                active: activeType === index,
                                disable: !types.includes(index)
                            })}
                            key={item}>{item} </li>))}
                </ul>
                <ul>
                    {sizesOfPizza.map((size, index) => (
                        <li onClick={() => chooseSize(index)}
                            className={classNames({
                                active: activeSize === index,
                                disable: !sizes.includes(size)
                            })}
                            key={size}>{size} см.</li>
                    ))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">{`${price} грн.`}</div>
                <button onClick={onAddPizza}
                        className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавити</span>
                    { amountAded && <i>{amountAded}</i>}
                </button>
            </div>
        </div>
    );
};

PizzaBlock.propTypes = {
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    types: PropTypes.arrayOf(PropTypes.number).isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    onClickAddPizza: PropTypes.func,
}

PizzaBlock.defaultProps = {
    name: '---',
    price: 0,
    types: [],
    sizes: [],
}

export default PizzaBlock;