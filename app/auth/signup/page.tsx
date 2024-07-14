"use client"

import axios from "axios";
import { useState } from "react";

export default function Home() {

const [email , setEmail] = useState("");
const [password , setPassword] = useState("");


    return (
      <div className="flex flex-col justify-center h-screen">
        <div className=" flex justify-center text "> 
          <text className="h-7 w-15 ">Sign tf up</text>
        </div>
        <div className=" flex justify-center p-3 m-2 border-r-gray-900">
        <input onChange={(e)=>{setEmail(e.target.value)}} className=" rounded-md border-r-gray-900" type="text" placeholder="Email"></input>
        </div>
        <div className="flex justify-center p-3 m-2 rounded-lg">
        <input onChange={(e)=> {setPassword(e.target.value)}} className="rounded-md" type="password" placeholder="password"></input>
        </div>
        <div className="flex justify-center">
          <button onClick={(e) =>{
              axios.post("http://localhost:3000/api/user" , {
                email,
                password
              })
          }} className=" mt-2 h-8 w-16 bg-purple-500 rounded-md text-white">Signup</button>
        </div>
      </div>
    );  
  }
  