import React, { useEffect, useState } from "react";
import axios from "axios";
import { ENV } from "../util/constants";
import HomeScreen from "../screen/HomeScreen";

export default function Rm() {
  const [characters, setCharacters] = useState([]);

  const [nextUrl, setNextUrl] = useState(null)
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${ENV.API_URL_RM}`);
        setCharacters(response.data.results);
        //Estado para guardar la url de la siguiente pagina
        setNextUrl(response.data.info.next);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const loadMoreData = async () => {
    if (isLoadingMore) return;

    setIsLoadingMore(true);
    try {
      if (nextUrl) {
        const response = await axios.get(nextUrl);
        const nexCharacters = response.data.results;
        // con esto se agrega nuevos elements al array
        setCharacters([...characters, ...nexCharacters]);
        setNextUrl(response.data.info.next);
      }
    } catch (error) {
      console.log(error);
    } finally {
        setIsLoadingMore(false);
    }
  };

  return <HomeScreen characters={characters} title={"Pesonajes"} loadMoreData={loadMoreData} />;
}
