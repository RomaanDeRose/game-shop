import { getDocs, collection, where, query } from "firebase/firestore";
import { DB } from "../firebase";

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
