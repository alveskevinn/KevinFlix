import { Box, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

export default function MovieRow({ title, items }) {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };
  const handleRightArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    let listW = items.results.length * 180;
    if((window.innerWidth + listW) > x){
      x = (window.innerWidth - listW) - 100;
    }
    setScrollX(x)
  };

  return (
    // MovieRow
    <Box>
      <Box mb="30px">
        <Text fontSize="xl" marginLeft="70px" fontWeight="700" sx={{
        "@media (max-width: 700px)": {
          marginLeft: "20px"
        }
      }}>
          {title}
        </Text>
        <Box
          mt="17px"
          bg="rgba(0, 0, 0, 0.6)"
          position="absolute"
          w="40px"
          h="250px"
          zIndex="99"
          left="0"
          display="flex"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
          opacity="0"
          _hover={{ opacity: "1" }}
          transition="all ease 0.5s"
          onClick={handleLeftArrow}
          sx={{
            "@media (max-width: 700px)": {
              opacity: "1"
            }
          }}
        >
          <IoChevronBack fontSize="50" cursor="pointer" />
        </Box>
        <Box
          mt="17px"
          bg="rgba(0, 0, 0, 0.6)"
          position="absolute"
          w="40px"
          h="250px"
          zIndex="99"
          right="0"
          display="flex"
          alignItems="center"
          justifyContent="center"
          overflow="hidden"
          opacity="0"
          _hover={{ opacity: "1" }}
          transition="all ease 0.5s"
          onClick={handleRightArrow}
          sx={{
            "@media (max-width: 700px)": {
              opacity: "1"
            }
          }}
        >
          <IoChevronForward fontSize="50" cursor="pointer" />
        </Box>
        {/* ListArea */}
        <Box overflowX="hidden" paddingLeft="60px">
          {/* List */}
          <Box
            width={items.results.length * 200}
            ml={scrollX}
            transition="all ease 0.5s"
          >
            {items.results.length > 0 &&
              items.results.map((item, key) => (
                // Item
                <Box
                  display="inline-block"
                  w="190px"
                  cursor="pointer"
                  key={key}
                >
                  <Image
                    transform="scale(0.9)"
                    transition="all ease 0.2s"
                    w="100%"
                    key={key}
                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                    alt={item.original_title}
                    _hover={{ transform: "scale(1)" }}
                  />
                </Box>
              ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
