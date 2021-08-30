import { db, storage } from '../firebase/firebase'

export const getQueHacemos = async () => {
    const queHacemos = []
    const data = await db.collection('queHacemos').get()
    data.forEach(query => queHacemos.push( { id: query.id, ...query.data() }));
    return queHacemos
}

export const addQueHacemos = async (descripcion,nombre) => {
    return await db.collection('queHacemos').add({
        descripcion: descripcion,
        icono: null,
        nombre: nombre
    })
}

const selectedImgQueHacemos = async (image, nameFile) => {
    if(image.type === undefined){
        console.log('Error')
        return
    }
    if (image.type === 'image/jpeg' || image.type === 'image/png') {
        try {
            const imageRef = await storage.ref().child('queHacemos').child(nameFile)
            await imageRef.put(image)
            const imageURL = await imageRef.getDownloadURL();
            return imageURL
        } catch (error) {
            console.log(error)
        }
    }
}

export const updateQueHacemos = async (id, icon,nombre, descripcion) => {
    console.log(id, icon,nombre, descripcion)
    let urlImg = null;
    if (typeof(icon) === 'object' && icon !== null) {
        urlImg = await selectedImgQueHacemos(icon,nombre)
    }else{
        urlImg = icon;
    }
    return await db.collection('queHacemos').doc(id).update({
        descripcion: descripcion,
        nombre: nombre,
        icono: urlImg
    })
}

export const getProyectos = async () => {
    const proyectos = []
    const data = await db.collection('proyectos').get()
    data.forEach(query => proyectos.push( { id: query.id, ...query.data() }));
    return proyectos
}



const selectedImg = async (image, nameFile) => {
    if(image.type === undefined){
        console.log('Error')
        return
    }
    if (image.type === 'image/jpeg' || image.type === 'image/png') {
        try {
            const imageRef = await storage.ref().child('projects').child(nameFile)
            await imageRef.put(image)
            const imageURL = await imageRef.getDownloadURL();
            return imageURL
        } catch (error) {
            console.log(error)
        }
    }
}

export const addProject = async (img, nombre, descripcion_corta,descripcion_larga) => {
    let urlImg;
    if (typeof(img) === 'object' && img !== null) {
        urlImg = await selectedImg(img,nombre)
    }else{
        urlImg = img;
    }
    return await db.collection('proyectos').add({
        nombre: nombre,
        img: urlImg,
        descripcion_corta: descripcion_corta,
        descripcion_larga: descripcion_larga
    })
}

export const updateProject = async (id, img, nombre, descripcion_corta,descripcion_larga) => {
    let urlImg;
    if (typeof(img) === 'object' && img !== null) {
        urlImg = await selectedImg(img,id)
    }else{
        urlImg = img;
    }
    return await db.collection('proyectos').doc(id).update({
        nombre: nombre,
        img: urlImg,
        descripcion_corta: descripcion_corta,
        descripcion_larga: descripcion_larga
    })
}