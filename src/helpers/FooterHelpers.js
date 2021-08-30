import { db } from '../firebase/firebase'

export const getFooter = async () => {
    let footer = {}
    const data = await db.collection('footer').get()
    data.forEach(query => footer = { id: query.id, ...query.data() });
    return footer
}

export const updateFooter = async (id,red_instagram,red_Facebook, red_youtube,direccion,movil,horario,email,telefono) => {
    return await db.collection('footer')
    .doc(id).update({
        red_instagram: red_instagram,
        red_Facebook: red_Facebook,
        red_youtube: red_youtube,
        direccion: direccion,
        movil: movil,
        horario: horario,
        email: email,
        telefono: telefono
    })
}