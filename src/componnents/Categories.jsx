import React, {useState} from 'react';

const categoriesName = ['Мясна', 'Вегетеріанська','Гриль', 'Гостра', 'Закрита']

const Categories = React.memo(({onClickItem}) => {
    const [activeEl, setActiveEl] = useState(null)

    const onSelectItem = (index) => {
        setActiveEl(index)
        onClickItem(index)
    }
    console.log('Render Categories-component ')

    return (
        <div className="categories">
            <ul>
                <li onClick={() => setActiveEl(null)}
                    className={null === activeEl ? 'active' : ''}
                >Всі
                </li>
                {categoriesName.map((element, index) => {
                    return <li key={`${element}_${index}`}
                               onClick={() => onSelectItem(index)}
                               className={index === activeEl ? 'active' : ''}
                    > {element}</li>
                })}
            </ul>
        </div>
    );
})

export default Categories;
