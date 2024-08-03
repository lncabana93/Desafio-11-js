import { useState } from "react"

const Contador = ({valorInicial, nro})  => {

    const [estado, setEstado] = useState(valorInicial)

    let handleDecrementar = () => {
        setEstado(estado - 1)
      }
      
      let handleResetear = () =>{
        setEstado(valorInicial)
      }
      
      let handleIncrementar =() =>{
          setEstado(estado + 1)
      }
  return (
    <>
    <p className="display-2">Valor actual: {estado}</p>
    <button className="btn btn-primary" onClick={handleIncrementar}>Incrementar</button>
    <button className="btn btn-secondary"onClick={handleDecrementar}>Decrementar</button>
    <button className="btn btn-danger" onClick ={handleResetear}>Resetear</button>
    </>
  )
}

export default Contador