import { db } from '../firebase/firebase'

export const getNuestrosClients = async () => {
    const clients = []
    const data = await db.collection('nuestrosClientes').get()
    data.forEach(query => clients.push({ id: query.id, ...query.data() }));
    return clients
}