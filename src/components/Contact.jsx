import { Textarea, Container } from "@chakra-ui/react";
import { useState } from "react";
import contacto from "../assets/contacto.png"

const Contact = () => {
  let [value, setValue] = useState("");

  let handleInputChange = (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
    console.log(value);
  };

  return (
    <div>
      <div className="contact_box">
        <img src= {contacto} alt="" />
        <div className="text_area">
          <Textarea
            value={value}
            onChange={handleInputChange}
            placeholder="Dejanos tu mensaje"
            size="lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
