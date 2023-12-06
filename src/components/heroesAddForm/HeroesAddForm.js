import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { heroCreated } from "../heroesList/HeroesSlice";

import {v4 as uuid} from 'uuid';
import { useHttp } from "../../hooks/http.hook";

const HeroesAddForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [element, setElement] = useState('');
    
    const dispatch = useDispatch();
    const {request} = useHttp();

    const addHero = (e, hero) => {
        e.preventDefault();
        
        request('http://localhost:3001/heroes', 'POST', JSON.stringify(hero));
        dispatch(heroCreated(hero));
    };

    return (
        <form className="border p-4 shadow-lg rounded">
            <div className="mb-3">
                <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
                <input 
                    required
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Как меня зовут?"/>
            </div>

            <div className="mb-3">
                <label htmlFor="text" className="form-label fs-4">Описание</label>
                <textarea
                    required
                    name="text" 
                    className="form-control" 
                    id="text" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Что я умею?"
                    style={{"height": '130px'}}/>
            </div>

            <div className="mb-3">
                <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
                <select 
                    required
                    className="form-select" 
                    id="element" 
                    name="element"
                    value={element}
                    onChange={(e) => setElement(e.target.value)}>
                    <option >Я владею элементом...</option>
                    <option value="fire">Огонь</option>
                    <option value="water">Вода</option>
                    <option value="wind">Ветер</option>
                    <option value="earth">Земля</option>
                </select>
            </div>

            <button 
                onClick={(e) => addHero(e, {id: uuid(), name, description, element})} 
                className="btn btn-primary"
            >
                Создать
            </button>
        </form>
    )
}

export default HeroesAddForm;