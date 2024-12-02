import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase.config";

export function createUser(e, p) {
  return createUserWithEmailAndPassword(auth, e, p);
}
export function updateUser(obj) {
  return updateProfile(auth.currentUser, obj);
}
