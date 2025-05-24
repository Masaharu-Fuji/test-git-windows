import { collection, getDocs } from "firebase/firestore";

// Cloud Firestore 取得データの表示
export const fetchHistoryData = async (db) => {
  let tags = "";

  // reports collections データ取得
  const querySnapshot = await getDocs(collection(db, "reports"))

  // データをテーブル表形式に合わせてHTML挿入
  querySnapshot.forEach((doc) => {
    const data = doc.data();
    console.log(`${doc.id} => ${data}`);
    const {date, name, work, comment} = data;
    tags += `<tr><td>${date}</td><td>${name}</td><td>${work}</td><td>${comment}</td></tr>`;
  });
  document.getElementById("js-history").innerHTML = tags;
}