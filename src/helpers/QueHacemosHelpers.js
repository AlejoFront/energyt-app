import { db } from '../firebase/firebase'

export const getQueHacemos = async () => {
    const queHacemos = []
    const data = await db.collection('queHacemos').get()
    data.forEach(query => queHacemos.push( { id: query.id, ...query.data() }));
    return queHacemos
}

export const getProyectos = async () => {
    const proyectos = []
    const data = await db.collection('proyectos').get()
    data.forEach(query => proyectos.push( { id: query.id, ...query.data() }));
    return proyectos
}