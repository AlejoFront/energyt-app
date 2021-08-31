import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dashboard from '../../components/layout/Dashboard'
import Loading from '../../components/loading/Loading'
import QueHacemosEditItem from '../../components/queHacemos/QueHacemosEditItem'
import { addQueHacemos } from '../../helpers/QueHacemosHelpers'
import { startAddQueHacemos } from '../../reducer/QueHacemosReducer'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const QueHacemosViewPrivate = () => {
    const dispatch = useDispatch()
    const {queHacemos} = useSelector(state => state.queHacemos)
    const [name, setName] = useState('')
    const [descripcion, setDdescripcion] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [messageError, setMessageError] = useState('')
    const handleAddQueHacemos = () => {
        if (name === '' || descripcion === '' ) {
            setError(true)
            setMessageError('Ingrese todos los campos')
            return
        }else{
            setError(false)
            setMessageError('')
        }
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
                    <div className='container_add_que_hacemos'>
                        <div className='group-form'>
                            <label>Nombre</label>
                            <input type='text' placeholder='Nombre de lo que hacemos' value={name} onChange={(e) => setName(e.target.value)} className={error ? name === '' ? 'error' : '': undefined}/>
                        </div>
                        <div className='group-form'>
                            <label>Descripción</label>
                            <CKEditor key='ckAdd'  editor={ClassicEditor} data={descripcion}  onChange={(e, editor) => setDdescripcion(editor.getData())}  />
                            {  error ? descripcion === '' ? <span className='err'>*</span> : '' : undefined}
                        </div>
                        
                        <div className='group-form-btn'>
                        
                            {
                                loading
                                ? <Loading/>
                                :<button onClick={handleAddQueHacemos} className='btn_success'>Agregar</button>
                            }
                            { error ? <div className='message'> <span className='alert-danger'>{messageError}</span> </div> : ''}
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
        </Dashboard>
    )
}

export default QueHacemosViewPrivate
