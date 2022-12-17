import {
  Box,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IoCaretDown, IoHelpCircle, IoLogInOutline, IoNotificationsOutline, IoPencil, IoPeople, IoPerson, IoSearch } from "react-icons/io5";

export default function Header({ black }) {
  return (
    <Box
      position="fixed"
      top="0"
      display="flex"
      width="99vw"
      justifyContent="space-between"
      color="#bababa"
      background={black ? "#141414" : ""}
      fontFamily="'Bebas Neue', cursive;"
      zIndex="999"
      padding="10px 0"
      transition="all ease 0.5s"
    >
      <Box gap="25px" display="flex" fontSize="15px" alignItems="center">
        <Image
          ml="30px"
          w="80px"
          src="/public/Netflix-Logo-removebg-preview.png"
          cursor="pointer"
        />
        <Text color="white" cursor="pointer">
          Início
        </Text>
        <Text cursor="pointer">Séries</Text>
        <Text cursor="pointer">Filmes</Text>
        <Text cursor="pointer">Bombando</Text>
        <Text cursor="pointer">Minha lista</Text>
        <Text cursor="pointer">Navegar por idiomas</Text>
      </Box>
      <Box display="flex" alignItems="center" gap="20px" mr="3%">
        <IoSearch fontSize="20px" cursor="pointer" color="#fafafa" />
        <IoNotificationsOutline
          fontSize="20px"
          cursor="pointer"
          color="#fafafa"
        />

        <Menu>
          <Image
            w="30px"
            src="/public/92995677ac0aab719760c33c_rw_600.png"
            cursor="pointer"
          />
          <MenuButton rightIcon={<IoCaretDown />}>
            <IoCaretDown cursor="pointer" color="#fafafa" />
          </MenuButton>
          <MenuList color="white" background="#141414" border="black">
            <MenuItem background="#141414" gap="10px"><IoPencil /> Gerenciar perfis</MenuItem>
            <MenuItem background="#141414" gap="10px"><IoPeople /> Transferir perfil</MenuItem>
            <MenuItem background="#141414" gap="10px"><IoPerson /> Conta</MenuItem>
            <MenuItem background="#141414" gap="10px"><IoHelpCircle /> Central de ajuda</MenuItem>
            <MenuItem background="#141414" gap="10px"><IoLogInOutline /> Sair</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
}
