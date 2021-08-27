const QUE_HACEMOS_LOAD = '[NCL] QUE_HACEMOS LOAD'
const PROYECTOS_LOAD = '[NCL] PROYECTOS LOAD'
const initialStateQueHacemos = { queHacemos: [] }
const initialStateProjects = { projects: [] }

export const startLoadQueHacemos = queHacemos => ({ type: QUE_HACEMOS_LOAD, payload: queHacemos });
export const startLoadProjects = projects => ({ type: PROYECTOS_LOAD, payload: projects });

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
        default:
            return state;
    }
}

export { QueHacemosReducer, ProjectsReducer }