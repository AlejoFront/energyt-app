import React from 'react'

const Dashboard = ({children}) => {
    return (
        <div className='dasboard_conteiner'>
            <div className='header__dashboard'>
                menu
            </div>
            <div className='bar__dashboard'>
                barra superior
            </div>
            <main className='main__dashboard'>
                {children}
            </main>
        </div>
    )
}

export default Dashboard
