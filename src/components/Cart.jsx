import { Link } from "react-router-dom";
import FormCart from "./FormCart"
import { Button } from "@chakra-ui/react";

import { useContext } from "react";
import { CartContext } from "../Context/ShoppingCartContext";

// import Brief from "./Brief";

const Cart = () => {
  // let cart = "";

  const { cart } = useContext(CartContext);
  
  if (cart === "abc") {
    return (
      <>
      <div className="cart_">
        <h2>El carrito esta vacio</h2>
        <Link to={"/catalogue"}>
          <Button colorScheme='orange'>Volver al catálogo</Button>
        </Link>
      </div>
      </>
    )
  } else {
    return (
      <>
      <div className="cart_">
        <p>Aca va el resumen de la compra</p>
        <FormCart />
      </div>
      </>
    )
  }
  
}

export default Cart