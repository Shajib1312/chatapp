import React from "react";
import { auth } from "../firebase";
const style = {
  button: `bg-gray-200 px-4 py-2 hover:bg-stone-600 hover:text-white transition duration-150 ease-out hover:ease-in`,
};
export const LogOut = () => {
  const signOut = () => {
    signOut(auth);
  };
  return (
    <button onClick={() => auth.signOut()} className={style.button}>
      LogOut
    </button>
  );
};
