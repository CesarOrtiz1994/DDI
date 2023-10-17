import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { ENV } from '../util/constants';
import HomeScreen from '../screen/HomeScreen';

export default function Rm() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${ENV.API_URL_RM}`);
                setCharacters(response.data.results);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <HomeScreen characters={characters} title={'Pesonajes'} />
    )
}