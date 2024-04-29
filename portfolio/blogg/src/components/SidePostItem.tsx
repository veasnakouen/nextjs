import React from "react";
import { item } from "@/sections/Posts";
import Link from "next/link";
import { Rock_3D } from "next/font/google";
import { BlockList } from "net";

const SidePostItem = ({ item }: { item: item }) => {
  return (
    <div className="post-entry border-bottom">
      <div className="post-meta">
        <span className="date">{item.category}</span>
        <span className="mx-1">
          <i className="bi bi-dot"></i>
        </span>
        <span>{new Date(item.date).toLocaleDateString("en-US")}</span>
      </div>
      <h2 className="mb-2">
        <Link href={`/postitems/${item._id}`}>{item.title}</Link>
      </h2>
      {item.author && (
        <span className="author d-block mb-3">{item.author}</span>
      )}
    </div>
  );
};

export default SidePostItem;
