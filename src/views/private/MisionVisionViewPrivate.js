import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dashboard from '../../components/layout/Dashboard'
import Loading from '../../components/loading/Loading'
import { UpdateMision, UpdateVision } from '../../helpers/SobreNosotrosHelpers'
import { startUpdateMision, startUpdateVision } from '../../reducer/SobreNosotrosReducer'

const MisionVisionViewPrivate = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [editM, setEditM] = useState(false)
    const [editV, setEditV] = useState(false)
    const mision = useSelector(state => state.mision)
    const vision = useSelector(state => state.vision)
    const [upM, setupM] = useState(mision.descripcion)
    const [upV, setupV] = useState(vision.descripcion)

    const handleUpM = () => {
        setLoading(true)
        UpdateMision(mision.id,upM)
        .then(() => {
            dispatch(startUpdateMision(upM))
            setLoading(false)
            setEditM(false)
        })
        .catch(e => {
            console.log(e)
            setLoading(false)
        })
    }

    const handleUpV = () => {
        setLoading(true)
        UpdateVision(vision.id,upV)
        .then(() => {
            dispatch(startUpdateVision(upV))
            setLoading(false)
            setEditV(false)
        })
        .catch(e => {
            console.log(e)
            setLoading(false)
        })
    }

    return (
        <Dashboard>
            <div className='dashboard__cont'>
                <div className='controls'>
                    <h2 className='titulo' >Misión</h2>
                    {
                        editM
                        ?<textarea value={upM} onChange={(e) => setupM(e.target.value)} />
                        :<article> {mision.descripcion} </article>
                    }
                    <div className='controls-button'>
                        {
                            editM
                            ?
                                loading
                                ? <Loading />
                                : 
                                    <>
                                        <button className='btn_success' onClick={handleUpM} >Guardar</button>
                                        <button className='btn_danger' onClick={() => setEditM(!editM)} >Cancelar</button>
                                    </>
                            :<button className='btn_info' onClick={() => setEditM(!editM)} >Editar</button>
                        }
                    </div>
                </div>
                <hr/>
                <div className='controls'>
                    <h2 className='titulo' >Visión</h2>
                    {
                        editV
                        ?<textarea value={upV} onChange={(e) => setupV(e.target.value)}/>
                        :<article> {vision.descripcion} </article>
                    }
                    <div className='controls-button'>
                        {
                            editV
                            ? loading
                                ? <Loading />
                                :
                                <>
                                    <button className='btn_success' onClick={handleUpV} >Guardar</button>
                                    <button className='btn_danger' onClick={() => setEditV(!editV)} >Cancelar</button>
                                </>
                            :<button className='btn_info' onClick={() => setEditV(!editV)} >Editar</button>
                        }
                    </div>
                </div>
            </div>
        </Dashboard>
    )
}

export default MisionVisionViewPrivate
