import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import "./MovieRow.css"

export default function MovieRow({title, items}) {
  return (
    <Box>
        <Text fontSize='xl'>{title}</Text>
        <Box>
            {items.results.length > 0 && items.results.map((item, key) => (
                <Image key={key} boxSize='300px' src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
            ))}
        </Box>
    </Box>
  )
}
