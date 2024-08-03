

function FichaPresentacion({foto}) {
  return (
    <div className="w-25 mt-1 border border-dark rounded-3 p-1">
       <p><strong>Nombre:</strong> Pedro Batista</p>
       <p><strong>Profesion:</strong> Albañil</p>
       <img src= {foto} className="card w-50" alt="Foto de Perfil" />
    </div>
  )
}

export default FichaPresentacion