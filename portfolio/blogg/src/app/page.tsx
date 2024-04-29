import Image from "next/image";
import styles from "./page.module.css";
import HeroPage from "@/sections/Hero";
import PostsPage from "@/sections/Posts";

export default function Home() {
  return (
    <main id="main">
      <HeroPage />
      <PostsPage />
    </main>
  );
}
