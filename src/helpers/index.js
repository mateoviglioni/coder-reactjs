import { getAllProducts } from "../services/products.service";

import { db } from "./../firebase";
import { collection, addDoc } from "firebase/firestore";

/**
 * @param {String} collectionName Nombre de la colección donde se agregarán los items
 */
export async function createProductsFirestore(collectionName) {
    try {

        const response = await getAllProducts();
        const fetchedProducts = response.data.products;

        if (!Array.isArray(fetchedProducts)) {
            throw new Error("La respuesta de la API no es un array.");
        }

        const productsCollection = collection(db, collectionName);

        const addPromises = fetchedProducts.map((product) => {
            delete product.id;
            addDoc(productsCollection, {
                ...product,
                createdAt: new Date(),
            });
        });

        await Promise.all(addPromises);

        console.log(`${fetchedProducts.length} productos añadidos a Firestore.`);
    } catch (err) {
        console.error("Error al obtener o almacenar productos:", err);
    }
}