import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { ICON_QUE_HACEMOS,  } from '../../directories/images'
import { updateQueHacemos } from '../../helpers/QueHacemosHelpers';
import { useForm } from '../../hooks/useForm';
import { startUpdateQueHacemos } from '../../reducer/QueHacemosReducer';
import Loading from '../loading/Loading';
import ReactHtmlParser from 'react-html-parser'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const QueHacemosEditItem = ({id, icono, titulo, descripcion}) => {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false)
    const [loading, setLoading] = useState(false)
    const [values, handleInputChange] = useForm({
        photoUp: '', tituloUp: titulo
    });
    const {photoUp, tituloUp, } = values
    const [desctipcionUp, setDesctipcionUp] = useState(descripcion)
    const handleUpdate = () => {
        setLoading(true)
        let image,imgUrl = null;
        if (photoUp === '') {
            image = icono;
            imgUrl = image;
        }if (photoUp) {
            image = photoUp;
            imgUrl = URL.createObjectURL(image);
        }
        updateQueHacemos(id,image,tituloUp,desctipcionUp)
        .then(() => {
            dispatch(startUpdateQueHacemos(id,desctipcionUp,imgUrl,tituloUp))
            setLoading(false)
            setEdit(false)
        })
        .catch(e => {
            console.log(e)
            setLoading(false)
        })
        
    }

    return (
        <div className='item_que_hacemos'>
            <div className='group_que_hacemos'>

                <figure className="card__img">
                    {
                        // edit
                        // ? <>
                        //     <label htmlFor='upload' className='label_up'>
                        //         <img src={ICON_UPLOAD} alt='icon' />
                        //     </label>
                        //     <input
                        //         type='file'
                        //         name='photoUp'
                        //         id='upload'
                        //         onChange={handleInputChange}
                        //     />
                        // </>
                        // :
                            icono === null
                            ?<img src={ICON_QUE_HACEMOS} alt='icono' />
                            :<img src={icono} alt='icono' />
                        
                    }
                    
                    
                    
                </figure>
                {
                    edit
                    ? <input type='text' name='tituloUp' value={tituloUp} onChange={handleInputChange}/>
                    :<h2>{titulo}</h2>
                }
                {
                    edit 
                    ? <CKEditor key='ckEd'  editor={ClassicEditor} data={desctipcionUp} onChange={(e, editor) => setDesctipcionUp(editor.getData())}/>
                    :<article>{ReactHtmlParser(descripcion)}</article>
                }
                
            </div>
            <div className='group__btn_que_hacemos'>
                {
                    edit
                    ?
                        loading
                        ?<Loading />
                        :
                        <>
                            <button className='btn_info' onClick={handleUpdate}>Guardar</button>
                            <button className='btn_danger' onClick={() => setEdit(!edit)}>Cancelar</button>
                        </>
                    :<button className='btn_info' onClick={() => setEdit(!edit)}>Editar</button>
                }
            </div>
        </div>
    )
}

export default QueHacemosEditItem
