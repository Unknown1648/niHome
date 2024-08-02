import { db } from "../config/firebase.js";
import {collection, query, getDocs} from 'firebase/firestore';

export const getAllHouses = async (req, res) => {

    const housesRef = collection(db, "houses");
    const q = query(housesRef)
    try {
        const documentSnapshot = await getDocs(q);
        const houses = documentSnapshot.docs.map(doc => doc.data());

        if(!houses) {
            return res.status(404).json({
                success: false,
                body: {
                    data: null,
                    error: "no houses found"
                }
            })
        };

        res.status(200).json({
            success: true,
            body: {
                data: houses,
                error: null,
            }
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            body: {
                data: null,
                error: error.message
            }
        })
    }
}