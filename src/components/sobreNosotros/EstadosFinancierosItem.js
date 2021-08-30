import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ICON__ESTADOS_FINANCIEROS } from '../../directories/images'
import { updateEstadosFinancieros } from '../../helpers/SobreNosotrosHelpers'
import { startUpdateEstadosFinancieros } from '../../reducer/SobreNosotrosReducer'
import Loading from '../loading/Loading'
const EstadosFinancierosItem = ({id, link,anio}) => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const [loading, setLoading] = useState(false)
    const [upLink, setUpLink] = useState(link)
    const [upAnio, setUpAnio] = useState(anio)

    const handleUpdateEstadoFinanciero = () => {
        setLoading(true)
        updateEstadosFinancieros(id,upAnio,upLink)
        .then(() => {
            dispatch(startUpdateEstadosFinancieros(id,upAnio,upLink))
            setLoading(false)
            setEdit(false)
        })
        .catch(e => {
            console.log(e)
        })
    }

    return (
        <div className='item_estado'>
            {
                edit
                ?
                <div className='edit_estado'>
                    <div>
                        <label>Enlace del documento</label>
                        <input type='url' value={upLink} onChange={(e) => setUpLink(e.target.value)} />
                    </div>
                    <div>
                        <label>Año estado financiero</label>
                        <input type='text' value={upAnio} onChange={(e) => setUpAnio(e.target.value)} />
                    </div>
                </div>
                :
                <a href={link} >
                    <img src={ICON__ESTADOS_FINANCIEROS} alt="logo estado" />
                    <span>Año {anio}</span>
                </a>
            }
            <div className='edit__estados_F'>
                {
                    edit
                    ?
                        loading
                        ? <Loading />
                        :
                        <>
                            <button className='btn_success' onClick={handleUpdateEstadoFinanciero}>Actualizar</button>
                            <button className='btn_danger' onClick={() => setEdit(!edit)}>Cancelar</button>
                        </>
                    :<button className='btn_info' onClick={() => setEdit(!edit)}>Editar</button>
                }
            </div>

        </div>
    )
}

export default EstadosFinancierosItem
