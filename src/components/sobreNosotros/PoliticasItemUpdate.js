import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { UpdatePolitica } from '../../helpers/SobreNosotrosHelpers'
import { startUpdatePolitica } from '../../reducer/SobreNosotrosReducer'
import Loading from '../loading/Loading'
const PoliticasItemUpdate = ({id,title, descripcion, order, nameClass}) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [edit, setEdit] = useState(false)
    const [update, setUpdate] = useState(descripcion)

    const handleUpdate = () => {
        setLoading(true)
        UpdatePolitica(id,update)
        .then(() => {
            dispatch(startUpdatePolitica(id,update,order,title,nameClass))
            setLoading(false)
            setEdit(false)
        })
        .catch(e =>  {
            console.log(e)
            setLoading(false)
            setEdit(false)
        })
    }

    return (
        <div className='controls'>
            <h2 className='titulo'>{title}</h2>
            {
                edit
                ?<textarea value={update} onChange={(e) => setUpdate(e.target.value)} />
                :<article> {descripcion} </article>
            }
            
            <div className='controls-button'>
                {
                    edit
                    ?
                        loading
                        ? <Loading />
                        :
                            <>
                                <button onClick={handleUpdate} className='btn_success'>Guardar</button>
                                <button onClick={() => setEdit(!edit)} className='btn_danger'>Cancelar</button>
                            </>
                    :<button onClick={() => setEdit(!edit)} className='btn_info'>Editar</button>
                }
            </div>
        </div>
    )
}

export default PoliticasItemUpdate
