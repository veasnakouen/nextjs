"use client";
import React, { useState, useEffect } from "react";
import Preloader from "@/components/Preloader";
import { item } from "@/sections/Posts";
import PostItemOne from "@/components/PostItemOne";
import PageTitle from "@/components/PageTitle";

const PostItems = () => {
  const [items, setItems] = useState([]);
  const getItemsData = async () => {
    await fetch(`/api/postitems`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getItemsData();
  }, [items]);

  return (
    <main id="main">
      <section id="posts" className="posts">
        <div className="container">
          <div className="row">
            <PageTitle title="Post Items Lists" />
            {items && items.length > 0 ? (
              items.map((item: item) => (
                <div className="col-lg-3 col-md-6" key={item._id}>
                  <PostItemOne large={false} item={item} />
                </div>
              ))
            ) : (
              <Preloader />
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default PostItems;
