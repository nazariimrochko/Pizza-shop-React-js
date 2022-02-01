import React, {useState} from 'react';

const Categories = ({types, onClickItem}) => {
    const [activeEl, setActiveEl] = useState(null)


    return (
        <div className="categories">
            <ul>
                <li onClick={() => setActiveEl(null)}
                    className={null === activeEl ? 'active' : ''}
                >Всі
                </li>
                {types.map((element, index) => {
                    return <li key={`${element}_${index}`}
                               onClick={() => setActiveEl(index)}
                               className={index === activeEl ? 'active' : ''}
                    > {element}</li>
                })}
            </ul>
        </div>
    );
};

export default Categories;
