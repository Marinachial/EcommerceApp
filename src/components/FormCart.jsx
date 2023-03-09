import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
  RadioGroup,
  HStack,
  Radio,
  Flex,
  Button,
} from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import Swal from 'sweetalert2'

const FormCart = () => {

  const comprarProd = (e) => {
    e.preventDefault();
    Swal.fire(
      'Muchas gracias por tu compra!',
      'Proximamente te enviaremos un mail',
      'success'
    )
  }

  return (
    <div className="form_cart">
      <form onSubmit={comprarProd}>
        <FormControl isRequired>
          <FormLabel>Nombre</FormLabel>
          <Input focusBorderColor="black" placeholder="Nombre" />
          <FormLabel>Apellido</FormLabel>
          <Input focusBorderColor="black" placeholder="Apellido" />
          <FormLabel>Telefono</FormLabel>
          <Input focusBorderColor="black" />
          <FormLabel>Tipo de teléfono</FormLabel>
          <RadioGroup defaultValue="Celular">
            <HStack spacing="24px">
              <Radio value="Celular">Celular</Radio>
              <Radio value="Fijo">Fijo</Radio>
            </HStack>
          </RadioGroup>
          <Button id="confirm" type="submit" left="60%" colorScheme="orange">
            Confirmar Compra
          </Button>
        </FormControl>
      </form>
    </div>
  );
};

export default FormCart;
