import firebase from "./firebase_app";
import "firebase/firestore";

async function loadShoppingList(listName) {
  const collection = firebase.firestore().collection("shopping-lists");
  const shoppingList = await collection.doc(listName).get();
  const data = shoppingList.data();
  return data ? data.items : [];
}

async function saveShoppingList(listName, items) {
  const collection = firebase.firestore().collection("shopping-lists");
  return collection.doc(listName).set({ items: items || [] });
}

export { loadShoppingList, saveShoppingList };
