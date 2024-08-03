import { useState } from "react"

const Formulario = ({agregarContacto}) => {
    const formInicial = {
        id: null,
        nombre: '',
        email: '',
        mensaje:''
        
       }
     const [form, setForm] = useState(formInicial)
     const handleChange = e => { // Evento -> e -> evt -> evento -> event
        console.log(e.target.name)
        console.log(e.target.value)

        const obj = {
            ...form, // Spread Operator (Todo lo que tenía el form),
            [e.target.name]: e.target.value
        }
    
        setForm(obj)
    
       }
    

    const handleSubmit = e => {
        e.preventDefault() 
        console.log('Enviando la información')
        agregarContacto(form)
       
       } 
    
    return (
        <>
            <h2>Formulario de carga/edición</h2>
            <form className="w-75 border border-danger rounded-3 p-4" >
                {/* Campo Nombre */}
                <div className="mb-3">
                    <label htmlFor="lbl-nombre" className="form-label">Nombre</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="lbl-nombre" 
                        name="nombre" 
                        placeholder="Ingrese el nombre"
                        value={form.nombre}
                        onChange={handleChange}
                    />
                </div>
                {/* Email */}
                <div className="mb-3">
                    <label htmlFor="lbl-email" className="form-label">Email</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="lbl-email" 
                        name="email" 
                        placeholder="Ingrese el Email"
                      value={form.email}
                    onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="lbl-mensaje" className="form-label">mensaje</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="lbl-mensaje" 
                        name="mensaje" 
                        placeholder="Ingrese el mensaje"
                       value={form.mensaje}
                       onChange={handleChange}
                    />
                </div>
                
                <button type="submit" className="btn btn-dark me-2">Enviar</button> 
                   
            </form>
        </>
      )
}

export default Formulario