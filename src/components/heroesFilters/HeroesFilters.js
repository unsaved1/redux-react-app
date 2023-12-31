import { useEffect } from "react";
import { useState } from "react";
import {useHttp} from '../../hooks/http.hook';

import { useDispatch, useSelector } from "react-redux";
import { fetchFilters, selectAll } from '../heroesFilters/filterSlice';
import { fitlerSetActive } from "./filterSlice";

import cn from 'classnames';
import Spinner from "../spinner/Spinner";

const HeroesFilters = () => {
    const filters = useSelector(selectAll);
    const {filterLoadingStatus} = useSelector(state => state.filters);
    const dispatch                       = useDispatch();

    const [isActive, setIsActive]        = useState();
    const {request}                      = useHttp();

    useEffect(() => {
        dispatch(fetchFilters());
    }, [])

    const onFilterHeroes = (element, id) => {
        setIsActive(id);
        dispatch(fitlerSetActive(element));
    }

    const filterItems = filters.length > 0 
                            ? filters.map(item => {
                                const {className, name, id} = item;
                                return <button 
                                            key={id}
                                            className={cn(className, {
                                                ['active']: isActive === id
                                            })}
                                            onClick={() => onFilterHeroes(name, id)}
                                        >
                                            {name}
                                        </button>
                            }) 
                            : null;
    
    const content = filterLoadingStatus === 'loading' 
                        ?   <Spinner/>
                        :   <div className="card-body">
                                <p className="card-text">Отфильтруйте героев по элементам</p>
                                <div className="btn-group">
                                    {filterItems}
                                </div>
                            </div>;

    return (
        <div className="card shadow-lg mt-4">
            {content}
        </div>
    )
}


export default HeroesFilters;
