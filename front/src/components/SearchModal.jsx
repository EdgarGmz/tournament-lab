import { useState } from 'react'
import '../css/modal.css'

const SearchModal = ({isOpen, onClose}){
    const [ nombre, setNombre ] = useState("")
    const [ fecha, setFecha ] = useState("")
    const [ status, setStatus ] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Buscar Torneo", {nombre, fecha, status})

        // TODO: Crear lógica de busqueda
    }

    if(!isOpen) return null

    return(
        <div className='modal-backdrop'></div>
    )
}