import { getDocs, collection, where, query } from "firebase/firestore";
import { DB } from "../firebase";

// const promise = new Promise((resolve, reject) => {
//   const itemCollection = collection(DB, "items");
//   getDocs(itemCollection)
//     .then((snapshot) => {
//       const products = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       resolve(products);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// const getItems = () => promise;

const getItemsByCategory = (category) => {
  const itemCollection = collection(DB, "items");
  if (!category) {
    return getDocs(itemCollection);
  } else {
    const categoryCollection = query(
      itemCollection,
      where("category", "==", category)
    );
    return getDocs(categoryCollection);
  }
};

export { getItemsByCategory };
