import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dashboard from '../../components/layout/Dashboard'
import Loading from '../../components/loading/Loading'
import { ICON_UPLOAD } from '../../directories/images'
import { updateGalInnovacion, updateInnovacion } from '../../helpers/InnovacionHelpers'
import { startUpdateInnovacion } from '../../reducer/InnovacionReducer'

const InnovacionViewPrivate = () => {
    const dispatch = useDispatch();
    const innovacion = useSelector(state => state.innovacion)
    const [loading, setLoading] = useState(false)
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
        updateInnovacion(innovacion.id,descripcionUp,photoUp,titleUp)
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
        updateGalInnovacion(innovacion.id, photoGalUp)
        .then(() => {
            console.log('exito')
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
                    ? <input type='text' value={titleUp} onChange={(e) => setTitleUp(e.target.value)} />
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
                        :<img src={innovacion.fotoPrincipal} alt='Foto' />
                    }
                    
                    {
                        edit
                        ? <textarea value={descripcionUp} onChange={(e) => setDescripcionUp(e.target.value)} />
                        :<p>{innovacion.descripcion}</p>
                    }
                </div>
                <h3 className='titulo'>Galeria</h3>
                <div className='up_gal_innovacion'>
                    <label htmlFor='upload_gal'>
                        <img src={ICON_UPLOAD} alt='icon' />
                    </label>
                    <button className='btn_success' onClick={handleAddGal}>Agregar</button>
                    <input
                        type='file'
                        name='photo'
                        id='upload_gal'
                        onChange={(e) => setphotoGalUp(e.target.files[0])}
                    />
                </div>
            </div>
        </Dashboard>
    )
}

export default InnovacionViewPrivate
