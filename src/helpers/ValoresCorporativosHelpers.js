import { db, storage } from '../firebase/firebase'

export const getValoresCorp = async () => {
    let valores = []
    const data = await db.collection('valoresCorporativos').get();
    data.forEach(query => valores.push({id: query.id, ...query.data()}));
    return valores
}

const selectedImg = async (image, nameFile) => {
    if(image.type === undefined){
        console.log('Error')
        return
    }
    if (image.type === 'image/jpeg' || image.type === 'image/png') {
        try {
            const imageRef = await storage.ref().child('valoresCorp').child(nameFile.toString())
            await imageRef.put(image)
            const imageURL = await imageRef.getDownloadURL();
            return imageURL
        } catch (error) {
            console.log(error)
        }
    }
}

export const addValoresCorporativos = async (titulo, descripcion,img) => {
    const url = await selectedImg(img, titulo);
    return await db.collection('valoresCorporativos').add({
        titulo: titulo,
        descripcion: descripcion,
        img: url
    })
}

export const updateValoresCorporativos = async (id, titulo, descripcion, img) => {
    let urlImg;
    if (typeof(img) === 'object' && img !== null) {
        urlImg = await selectedImg(img,titulo)
    }else{
        urlImg = img;
    }

    return await db.collection('valoresCorporativos').doc(id)
    .update({
        titulo: titulo,
        img: urlImg,
        descripcion: descripcion
    })
}