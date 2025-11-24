"use client";

import Image, { type ImageProps } from "next/image";
import { TextInput } from "@repo/ui/text-input";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {

  const router=useRouter();
  const[route,setRoute]=useState("");
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
      }}
    >
      <div
        style={{
          padding: "30px",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          width: "320px",
        }}
      >
        <h2 style={{ textAlign: "center", margin: 0, fontWeight: 600 ,color: "#1b1d7aff"}}>
          Join a Room
        </h2>

        <TextInput onchange={(e)=>setRoute(e.target.value)} placeholder="Please enter room ID..."></TextInput>
        <button
        onClick={()=>{
          router.push("/chat/"+route)
        }}
          style={{
            padding: "12px",
            borderRadius: "8px",
            backgroundColor: "#000000ff",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontSize: "15px",
            fontWeight: 500,
            transition: "0.2s",
          }}
        >
          Join Room
        </button>
      </div>
    </div>
  );
}
