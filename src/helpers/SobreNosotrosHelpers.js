import { db } from '../firebase/firebase'

export const getMision = async () => {
    let mision = {}
    const data = await db.collection('mision').limit(1).get()
    data.forEach(query => mision = { id: query.id, ...query.data() });
    return mision
}

export const UpdateMision = async (id, mision) => {
    return await db.collection('mision').doc(id).update({ descripcion: mision })
}

export const getVision = async () => {
    let vision = {}
    const data = await db.collection('vision').limit(1).get()
    data.forEach(query => vision = { id: query.id, ...query.data() });
    return vision
}

export const UpdateVision = async (id, vision) => {
    return await db.collection('vision').doc(id).update({ descripcion: vision })
}

export const getPoliticas = async () => {
    const politicas = []
    const data = await db.collection('politicas').orderBy('order', 'asc').get()
    data.forEach(query =>  politicas.push({ id: query.id, ...query.data() }));
    return politicas
}

export const UpdatePolitica = async (id, descripcion) => {
    return await db.collection('politicas').doc(id).update({ descripcion: descripcion })
}

export const addEstadosFinancieros = async (anio, link) => {
    return await db.collection('estadosFinancieros').add({
        anio: anio,
        link: link
    })
}

export const updateEstadosFinancieros = async (id, anio, link) => {
    return await db.collection('estadosFinancieros').doc(id).update({
        anio: anio,
        link: link
    })
}

export const getEstadosFinancieros = async () => {
    const estadosFinancieros = []
    const data = await db.collection('estadosFinancieros').orderBy('anio', 'desc').limit(4).get()
    data.forEach(query =>  estadosFinancieros.push({ id: query.id, ...query.data() }));
    return estadosFinancieros
}

export const getProteccionDatos = async () => {
    let proteccionDatos = {}
    const data = await db.collection('proteccionDeDatos').limit(1).get()
    data.forEach(query => proteccionDatos = { id: query.id, ...query.data() });
    return proteccionDatos
}

export const upProteccionDatos = async (id, link, descripcion) => {
    return await db.collection('proteccionDeDatos').doc(id)
    .update({
        descripcion: descripcion,
        link: link
    })
}