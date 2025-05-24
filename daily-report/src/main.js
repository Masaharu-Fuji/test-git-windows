// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { fetchHistoryData } from "./my-modules/fetch-history-data";
import { submitData } from "./my-modules/submit-data";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUl-T9Phq-vBeeGd9wVIpMOThVg7JK5TA",
  authDomain: "daily-report-87de7.firebaseapp.com",
  projectId: "daily-report-87de7",
  storageBucket: "daily-report-87de7.firebasestorage.app",
  messagingSenderId: "732030484041",
  appId: "1:732030484041:web:ea9c50a778e54578430998"
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