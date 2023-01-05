import { Box, ChakraProvider } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import MovieRow from "./components/MovieRow";
import "./App.css";

import Tmdb from "./components/Tmdb/Tmdb";
import FeatureMovie from "./components/FeatureMovie";
import Header from "./components/Header";

export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      let trending = list.filter((i) => i.slug === "trending");
      let randomChosen = Math.floor(
        Math.random() * (trending[0].items.results.length - 1)
      );
      let chosen = trending[0].items.results[randomChosen];
      setMovieList(list);
      setFeatureData(chosen);
    };
    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener("scroll", scrollListener);
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <ChakraProvider>
      <Header black={blackHeader}/>
      {featureData && <FeatureMovie item={featureData} />}
      <Box bg="#111" color="#fff">
        <Box>
          {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items} />
          ))}
        </Box>
      </Box>
    </ChakraProvider>
  );
}
