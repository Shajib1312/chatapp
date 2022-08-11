import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

import { db } from "../firebase";
import { Massage } from "./Massage";
import SendMessage from "./SendMessage";
const style = {
  main: `flex flex-col p-[10px] relative`,
};
export const Chat = () => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe;
  }, []);
  return (
    <>
      <main className={style.main}>
        {messages &&
          messages.map((message) => (
            <Massage key={message.id} message={message} />
          ))}
      </main>
      <SendMessage scroll={scroll} />
      {/* send massage components */}
      <span ref={scroll}></span>
    </>
  );
};
