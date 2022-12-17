import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { format } from "date-fns";
import { IoInformationCircleOutline, IoPlaySharp } from "react-icons/io5";

export default function FeatureMovie({ item }) {
  const backgroundMovie = `url(https://image.tmdb.org/t/p/original${item.backdrop_path})}`;
  const yearMovie = new Date(item.release_date || item.first_air_date);
  const yearFormat = format(yearMovie, "yyyy");
  console.log(yearFormat);
  return (
    <Box
      height="88vh"
      backgroundSize="cover"
      backgroundPosition="top"
      backgroundImage={backgroundMovie}
    >
      <Box
        w="inherit"
        h="inherit"
        background="linear-gradient(to top, #111 10%, transparent 90%)"
      >
        <Box
          w="inherit"
          h="inherit"
          background="linear-gradient(to right, #111 20%, transparent)"
          color="white"
        >
          <Flex flexDirection="column" w="45vw" h="80vh" justifyContent="end">
            <Text fontSize="6xl" marginLeft="60px" fontWeight="500" fontFamily="'Bebas Neue', cursive;">
              {item.title}
              {item.name}
            </Text>
            {/* info */}
            <Box marginLeft="60px">
              {/* Pontos */}
              <Flex gap="20px" mb="8px" fontWeight="700">
                <Box
                  padding="3px 4px"
                  color="green"
                  borderRadius="10px"
                  boxSizing="border-box"
                > 
                  {`Nota ${item.vote_average.toFixed(1)}`}
                </Box>
                {/* Ano de lançamento */}
                <Box padding="3px 4px">{yearFormat}</Box>
              </Flex>
              {/* Descrição */}
              <Box textIndent="20px" textAlign="justify" fontSize="15px">
                {item.overview.length > 300 ? `${item.overview.substring(0,290)}...` : item.overview}
                {console.log(item.overview.length)}
              </Box>
              {/* Botões */}
              <Flex m="40px 0px" gap="20px">
                <Button color="black" gap="5px">
                  {" "}
                  <IoPlaySharp fontSize="22px" /> Assistir
                </Button>
                <Button background="rgb(84,81,81)" gap="5px" _hover={{ background: "rgb(84,81,95)" }}>
                  <IoInformationCircleOutline fontSize="22px" /> Mais
                  informações
                </Button>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
