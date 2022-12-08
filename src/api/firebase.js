import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, child, get } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

//firebase 초기화
const app = initializeApp(firebaseConfig);
// Google 공급자 개체를 사용하여 Firebase에 인증합니다.
// 팝업 창을 열거나 로그인 페이지로 리디렉션하여 사용자에게 Google 계정으로
// 로그인하도록 요청할 수 있습니다. 리디렉션 방법은 모바일 장치에서 선호됩니다
const auth = getAuth();
// google 공급자 개체의 인스턴스 만들기
const provider = new GoogleAuthProvider();
// firebase 실시간 데이터베이스 사용, admin관련 작업 전에 필요
const database = getDatabase(app);

// 로그인
// export async function login() {
//   return signInWithPopup(auth, provider)
//     .then((result) => {
//       const user = result.user;
//       return user; // 로그인 시 사용자 객체 리턴
//     })
//     .catch((error) => {
//       console.error("error", error);
//     });
// }
export function login() {
  signInWithPopup(auth, provider);
}

// 로그아웃
// export async function logout() {
//   const auth = getAuth();
//   return signOut(auth).then(() => {
//     return null;
//   });
// }
export function logout() {
  signOut(auth);
}

// 인증 상태 관찰자 설정 및 사용자 데이터 가져오기
export function onUserStateChange(callback) {
  const auth = getAuth();
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
}

// firebase db에 있는 데이터 한번 읽어오기
async function adminUser(user) {
  return get(ref(database, "admins")) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        // console.log('1', snapshot.val());
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
}
