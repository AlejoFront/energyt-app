import React, { useState } from 'react'
import { ICON_UPLOAD } from '../../directories/images';
import Dashboard from '../../components/layout/Dashboard';
import { useForm } from '../../hooks/useForm';
import Loading from '../../components/loading/Loading'
import { addValoresCorporativos} from '../../helpers/ValoresCorporativosHelpers';
import { useDispatch, useSelector } from 'react-redux';
import ItemValor from '../../components/valoresCorp/ItemValor';
import { startAddValores } from '../../reducer/ValoresReducer';
const ValoresCorporativos = () => {
    const dispatch = useDispatch();
    const {valores} = useSelector(state => state.valores)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [values, handleInputChange,reset] = useForm({
        photo: '', descripcion: '', nombre: ''
    });
    const {photo, descripcion, nombre} = values;

    const handleAddvalores = () => {
        
        if (photo === '' || descripcion === '') {
            setError(true)
            return
        }else {
            setError(false)
        }
        let imgUrl = URL.createObjectURL(photo);
        setLoading(true);
        addValoresCorporativos(nombre,descripcion,photo)
        .then(response => {
            dispatch(startAddValores(response.id,imgUrl,descripcion,nombre))
            setLoading(false);
            reset();
        })
        .catch(e => console.log(e))
    }

    return (
        <Dashboard>
            <div className='dashboard__cont'>
                <h2 className='titulo' >Valores Corporativos</h2>
                <div className='container__valores_corp'>
                    <div className='valores_add_form'>
                        <div className='form_add_group'>
                            <label>Nombre</label>
                            <input  type='text' 
                                    placeholder='Nombre del valor corporativo' 
                                    value={nombre} name='nombre' 
                                    onChange={handleInputChange} 
                            />
                        </div>
                        <div className='form_add_group'>
                                <label htmlFor='upload_val' >
                                    <img src={ICON_UPLOAD} alt='icon' />
                                    {  error && photo === '' && <span className='err'>* debes seleccionar una imagen</span> }
                                </label>
                                <input
                                    type='file'
                                    name='photo'
                                    id='upload_val'
                                    onChange={handleInputChange}
                                />
                        </div>
                        <div className='form_add_group'>
                            <label>Descripción</label>
                            <textarea name='descripcion' value={descripcion} 
                                onChange={handleInputChange}  />
                        </div>
                        <div className='form_btn_group'>
                            {
                                loading 
                                ? <Loading />
                                : <button onClick={handleAddvalores} className='btn_success' >Guardar</button>
                            }
                        </div>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>Valor Corporativo</th>
                                <th>Mensaje</th>
                                <th>Imagen</th>
                                <th>Editar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                valores.map(data => (
                                    <ItemValor 
                                        key={data.id}
                                        data={data}
                                    />
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </Dashboard>
    )
}

export default ValoresCorporativos
