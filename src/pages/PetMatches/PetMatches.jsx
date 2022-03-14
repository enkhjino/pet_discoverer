import { Link } from 'react-router-dom';
import NewInfoForm from '../../components/GetStartedForm/GetStartedForm';
import {useState} from "react";
import * as petsAPI from '../../utilities/pets-api'
import CatCard from '../../components/CatCard/CatCard';
import DogCard from '../../components/DogCard/DogCard';

export default function PetMatches({setCats}) {
    
    const [matches, setMatches] = useState([])
    async function getMatches(formData){
        const matches = await petsAPI.matches(formData)
        setMatches(matches);
        setCats(matches);
    }
   
    return(
        <main>
           <NewInfoForm getMatches={getMatches}/>
           {matches.length > 0 && matches.map(m => (
          m.species === "Cat" ? <CatCard key={m.apiId} cat={m}/> : <DogCard key={m.apiId} dog={m}/>
        ))}
        </main>
    )
}