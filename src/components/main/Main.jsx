import React from 'react';
import style from './Category.module.css'
import Category from "./Category";

const Main = (props) => {
    return (
        <div>
            <div>
                <input type="text"/>
                <button>Поиск</button>
            </div>
            <div className={style.categories}>
                {
                    props.categories.map(e => (
                        <Category
                            category={e.category}
                            amount={e.amount}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default Main;