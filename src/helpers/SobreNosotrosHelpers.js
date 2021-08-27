import { db } from '../firebase/firebase'

export const getMision = async () => {
    let mision = {}
    const data = await db.collection('mision').limit(1).get()
    data.forEach(query => mision = { id: query.id, ...query.data() });
    return mision
}

export const getVision = async () => {
    let vision = {}
    const data = await db.collection('vision').limit(1).get()
    data.forEach(query => vision = { id: query.id, ...query.data() });
    return vision
}

export const getPoliticas = async () => {
    const politicas = []
    const data = await db.collection('politicas').orderBy('order', 'asc').get()
    data.forEach(query =>  politicas.push({ id: query.id, ...query.data() }));
    return politicas
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