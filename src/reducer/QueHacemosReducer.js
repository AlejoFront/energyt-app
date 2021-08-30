const QUE_HACEMOS_LOAD = '[NCL] QUE_HACEMOS LOAD'
const QUE_HACEMOS_ADD = '[NCL] QUE_HACEMOS ADD'
const QUE_HACEMOS_UPDATE = '[NCL] QUE_HACEMOS UPDATE'
const PROYECTOS_LOAD = '[NCL] PROYECTOS LOAD'
const PROYECTOS_UPDATE = '[NCL] PROYECTOS UPDATE'
const PROYECTOS_ADD = '[NCL] PROYECTOS ADD'
const initialStateQueHacemos = { queHacemos: [] }
const initialStateProjects = { projects: [] }

export const startLoadQueHacemos = queHacemos => ({ type: QUE_HACEMOS_LOAD, payload: queHacemos });
export const startAddQueHacemos = (id, descripcion, icono, nombre) => ({
    type: QUE_HACEMOS_ADD,
    payload: {
        id, descripcion, icono, nombre
    }
})
export const startUpdateQueHacemos = (id, descripcion, icono, nombre) => ({
    type: QUE_HACEMOS_UPDATE,
    id,
    payload: {
        id, descripcion, icono , nombre
    }
})
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
        case QUE_HACEMOS_ADD:
            return {
                ...state,
                queHacemos: [action.payload, ...state.queHacemos]
            }
        case QUE_HACEMOS_UPDATE:
            return {
                ...state,
                queHacemos: state.queHacemos.map(
                    e => e.id === action.id
                    ? action.payload
                    : e
                )
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