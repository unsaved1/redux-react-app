
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

import { useEffect } from "react";
import { useState } from "react";
import {useHttp} from '../../hooks/http.hook';
import { v4 as uuid } from "uuid";
import FilterBtn from "./FilterBtn";

const HeroesFilters = () => {
    const [heroesFiltered, setHeroesFiltered] = useState([]);
    const [filters, setFilters] = useState([]);

    const {request} = useHttp();
    
    useEffect(() => {
        request('http://localhost:3001/filters')
            .then(res => setFilters(res));
    }, [])

    const filterItems = filters.length > 0 
                            ? filters.map(item => {
                                return <FilterBtn key={uuid()} className={item.className} name={item.name}/>
                            }) 
                            : null;
                            
    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                    {filterItems}
                </div>
            </div>
        </div>
    )
}


export default HeroesFilters;


{/* <button className="btn btn-outline-dark active">Все</button>
                    <button className="btn btn-danger">Огонь</button>
                    <button className="btn btn-primary">Вода</button>
                    <button className="btn btn-success">Ветер</button>
                    <button className="btn btn-secondary">Земля</button> */}