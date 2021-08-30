import React from 'react'
import { useSelector } from 'react-redux'
import Dashboard from '../../components/layout/Dashboard'
import PoliticasItemUpdate from '../../components/sobreNosotros/PoliticasItemUpdate'

const PoliticasViewPrivate = () => {
    const {politicas} = useSelector(state => state.politicas)
    return (
        <Dashboard>
            <div className='dashboard__cont'>
                {
                    politicas.map((politica, index) => (
                        <PoliticasItemUpdate 
                            key={index}
                            id={politica.id}
                            title={politica.title}
                            descripcion={politica.descripcion}
                            order={politica.order}
                            nameClass={politica.nameClass}
                        />
                    ))
                }
            </div>
        </Dashboard>
    )
}

export default PoliticasViewPrivate
