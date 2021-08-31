import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InnovacionGalItem from '../../components/innovacion/InnovacionGalItem'
import Dashboard from '../../components/layout/Dashboard'
import Loading from '../../components/loading/Loading'
import { ICON_UPLOAD } from '../../directories/images'
import { updateGalInnovacion, updateInnovacion } from '../../helpers/InnovacionHelpers'
import { startAddImgGal, startUpdateInnovacion } from '../../reducer/InnovacionReducer'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const InnovacionViewPrivate = () => {
    const dispatch = useDispatch();
    const innovacion = useSelector(state => state.innovacion)
    const [loading, setLoading] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const [titleUp, setTitleUp] = useState(innovacion.title)
    const [photoUp, setphotoUp] = useState('')
    const [photoGalUp, setphotoGalUp] = useState('')
    const [descripcionUp, setDescripcionUp] = useState(innovacion.descripcion)
    const [edit, setEdit] = useState(false)
    
    const handleUpdateInnovacion = () => {
        setLoading(true)
        let image,imgUrl;
        if (photoUp === '') {
            image = photoUp;
            imgUrl = image;
        }if (photoUp) {
            image = photoUp;
            imgUrl = URL.createObjectURL(image);
        }
        updateInnovacion(innovacion.id,descripcionUp,image,titleUp)
        .then(() => {
                dispatch(startUpdateInnovacion(imgUrl,descripcionUp,titleUp))
                setLoading(false)
                setEdit(false)
        })
        .catch(e => {
            console.log(e)
        })
    }

    const handleAddGal = () => {
        setLoading2(true)
        let imgUrl = URL.createObjectURL(photoGalUp);
        updateGalInnovacion(innovacion.id, photoGalUp)
        .then(() => {
            dispatch(startAddImgGal(imgUrl))
            setLoading2(false)
        })
        .catch(e => {
            console.log(e)
        })
    }
    return (
        <Dashboard>
            <div className='dashboard__cont'>
                <h2 className='titulo' >Innovación</h2>
                <div className='btn_control_innovacion'>
                    {
                        edit
                        ?
                            loading
                            ? <Loading />
                            :
                                <>
                                        <button className='btn_center btn_success' onClick={handleUpdateInnovacion} >Guardar</button>
                                        <button className='btn_center btn_danger' onClick={() => setEdit(!edit)}>Cancelar</button>
                                </>
                        :<button className='btn_center btn_info' onClick={() => setEdit(!edit)}>Editar</button>
                    }
                    
                    
                </div>
                {
                    edit
                    ? <input type='text' placeholder='Digite el Nombre de la Innovación' value={titleUp} onChange={(e) => setTitleUp(e.target.value)} />
                    :<h3 className='titulo'>{innovacion.title}</h3>
                }
                
                <div className={`contenido__innovacion ${edit && 'contenido__innovacion_ed'}`}>
                    {
                        edit
                        ? 
                            <>
                                <label htmlFor='upload'>
                                    <img src={ICON_UPLOAD} alt='icon' />
                                </label>
                                <input
                                    type='file'
                                    name='photo'
                                    id='upload'
                                    onChange={(e) => setphotoUp(e.target.files[0])}
                                />
                            </>
                        :<img src={innovacion.fotoPrincipal} alt=' Foto Innovación' />
                    }
                    
                    {
                        edit
                        ? <CKEditor key='ckInn' editor={ClassicEditor} data={descripcionUp} onChange={(e, editor) => setDescripcionUp(editor.getData())} />
                        :<p>{innovacion.descripcion}</p>
                    }
                </div>
                <h3 className='titulo'>Galeria</h3>
                <div className='up_gal_innovacion'>
                    <label htmlFor='upload_gal'>
                       <span>Subir imagenes </span>
                        <img src={ICON_UPLOAD} alt='icon' />
                    </label>
                    {
                        loading2
                        ? <Loading />
                        :<button className='btn_success' 
                            onClick={handleAddGal}
                            disabled={photoGalUp === '' ? true: false}
                        >+</button>
                    }
                    <input
                        type='file'
                        name='photo'
                        id='upload_gal'
                        onChange={(e) => setphotoGalUp(e.target.files[0])}
                    />
                </div>
                <div className='gal__innovacion'>
                    {
                        innovacion.galeria?.map((gal, index) => (
                            <InnovacionGalItem 
                                key={index}
                                img={gal}
                            />
                        ))
                    }
                </div>
            </div>
        </Dashboard>
    )
}

export default InnovacionViewPrivate
