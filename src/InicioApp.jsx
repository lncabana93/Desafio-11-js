
import Alerta from "./components/Alerta";
import Contador from "./components/Contador";
import FichaPresentacion from "./components/FichaPresentacion";
import Formulario from "./components/Formulario";
import { useState } from "react";
import contacto from "./components/constants/contacto";
import Presentacion from "./components/Presentacion";



const InicioApp = () => {

const [contacts, setcontacts] = useState(contacto)
console.log(contacts)

const agregarContacto = (contacto) => 

  console.log('Agregando el producto al array...', contacto)


    return (
    <div className="container">
      <FichaPresentacion foto="img/albanil.jpg" />
      <hr />
      <Alerta texto="Success" color="bg-verde" />
      <Alerta texto="Warning" color="bg-amarillo" />
      <Alerta texto="Error" color="bg-rojo" />
      <hr />
      <Contador valorInicial={0} nro="1" />
      <hr />
      <Formulario/>
      <Presentacion contacts= {contacts} />
      
    </div>
  );
}

export default InicioApp;
