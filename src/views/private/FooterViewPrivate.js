import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemsFooter from '../../components/footer/ItemsFooter'
import Dashboard from '../../components/layout/Dashboard'
import Loading from '../../components/loading/Loading'
import { updateFooter } from '../../helpers/FooterHelpers'
import { startUpdateFooter } from '../../reducer/FooterReducer'

const FooterViewPrivate = () => {
    const dispatch = useDispatch()
    const footer = useSelector(state => state.footer)
    const [loading, setLoading] = useState(false)
    const [edit, setEdit] = useState(true)
    const [upTelefono, setUpTelefono] = useState(footer.telefono)
    const [upMovil, setUpMovil] = useState(footer.movil)
    const [upDireccion, setUpDireccion] = useState(footer.direccion)
    const [upEmail, setUpEmail] = useState(footer.email)
    const [upFacebook, setUpFacebook] = useState(footer.red_Facebook)
    const [upYoutube, setUpYoutube] = useState(footer.red_youtube)
    const [upInstagram, setUpInstagram] = useState(footer.red_instagram)
    const [upLinkedin, setUpLinkedin] = useState(footer.red_Linkedin)
    const [upHorario, setUpHorario] = useState(footer.horario)

    const handleUpdate = () => {
        setLoading(true)
        updateFooter(footer.id,upInstagram,upFacebook,upYoutube,upLinkedin,upDireccion,upMovil,upHorario,upEmail,upTelefono)
        .then(() => {
            dispatch(startUpdateFooter(footer.id,upInstagram,upFacebook,upYoutube,upLinkedin,upDireccion,upMovil,upHorario,upEmail,upTelefono))
            setLoading(false)
            setEdit(true)
        })
        .catch(e => {
            console.log(e) 
            setLoading(false)
            setEdit(true)
        })
    }
    return (
        <Dashboard>
            <div className='dashboard__cont'>
                <h2 className='titulo' >Contacto</h2>
                <div className='control_Footer'>
                    <ItemsFooter label='Telefono' value={upTelefono} change={setUpTelefono} edit={edit} />
                    <ItemsFooter label='Movil' value={upMovil} change={setUpMovil} edit={edit} />
                    <ItemsFooter label='Dirección' value={upDireccion} change={setUpDireccion} edit={edit} />
                    <ItemsFooter label='Email' value={upEmail} change={setUpEmail} edit={edit} />
                    <ItemsFooter label='Facebook' value={upFacebook} change={setUpFacebook} edit={edit} />
                    <ItemsFooter label='Youtube' value={upYoutube} change={setUpYoutube} edit={edit} />
                    <ItemsFooter label='Instagram' value={upInstagram} change={setUpInstagram} edit={edit} />
                    <ItemsFooter label='Linkedin' value={upLinkedin} change={setUpLinkedin} edit={edit} />
                    <ItemsFooter label='Horario' value={upHorario} change={setUpHorario} edit={edit} />
                    <div className='controls-button'>
                        {
                            edit
                            ?<button type='button' onClick={() => setEdit(!edit)} className='btn_info'>Editar</button>
                            :
                                loading
                                ? <Loading />
                                :
                                    <>
                                        <button 
                                            type='button'
                                            onClick={handleUpdate}
                                            className='btn_success'  
                                        >Guardar</button>
                                        <button 
                                            type='button' 
                                            onClick={() => setEdit(!edit)} 
                                            className='btn_danger'
                                        >Cancelar</button>
                                    </>
                        }
                        
                    </div>
                </div>
            </div>
        </Dashboard>
    )
}

export default FooterViewPrivate
