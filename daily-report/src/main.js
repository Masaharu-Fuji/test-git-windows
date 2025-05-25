// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { fetchHistoryData } from "./my-modules/fetch-history-data";
import { submitData } from "./my-modules/submit-data";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// vite config environment
const viteEnv = import.meta.env;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: viteEnv.VITE_API_KEY,
  authDomain: viteEnv.VITE_AUTH_DOMAIN,
  projectId: viteEnv.VITE_PROJECT_ID,
  storageBucket: viteEnv.VITE_STORAGE_BUCKET,
  messagingSenderId: viteEnv.VITE_MESSAGING_SENDER_ID,
  appId: viteEnv.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Cloud Firestore 初期化
const db = getFirestore(app);

// Cloud Firestore 取得データの表示
if (document.getElementById("js-history")) {
  fetchHistoryData(db);
}

// Cloud Firestore データ送信
if (document.getElementById("js-form")) {
  document.getElementById("js-form").addEventListener("submit", (e) => {
    submitData(e, db);
  });
}
