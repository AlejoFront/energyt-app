import { arrayAdd, db, storage } from '../firebase/firebase'

export const getInnovacion = async () => {
    let innovacion = {}
    const data = await db.collection('innovacion').limit(1).get()
    data.forEach(query => innovacion = { id: query.id, ...query.data() });
    return innovacion
}

const selectedImg = async (image, nameFile) => {
    if(image.type === undefined){
        console.log('Error')
        return
    }
    if (image.type === 'image/jpeg' || image.type === 'image/png') {
        try {
            const imageRef = await storage.ref().child('innovacion').child('galeria').child(nameFile.toString())
            await imageRef.put(image)
            const imageURL = await imageRef.getDownloadURL();
            return imageURL
        } catch (error) {
            console.log(error)
        }
    }
}

export const updateInnovacion = async (id, descripcion, fotoPrincipal, title) => {
    let urlImg;
    if (typeof(fotoPrincipal) === 'object' && fotoPrincipal !== null) {
        urlImg = await selectedImg(fotoPrincipal,id)
    }else{
        urlImg = fotoPrincipal;
    }
    return await db.collection('innovacion').doc(id)
    .update({descripcion,fotoPrincipal: urlImg,title})
}


export const updateGalInnovacion = async (id, img) => {
    let urlImg;
    if (typeof(img) === 'object' && img !== null) {
        urlImg = await selectedImg(img,img.lastModified)
    }else{
        urlImg = img;
    }
    return await db.collection('innovacion').doc(id)
    .update({galeria: arrayAdd.arrayUnion(urlImg)})
}