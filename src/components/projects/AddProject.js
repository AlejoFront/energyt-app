import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ICON_UPLOAD } from '../../directories/images';
import { addProject } from '../../helpers/QueHacemosHelpers'
import { useForm } from '../../hooks/useForm';
import { startAddProject } from '../../reducer/QueHacemosReducer';
import Loading from '../loading/Loading'
const AddProject = () => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [values, handleInputChange,reset] = useForm({
        photo: '', titulo: '', desctipcion_c: '', descripcion_l: ''
    });
    const {photo, titulo, desctipcion_c, descripcion_l} = values
    const handleAddProject = () => {
        let imgUrl = URL.createObjectURL(photo);
        setLoading(true)
        addProject(photo,titulo,desctipcion_c,descripcion_l)
        .then(response => {
            dispatch(startAddProject(response.id,imgUrl,titulo,desctipcion_c,descripcion_l))
            setLoading(false)
            reset()
        })
        .catch(e => {
            console.log(e)
            setLoading(false)
        })
    }
    return (
        <div className='project_add_form'>
            <div className='form_add_group'>
                <label htmlFor='upload'>
                    <img src={ICON_UPLOAD} alt='icon' />
                </label>
                <input
                    type='file'
                    name='photo'
                    id='upload'
                    onChange={handleInputChange}
                />
            </div>
            <div className='form_add_group'>
                <label>Nombre del proyecto</label>
                <input type='text' name='titulo' value={titulo} onChange={handleInputChange} />
            </div>
            <div className='form_add_group'>
                <label>Descripción Corta</label>
                <textarea name='desctipcion_c' value={desctipcion_c} onChange={handleInputChange} maxLength='250'/>
                <span>caracteres {desctipcion_c.length} de 250</span>
            </div>
            <div className='form_add_group'>
                <label>Descripción Larga</label>
                <textarea name='descripcion_l' value={descripcion_l} onChange={handleInputChange} maxLength='900' />
                <span>caracteres {descripcion_l.length} de 900</span>
            </div>
            <div className='form_btn_group'>
                {
                    loading 
                    ? <Loading />
                    : <button onClick={handleAddProject} className='btn_success' >Guardar</button>
                }
                
            </div>
        </div>
    )
}

export default AddProject
