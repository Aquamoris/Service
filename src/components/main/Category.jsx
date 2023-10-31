import React from 'react';
import style from './Category.module.css';

function Category(props) {
    return (
        <div className={style.wrapper}>
            {props.category}
            <div>
                <span>Вакансий: </span><span>{props.amount}</span>
            </div>
        </div>
    );
}

export default Category;