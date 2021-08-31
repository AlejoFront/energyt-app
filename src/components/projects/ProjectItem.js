import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateProject } from '../../helpers/QueHacemosHelpers';
import { useForm } from '../../hooks/useForm'
import { startUpdateProject } from '../../reducer/QueHacemosReducer';
import Loading from '../loading/Loading'
const ProjectItem = ({id, img, descripcion_corta, descripcion_larga, title}) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);
    const [edit, setEdit] = useState(false)

    const [values, handleInputChange,reset] = useForm({
        imagen: '', titulo: title, desctipcion_c: descripcion_corta, descripcion_l: descripcion_larga
    });
    const {imagen, titulo, desctipcion_c, descripcion_l} = values

    const handleUpdate = () => {
        setLoading(true)
        let image,imgUrl;
        if (imagen === '') {
            image = img;
            imgUrl = image;
        }if (imagen) {
            image = imagen;
            imgUrl = URL.createObjectURL(image);
        }
        updateProject(id,image,titulo,desctipcion_c,descripcion_l)
        .then(() => {
            dispatch(startUpdateProject(id,imgUrl,titulo,desctipcion_c,descripcion_larga))
            setLoading(false)
            setEdit(false)
            reset()
        })
        .catch(e => {
            console.log(e)
            setLoading(false)
        })
    }

    return (
        <div className='container_project'>
            {
                edit
                ?   <input type='file' name='imagen' onChange={handleInputChange} />
                :   <img src={img} alt='imagen proyecto' />
            }
            {
                edit
                ?   <>
                        <label>Nombre del Proyecto</label>
                        <input type='text' name='titulo' value={titulo} onChange={handleInputChange} />
                    </>
                :<h2>{title}</h2>
            }
           <div className='cont_group_project'>
                <label>Descripción Corta</label>
                {
                    edit
                    ? <textarea name='desctipcion_c' value={desctipcion_c} onChange={handleInputChange} />
                    :<article className='desc_corta'>{descripcion_corta}</article>
                }
           </div>
           <div className='cont_group_project'>
                <label>Descripción Larga</label>
                {
                    edit
                    ? <textarea name='descripcion_l' value={descripcion_l} onChange={handleInputChange} />
                    :<article className='desc_larga'>{descripcion_larga}</article>
                }
            </div>
            
            
            <div className='btn__controls'>
                {
                    edit
                    ? 
                        loading
                        ? <Loading />
                        :
                        <>
                            <button className='btn_success' onClick={handleUpdate} >Actualizar</button>
                            <button className='btn_danger' onClick={() => setEdit(!edit)} >Cancelar</button>
                        </>
                    : <button className='btn_info' onClick={() => setEdit(!edit)} >Editar</button>
                }
            </div>
        </div>
    )
}

export default ProjectItem
