import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dashboard from '../../components/layout/Dashboard'
import Loading from '../../components/loading/Loading'
import QueHacemosEditItem from '../../components/queHacemos/QueHacemosEditItem'
import { addQueHacemos } from '../../helpers/QueHacemosHelpers'
import { startAddQueHacemos } from '../../reducer/QueHacemosReducer'

const QueHacemosViewPrivate = () => {
    const dispatch = useDispatch()
    const {queHacemos} = useSelector(state => state.queHacemos)
    const [name, setName] = useState('')
    const [descripcion, setDdescripcion] = useState('')
    const [loading, setLoading] = useState(false)

    const handleAddQueHacemos = () => {
        setLoading(true)
        addQueHacemos(descripcion,name)
        .then(response => {
            dispatch(startAddQueHacemos(response.id,descripcion,null,name))
            setLoading(false)
            setName('')
            setDdescripcion('')
        })
        .catch(e => {
            console.log(e)
            setLoading(false)
        })
    }

    return (
        <Dashboard>
            <div className='dashboard__cont'>
                <h2 className='titulo' >Qué hacemos</h2>
                <div className='controls'>
                    <div className='container_add_que_hacemos'>
                        <div className='group-form'>
                            <label>Nombre</label>
                            <input type='text' placeholder='Nombre de lo que hacemos' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='group-form'>
                            <label>Descripción</label>
                            <textarea placeholder='Descripcion de lo que hacemos' value={descripcion} onChange={(e) => setDdescripcion(e.target.value)}  />
                        </div>
                        <div className='group-form-btn'>
                            {
                                loading
                                ? <Loading/>
                                :<button onClick={handleAddQueHacemos} className='btn_success'>Agregar</button>
                            }
                            
                        </div>
                    </div>
                    <div className='container_edit_que_hacemos'>
                        {
                            queHacemos.map((data, index) => (
                                <QueHacemosEditItem 
                                    key={index}
                                    id={data.id}
                                    icono={data.icono}
                                    titulo={data.nombre}
                                    descripcion={data.descripcion}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </Dashboard>
    )
}

export default QueHacemosViewPrivate
