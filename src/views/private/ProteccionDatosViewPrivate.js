import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dashboard from '../../components/layout/Dashboard'

import Loading from '../../components/loading/Loading'
import { upProteccionDatos } from '../../helpers/SobreNosotrosHelpers'
import { startUpdateProteccion } from '../../reducer/SobreNosotrosReducer'
const ProteccionDatosViewPrivate = () => {
    const dispatch = useDispatch()
    const {id,link,descripcion} = useSelector(state => state.proteccionDatos)
    const [loading, setLoading] = useState(false)
    const [upLink, setUpLink] = useState(link)
    const [edit, setEdit] = useState(true)
    const [upDescripcion, setUpDescripcion] = useState(descripcion)

    const handleUpdate = () => {
        setLoading(true)
        upProteccionDatos(id,upLink,upDescripcion)
        .then(() => {
            dispatch(startUpdateProteccion(id,upDescripcion,upLink))
            setLoading(false)
            setEdit(true)
        })
        .catch(e => {
            console.log(e)
            setLoading(false)
        })
    }

    return (
        <Dashboard>
            <div className='dashboard__cont'>  
                <h2 className='titulo'>Protección de Datos</h2>
                    <div className='control_Proteccion'>     
                        <div className='proteccion_group'>
                            <label>Enlace del Documento</label>
                            <input type='url' value={upLink} onChange={(e) => setUpLink(e.target.value)} disabled={edit} />
                        </div>
                        <div className='proteccion_group'>
                            <label>Descripcion</label>
                            <textarea value={upDescripcion} onChange={(e) => setUpDescripcion(e.target.value)} disabled={edit} />
                        </div>
                        <div className='btn_control'>
                            {
                                edit
                                ? <button className='btn_info' onClick={() => setEdit(!edit)} >Editar</button>
                                : loading
                                    ?<Loading />
                                    :
                                        <>
                                            <button className='btn_success' onClick={handleUpdate} >Guardar</button>
                                            <button className='btn_danger' onClick={() => setEdit(!edit)} >Cancelar</button>
                                        </>
                            }
                        </div>
                    </div>
                    
            </div>
        </Dashboard>
    )
}

export default ProteccionDatosViewPrivate
