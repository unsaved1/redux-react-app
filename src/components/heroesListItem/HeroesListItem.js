import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { heroesDeleted, heroesDeleting } from '../../actions/index';
import { useHttp } from "../../hooks/http.hook";

const HeroesListItem = ({name, description, element, id}) => {
    const {heroes, heroesLoadingStatus} = useSelector(state => state);
    const dispatch = useDispatch();
    const {request} = useHttp();

    let elementClassName;

    const deleteHeroes = (heroes, id) => {
        const updatedHeroes = heroes.filter(item => {
            return item.id !== id
        });
        request(`http://localhost:3001/heroes/${id}`, 'DELETE')
            .then(res => console.log(res));

        dispatch(heroesDeleting());
        dispatch(heroesDeleted(updatedHeroes));
    };

    switch (element) {
        case 'fire':
            elementClassName = 'bg-danger bg-gradient';
            break;
        case 'water':
            elementClassName = 'bg-primary bg-gradient';
            break;
        case 'wind':
            elementClassName = 'bg-success bg-gradient';
            break;
        case 'earth':
            elementClassName = 'bg-secondary bg-gradient';
            break;
        default:
            elementClassName = 'bg-warning bg-gradient';
    }

    return (
        <li 
            className={`card flex-row mb-4 shadow-lg text-white ${elementClassName}`}>
            <img src="http://www.stpaulsteinbach.org/wp-content/uploads/2014/09/unknown-hero.jpg" 
                 className="img-fluid w-25 d-inline" 
                 alt="unknown hero" 
                 style={{'objectFit': 'cover'}}/>
            <div className="card-body">
                
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{description}</p>
            </div>
            <span className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
                <button type="button" onClick={() => deleteHeroes(heroes, id)} className="btn-close btn-close" aria-label="Close"></button>
            </span>
        </li>
    )
}

export default HeroesListItem;