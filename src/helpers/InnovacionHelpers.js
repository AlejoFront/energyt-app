import { db } from '../firebase/firebase'

export const getInnovacion = async () => {
    let innovacion = {}
    const data = await db.collection('innovacion').limit(1).get()
    data.forEach(query => innovacion = { id: query.id, ...query.data() });
    return innovacion
}