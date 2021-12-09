import { doc, getDoc, getFirestore, collection, getDocs, query, where } from 'firebase/firestore';

export async function getItems(id) {
  let collectionData;
  const db = getFirestore();
  const itemCollection = collection(db, "items");
  if (id){
    const q = query(itemCollection, where('categoryId', '==', id));
    collectionData = getDocs(q).then((snapshot) => {
      return Promise.all(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  })
  }else {
    collectionData = getDocs(itemCollection).then((snapshot) => {
      return Promise.all(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    })
  }
  return collectionData;
}

export async function getCategories() {
  const db = getFirestore();
  const itemCollection = collection(db, "categories");
  const categories = getDocs(itemCollection).then((snapshot) => {
    return Promise.all(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  })
  return categories;
}

export async function getItem(id) {
  let item
  const db = getFirestore();
  const itemRef = doc(db, "items", id);

  item = getDoc(itemRef).then((snapshot) => {
    if(snapshot.exists()){
      return {id: snapshot.id, ...snapshot.data()}
    }
  })
  return item
}
