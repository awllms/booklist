import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAsGhn_jcLJKl3iYoapykz-RlO7HCtb6lw",
  authDomain: "booklist-a5340.firebaseapp.com",
  databaseURL: "https://booklist-a5340.firebaseio.com",
  projectId: "booklist-a5340",
  storageBucket: "booklist-a5340.appspot.com",
  messagingSenderId: "281234462009",
  appId: "1:281234462009:web:f0e3201b2d8b9027fb84e8",
  measurementId: "G-QG6HJXT43D"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj);
  })
  return await batch.commit();
};

export const addCollectionAndDocumentsFromMap = async (collectionKey, objectToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  Object.keys(objectToAdd).forEach(key => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, { [key]: objectToAdd[key] })
  });
  return await batch.commit();
};

export const convertProductsSnapshot = products => {
  const transformedCollection = products.docs.map(doc => {
    return {
      routeName: 'products/' + encodeURIComponent(doc.data().title
                                                            .replace(/[\s]/g, '-')
                                                            .replace(/[,*]/g, '')
                                                            .toLowerCase()),
      id: doc.id,
      ...doc.data()
    }
  });
  return transformedCollection;
};

export const convertCategoriesSnapshotToMap = categories => {
  const transformedCollection = categories.docs.map(doc => doc.data());
  return transformedCollection.reduce((acc, collection) => {
    Object.keys(collection).forEach(key => {
      acc[key] = collection[key];
    })
    return acc;
  },{});
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }
  return userRef;
};

export const updateUserProfileDocument = async (userAuth, updateData) => {
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(snapShot.exists) {
    try {
      if ('email' in updateData) {
        try {
          const user = auth.currentUser;
          if (user.providerData[0].providerId === 'google.com') {
            return {
              error: `Email cannot be updated on accounts using 
              sign in with Google.`
            };
          }
          const credential = firebase.auth.EmailAuthProvider.credential(
            user.email, 
            updateData.password
          );

          await user.reauthenticateWithCredential(credential);
          await user.updateEmail(updateData['email']);
        } catch (error) {
          console.log('Error updating user', error.message);
          return  {error: error.message};
        }
      }
      if (updateData.password) delete updateData.password;
      await userRef.update({
        ...updateData
      });
    } catch (error) {
      console.log('Error updating user', error.message);
    }
  }
  return userRef;
};

export const updateUserPassword = async (userAuth, updateData) => {
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if(snapShot.exists) {
    try {
      const user = auth.currentUser;
      if (user.providerData[0].providerId === 'google.com') {
        return {
          error: `Passwords cannot be updated on accounts using 
          sign in with Google. You can update your password on 
          your Google account.`
        };
      }
      const credential = firebase.auth.EmailAuthProvider.credential(
        user.email, 
        updateData.oldPassword
      );

      await user.reauthenticateWithCredential(credential);
      await user.updatePassword(updateData['newPassword']);
    } catch (error) {
      console.log('Error updating user', error.message);
      return  {error: 'The password is invalid.'};
    }
  }
  return userRef;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  })
};

export const getUserOrders = currentUserId => {
  return (firestore
    .collection('orders')
    .where('userId', '==', currentUserId)
    .orderBy('createdAt', 'desc')
    .get());
};

export default firebase;