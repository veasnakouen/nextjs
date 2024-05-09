"use client";
import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // pass the name of the credential provider in the auth\[...nextauth]\route.js
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res.error) {
        setError("invalid credentials");
        return;
      }
      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-8 border-green-600">
        <h1 className="text-xl font-bold my-4">Enter the details</h1>
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="enter email"
            className=""
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="enter password"
            className=""
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            Login
          </button>
          {error && (
            <div className="bg-red-500 rounded-md text-white w-fit text-sm py-1 px-3 mt-2">
              {error}
            </div>
          )}
          <Link href="/register" className="text-sm mt-3 text-right">
            {"Don't have account"} <span className="underline">Register</span>{" "}
          </Link>
        </form>
      </div>
    </div>
  );
}
