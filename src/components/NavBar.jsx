import React from "react";
import {
  Button,
  Flex,
  Spacer,
  Box,
  ButtonGroup,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import CartWidget from "./CartWidget";

import logoCe from "../assets/logoCe.png"
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <Flex maxW="150rem" alignItems="center" gap="2" pt="1">
          <Link to={"/"}>
            <Box display="flex" ml="20">
              <img id="logo_Ce" src={logoCe} alt="" />
              <h1 id="texto_logo">TURÚ CERAMICA</h1>
            </Box>
          </Link>
          <Spacer />
          <div className="btns_navbar">
            <Flex>
              <ButtonGroup className="btns" gap="7" justify="center">
                <Button colorScheme="teal" variant="link">
                  <Link to={"/catalogue"}>Catálogo</Link>
                </Button>
                <Menu className="menu_nav">
                  <MenuButton
                    bg="light"
                    as={Button}
                    colorScheme="light"
                    rightIcon={<ChevronDownIcon />}
                  >
                    Nuestros Productos
                  </MenuButton>
                  <MenuList bg="#f5e1ce">
                    <Flex>
                      <Link to={`/category/${"Tazas"}`}>
                        <MenuItem bg="ligth">
                          Tazas
                        </MenuItem>
                      </Link>
                    </Flex>
                    <Flex>
                    <Link to={`/category/${"Mates"}`}>
                      <MenuItem bg="ligth">
                        Mates
                      </MenuItem>
                    </Link>  
                    </Flex>
                    <Flex>
                    <Link to={`/category/${"Especieros"}`}>
                      <MenuItem bg="ligth">
                        Especieros
                      </MenuItem>
                    </Link>  
                    </Flex>
                    <Flex>
                    <Link to={`/category/${"Macetas"}`}>
                      <MenuItem bg="ligth">
                        Macetas
                      </MenuItem>
                    </Link>
                    </Flex>
                  </MenuList>
                </Menu>

                <Link to={"/contact"}>
                <Button colorScheme="teal" variant="outline">
                  Contacto
                </Button>
                </Link>
              </ButtonGroup>
            </Flex>
          </div>
          <Link to={"/cart"}>
            <CartWidget />
          </Link>
        </Flex>
      </div>
    </>
  );
};

export default NavBar;
