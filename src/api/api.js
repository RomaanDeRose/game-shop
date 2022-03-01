import { getDocs, collection } from "firebase/firestore";
import { DB } from "../firebase";

const promise = new Promise((resolve, reject) => {
  const itemColecction = collection(DB, "items");
  getDocs(itemColecction)
    .then((snapshot) => {
      const products = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      resolve(products);
    })
    .catch((err) => {
      console.log(err);
    });
});

const getItems = () => promise;

export { getItems };
