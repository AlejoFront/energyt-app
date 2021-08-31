import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dashboard from '../../components/layout/Dashboard'
import EstadosFinancierosItem from '../../components/sobreNosotros/EstadosFinancierosItem'
import Loading from '../../components/loading/Loading'
import { addEstadosFinancieros } from '../../helpers/SobreNosotrosHelpers'
import { startAddEstadosFinancieros } from '../../reducer/SobreNosotrosReducer'
const EstadosFinancierosViewPrivate = () => {
    const dispatch = useDispatch()
    const {estadosFinancieros} = useSelector(state => state.estadosFinancieros)
    const [loading, setLoading] = useState(false)
    const [link, setLink] = useState('')
    const [anio, setAnio] = useState('')

    const handleAddEstado = () => {
        setLoading(true)
        addEstadosFinancieros(anio,link)
        .then(response => {
            dispatch(startAddEstadosFinancieros(response.id,anio,link))
            setLoading(false)
            setLink('')
            setAnio('')
        })
        .catch(e => {
            console.log(e)
        })
    }

    return (
        <Dashboard>
            <div className='dashboard__cont'>
                <h2 className='titulo' >Estados Financieros</h2>
                <div className='controls_estados'>
                    <div className='estados_cont'>
                        <div className='estados_group'>
                            <label>Url</label>
                            <input type='url' value={link} onChange={(e) => setLink(e.target.value)} />
                        </div>
                        <div className='estados_group'>
                            <label>Año</label>
                            <input type='text' value={anio} onChange={(e) => setAnio(e.target.value)} />
                        </div>
                        <div className='controls-button'>
                            {
                                loading
                                ?<Loading />
                                :<button onClick={handleAddEstado} className='btn_success'>Agregar</button>
                            }
                            
                        </div>
                    </div>
                    <div className='estados__grid'>
                        {
                            estadosFinancieros.map((estado, index) => (
                                <EstadosFinancierosItem
                                    key={index}
                                    id={estado.id}
                                    anio={estado.anio}
                                    link={estado.link}
                                />
                            ))
                        }
                        
                    </div>
                </div>
            </div>
        </Dashboard>
    )
}

export default EstadosFinancierosViewPrivate
