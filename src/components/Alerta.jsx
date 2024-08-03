import './Alerta.css'

function Alerta(props) {
  return (
    <div className='w-25'>
    <h2 className={`${props.color}`}>{props.texto}</h2>
    </div>
  )
}

export default Alerta