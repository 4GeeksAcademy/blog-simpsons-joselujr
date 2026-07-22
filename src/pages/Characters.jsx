import { Card } from "../components/Card";
import { getCharacters } from "../servicesAPI";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect } from "react";


export const Characters = () => {
    
    const { store, dispatch } = useGlobalReducer();

    useEffect(() => {
        getCharacters(dispatch);
    }, []);

    return (
        <div className="d-flex flex-wrap">
            {store.resultsPerson.map((personaje) => (
                <Card
                    key={personaje.id}
                    name={personaje.name}
                    occupation={personaje.occupation}
                    age={personaje.age}
                    status={personaje.status}
                    phrases={personaje.phrases}
                    portrait_path={personaje.portrait_path}
                />
            ))}
        </div>
    );
};