"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    //avoid reload the page
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All field are necessary.");
      return;
    }
    try {
      //this code is to check user exist or not
      const userExist = await fetch("/api/userexists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await userExist.json();

      if (user) {
        setError("User already existed!.");
        return;
      }

      const res = await fetch(`/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration", error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg  p-5 rounded-lg border-t-8 border-green-600">
        <h1 className="text-xl font-bold my-4">Enter the details</h1>
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Enter Full Name"
            className=""
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter Email"
            className=""
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter password"
            className=""
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            Register
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 rounded-md px-3 mt-2">
              {error}
            </div>
          )}
          <Link href="/login" className="text-sm mt-3 text-right">
            {"Already have an account"} <span className="underline">Login</span>{" "}
          </Link>
        </form>
      </div>
    </div>
  );
}
