import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { ICON_UPLOAD } from '../../directories/images';
import { updateValoresCorporativos } from '../../helpers/ValoresCorporativosHelpers';
import {startUpdateValores} from '../../reducer/ValoresReducer'
import Loading from '../loading/Loading';
const ItemValor = ({data}) => {
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false)
    const [error, setError] = useState(false)
    const {id, titulo, descripcion, img} = data;
    const [photo, setPhoto] = useState(img);
    const [newTitulo, setnewTitulo] = useState(titulo)
    const [newDescripcion, setnewDescripcion] = useState(descripcion)
    const [loading, setLoading] = useState(false)
  
    const saveUpdateValor = () => {
        if (newTitulo === '' || newDescripcion === '') {
            setError(true)
            return
        }else {
            setError(false)
        }
        setLoading(true);
        updateValoresCorporativos(id,newTitulo,newDescripcion,photo)
        .then(() => {
            let imgUrl
            if (typeof(photo) === 'object') {
                imgUrl = URL.createObjectURL(photo);
            }else {
                imgUrl = photo
            }
            dispatch(startUpdateValores(id,imgUrl,newDescripcion,newTitulo));
            setLoading(false);
            setEdit(false)
        })
        .catch(e => console.log(e))
    }
    return (
        <tr>
            <td>
                {
                    edit
                    ? <input type='text' value={newTitulo} onChange={(e) => setnewTitulo(e.target.value)} />
                    : titulo
                }
            </td>
            <td>
                {
                    edit
                    ? <textarea name='descripcion' value={newDescripcion} onChange={(e) => setnewDescripcion(e.target.value)}  />
                    :descripcion
                }
            </td>
            <td>
                {
                    edit
                    ?
                    <>
                        <label htmlFor='upload_val_upda'>
                        <img src={ICON_UPLOAD} alt='icon' />
                        {  error && photo === '' && <span className='err'>seleccione una imagen</span> }
                        </label>
                        <input
                            type='file'
                            name='photo'
                            id='upload_val_upda'
                            onChange={(e) => setPhoto(e.target.files[0])}
                        />
                    </>
                    :<img src={img} alt='imagen valor' />
                }
            </td>
            <td>
                {
                    edit
                    ?
                    <>
                    {
                        loading
                        ? <Loading />
                        :<button className='btn btn_success' onClick={saveUpdateValor}>Guardar</button>
                    }
                        
                        <button className='btn btn_danger' onClick={() => setEdit(!edit)}>Cancelar</button>
                    </>
                    :
                        <button className='btn btn_info' onClick={() => setEdit(!edit)}>Editar</button>
                }
                
                
            </td>
        </tr>
    )
}

export default ItemValor
