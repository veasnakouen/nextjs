"use client";
import React from "react";
import "./trendingPost.css";
import Link from "next/link";

interface item {
  _id: string; //B'course of data's index in mongo use _id(auto)
  title: string;
  img: string;
  category: string;
  date: string;
  type: string;
  brief: string;
  avatar: string;
  author: string;
  top: boolean;
  trending: boolean;
}

const TrendingPost = ({ item, index }: { item: item; index: number }) => {
  return (
    <li className="trending-post">
      <Link href={`/postitems/${item._id}`}>
        <span className="number">{index + 1}</span>
        <h3>{item.title}</h3>
        <span className="author">{item.author}</span>
      </Link>
    </li>
  );
};

export default TrendingPost;
