import { db } from '../firebase/firebase'

export const getFooter = async () => {
    const footer = []
    const data = await db.collection('footer').get()
    data.forEach(query => footer.push({ id: query.id, ...query.data() }));
    return footer
}