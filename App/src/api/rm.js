import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { ENV } from '../util/constants';
import HomeScreen from '../screen/HomeScreen';

export default function Rm() {
    const [characters, setCharacters] = useState([]);

    console.log('characters', characters);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${ENV.API_URL_RM}`);
                setCharacters(response.data.results);
                console.log('res', response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <HomeScreen characters={characters} />
    )
}