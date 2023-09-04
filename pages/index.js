'use client'
import Image from "next/image";
import "tailwindcss/tailwind.css";
import '../app/globals.css'
import { useSession, signIn, signOut } from "next-auth/react"
import { useEffect } from "react";
import { useRouter } from "next/router";
export default function Home() {
    const { data: session, status } = useSession()
    const router=useRouter();
    useEffect(()=>{
      console.log(session)
    },[session])
    if(session){
       router.push('/dashboard')
    }
    return (
      <div className="w-screen bg-primary-white text-black h-screen flex flex-row">
        <div className="leftDivHome w-1/2 bg-primary text-white h-screen flex justify-center items-center text-6xl font-bold">
          Board.
        </div>
        <div className="w-1/2  text-black h-screen flex justify-center items-center">
          <div className="w-1/2 h-3/4  text-black flex flex-col justify-center p-4">
            <div className="text-2xl font-bold">Sign In</div>
            <div className=" text-sm">Sign in to your account</div>
            <div className="flex flex-row my-5">
              <button className="bg-white px-5 py-2 text-xs rounded mr-2 w-1/2 flex justify-center" onClick={signIn}>
                Sign with google{" "}
              </button>
              <button className="bg-white px-5 py-2 text-xs rounded flex-1 flex justify-center">
                Sign in with Apple
              </button>
            </div>
            <div className="bg-white rounded p-5">
              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address </label>
                <input type="text" value="" name="email" className="bg-gray-200 focus:bg-gray-300 rounded p-1 my-2"/>
              </div>
              <div className="flex flex-col ">
                <label htmlFor="password" className="text-sm font-semibold text-gray-700">Password</label>
                <input type="password " name="password " value="" className="bg-gray-200 focus:bg-gray-300 rounded p-1 my-2" />
              </div>
              <p>Forgot password?</p>
              <button className="bg-black text-white w-full bg-primary rounded p-2 text-sm font-bold my-2">Sign In</button>
            </div>
  
            <p className="flex justify-center flex-1 items-center text-xs font-extralight">Don't have an account? <span className="text-blue-600 mx-2">register here</span>  </p>
          </div>
        </div>
      </div>
    );
  }