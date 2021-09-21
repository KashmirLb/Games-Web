import * as firebase from 'firebase/app'
import * as all from 'firebase/auth'
import { getFirestore, collection, doc, getDoc, setDoc} from 'firebase/firestore'
import "dotenv/config"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
}
const app = firebase.initializeApp(firebaseConfig);

export const authId = all.getAuth(app)
export const auth = all;
const db = getFirestore()

auth.setPersistence(authId, auth.browserSessionPersistence)
    .then(()=> auth.signInWithEmailAndPassword)
    .catch(error => console.log(error))

export function checkCode(code){

    if (code===process.env.REACT_APP_REGISTRATION_CODE){
        return true
    }
    return false
}

export async function getFireData(user){

    try{
        const firstUser = doc(collection(db, 'users'), user)
        const snap = await getDoc(firstUser)
        console.log("obtaining")
        return snap.data().score
    }
    catch{}
}

export async function newFireData(user){

    try{
        const newUser = doc(collection(db, 'users'), user)
        await setDoc((newUser), 
        {
            score: 0
        })
        console.log("OK!")
    }
    catch{
        console.log("uh-oh")
    }
}

export async function updateFireData(user, score){

    try{
        const newUser = doc(collection(db, 'users'), user)
        await setDoc((newUser), 
        {
            score: score
        })
        console.log("User score: "+ score)
    }
    catch{
        console.log("uh-oh")
    }
}
export default app