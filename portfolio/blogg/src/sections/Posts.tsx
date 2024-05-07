"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "./posts.css";
import PostItemOne from "@/components/PostItemOne";
import TrendingPost from "@/components/TrendingPost";
import Preloader from "@/components/Preloader";

export interface item {
  _id: string;
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

export const initialPost = {
  _id: "",
  title: "",
  img: "",
  category: "",
  date: "",
  type: "",
  brief: "",
  avatar: "",
  author: "",
  top: false,
  trending: false,
};

const PostsPage = () => {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [item, setItem] = useState(initialPost); //empty object

  const getItemData = () => {
    // fetching route
    fetch(`/api/postitems`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((e) => console.log(e.message));
  };
  // fetching single postItem
  const getSinglePostData = async (id: string) => {
    fetch(`/api/postitems/${id}`)
      .then((res) => {
        if (res.status === 404) {
          router.push("/not-found");
        }
        return res.json();
      })
      .then((data) => setItem(data))
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getItemData();
    //this example with the hard code of the id get from database
    getSinglePostData("662b2f2d49d2df858659bbbf"); //this is the static (hard code copy id from raw database ) : when delete can effect to this post
  }, []);
  return (
    <section id="posts" className="post ">
      <div className="container" data-aos="fade-up">
        <div className="row g-5">
          <div className="col-lg-4 px-5">
            <PostItemOne large={true} item={item} />
          </div>
          <div className="col-lg-8">
            <div className="row g-5">
              <div className="col-lg-4 border-start custom-border">
                {items && items.length > 0 ? (
                  items
                    .filter((item: item) => !item.trending && !item.top)
                    .slice(0, 3)
                    .map((item: item) => (
                      <PostItemOne key={item._id} large={false} item={item} />
                    ))
                ) : (
                  <Preloader />
                )}
              </div>
              <div className="col-lg-4 border-start custom-border">
                {items && items.length > 0 ? (
                  items
                    .filter((item: item) => !item.trending && !item.top)
                    .slice(3.6)
                    .map((item: item) => (
                      <PostItemOne key={item._id} large={false} item={item} />
                    ))
                ) : (
                  <Preloader />
                )}
              </div>
              <div className="col-lg-4">
                <div className="trending">
                  <h3>Trending</h3>
                  <ul className="trending-post">
                    {items && items.length > 0 ? (
                      items
                        .filter((item: item) => item.trending)
                        .map((item: item, index: number) => (
                          <TrendingPost
                            key={item._id}
                            index={index}
                            item={item}
                          />
                        ))
                    ) : (
                      <Preloader />
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostsPage;
