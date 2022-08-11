import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { auth, db } from "../firebase";
const style = {
  form: `h-14 w-full max-w-[728] flex absolute bottom-0 text-xl`,
  input: `text-xl w-full p-3 bg-gray-900 text-white outline-none border-none`,
  button: `w-[20%] text-white bg-blue-700`,
};

const SendMessage = ({ scroll }) => {
  const [input, setInput] = useState("");
  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Write a Message to send");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      timestamp: serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <form onSubmit={sendMessage} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className={style.input}
        placeholder="Massage"
      />
      <button className={style.button} type="submit">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
