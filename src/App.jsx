import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import MovieRow from "./components/MovieRow";
import "./App.css"

import Tmdb from "./components/Tmdb/Tmdb";

export default function App() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
    };
    loadAll();
  }, []);

  return (
    <ChakraProvider>
      <Box bg="#111" color="#fff" m='0px'>
        <Box>
          {movieList.map((item, key) => (
            <MovieRow key={key} title={item.title} items={item.items}/>
          ))}
        </Box>
      </Box>
    </ChakraProvider>
  );
}
