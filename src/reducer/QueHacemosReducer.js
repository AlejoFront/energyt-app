const QUE_HACEMOS_LOAD = '[NCL] QUE_HACEMOS LOAD'
const PROYECTOS_LOAD = '[NCL] PROYECTOS LOAD'
const PROYECTOS_UPDATE = '[NCL] PROYECTOS UPDATE'
const PROYECTOS_ADD = '[NCL] PROYECTOS ADD'
const initialStateQueHacemos = { queHacemos: [] }
const initialStateProjects = { projects: [] }

export const startLoadQueHacemos = queHacemos => ({ type: QUE_HACEMOS_LOAD, payload: queHacemos });
export const startLoadProjects = projects => ({ type: PROYECTOS_LOAD, payload: projects });
export const startUpdateProject = (id, img, nombre, descripcion_corta,descripcion_larga) => ({
    type: PROYECTOS_UPDATE,
    id,
    payload: {
        id,
        img,
        nombre,
        descripcion_corta,
        descripcion_larga
    }
});

export const startAddProject = (id, img, nombre, descripcion_corta,descripcion_larga) => ({
    type: PROYECTOS_ADD,
    payload:{
        id,
        img,
        nombre,
        descripcion_corta,
        descripcion_larga
    }
})

const QueHacemosReducer = (state = initialStateQueHacemos, action) => {
    switch (action.type) {
        case QUE_HACEMOS_LOAD:
            return {
                ...state,
                queHacemos: [...action.payload]
            }
        default:
            return state;
    }
}

const ProjectsReducer = (state = initialStateProjects, action) => {
    switch (action.type) {
        case PROYECTOS_LOAD:
            return {
                ...state,
                projects: [...action.payload]
            }
        case PROYECTOS_ADD:
            return {
                ...state,
                projects: [action.payload, ...state.projects]
            }
        case PROYECTOS_UPDATE:
            return {
                ...state,
                projects: state.projects.map(
                    project => project.id === action.id
                    ? action.payload
                    :project
                
                )
            }
        default:
            return state;
    }
}

export { QueHacemosReducer, ProjectsReducer }