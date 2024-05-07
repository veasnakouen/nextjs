"use client";
import React, { useState, useEffect } from "react";
import { initialPost, item } from "@/sections/Posts";
import "./style.css";
import Image from "next/image";
import Preloader from "@/components/Preloader";
import SidePostItem from "@/components/SidePostItem";
import land from "/public/assets/img/post-landscape-3.jpg";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PostItem = ({ params }: { params: { id: string } }) => {
  const id: string = params.id;
  const router = useRouter();
  const [item, setItem] = useState(initialPost);
  const [items, setItems] = useState([]);

  const getSinglePostData = async () => {
    await fetch(`/api/postitems/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((error) => console.log(error.messages));
  };

  const getItemData = () => {
    // fetching route
    fetch(`/api/postitems`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    getItemData();
    getSinglePostData();
  }, []);

  //tap for aside bar
  const tabsData = [
    { id: 1, name: "Popular", active: true },
    { id: 2, name: "Trending", active: false },
  ];

  const [tabs, setTabs] = useState(tabsData);

  const handleTabActive = (id: number): void => {
    setTabs(
      tabsData.map((tab) => {
        tab.active = false;
        if (tab.id === id) tab.active = true;

        return tab;
      })
    );
  };

  const handleDeletePost = async (id: string) => {
    //Delete Post request
    try {
      const response = await fetch(`/api/postitems/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = response.status;
      if (result === 200) {
        console.log("success", result);
        router.push(`/postitems`);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <main id="main">
      <div className="single-post-content">
        <div className="container">
          <div className="row">
            <div className="col-md-9 post-content">
              {/* B'course we set initialPost(empty value at the first) */}
              {item && item.category !== "" ? (
                <div className="single-post">
                  <div className="post-meta">
                    <span className="date">{item.category}</span>
                    <span className="mx-1">
                      <i className="bi bi-dot"></i>
                    </span>
                    <span>
                      {new Date(item.date).toLocaleDateString("en-US")}
                    </span>
                  </div>
                  <h1 className="mb-5">{item.title}</h1>
                  <p>
                    {" "}
                    <span className="firstcharacter">
                      {/* get only first string/word */}
                      {item.brief && item.brief.charAt(0)}
                    </span>
                    {/* get all start from 1 to the rest */}
                    {item.brief && item.brief.substring(1)}
                  </p>
                  <p>{item.brief && item.brief}</p>
                  <figure className="my-4">
                    {/* <Image
                      src={`/${item.img}`}
                      className="img-fluid "
                      alt="post-image"
                      width={0}
                      height={0}
                      layout="responsive"
                    /> */}
                    <img src={`/${item.img}`} className="img-fluid" alt="" />
                    <figcaption>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quae, rerum.{" "}
                    </figcaption>
                  </figure>
                  <p>{item.brief && item.brief}</p>
                  <p>{item.brief && item.brief}</p>
                  <div className="d-flex justify-content-center gap-4">
                    <a
                      className="btn btn-primary"
                      onClick={() => handleDeletePost(id)}
                    >
                      {" "}
                      <i className="bi bi-trash"></i>
                    </a>
                    <Link
                      href={`/createpostitems/${id}`}
                      className="btn btn-primary "
                    >
                      {" "}
                      <i className="bi bi-pen"></i>
                    </Link>
                  </div>
                </div>
              ) : (
                <Preloader />
              )}
            </div>
            <div className="col-md-3">
              <div className="aside-block">
                <ul className="nav nav-pill custom-tab-nav mb-4">
                  {tabs.map((tab) => (
                    <li className="nav-item " key={tab.id}>
                      <button
                        className={`nav-link ${
                          tab.active ? "active" : undefined
                        }`}
                        onClick={() => handleTabActive(tab.id)}
                      >
                        {tab.name}
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="tab-content">
                  <div
                    className={`tab-pane fade ${
                      tabs[1].active ? "show active" : ""
                    }`}
                  >
                    {items
                      //   .slice(0, 6)
                      .filter((item: item) => item.trending === true)
                      .map((item: item) => (
                        <SidePostItem key={item._id} item={item} />
                      ))}
                  </div>
                  <div
                    className={`tab-pane fade ${
                      tabs[0].active ? "show active" : ""
                    }`}
                  >
                    {items.slice(0, 6).map((item: item) => (
                      <SidePostItem key={item._id} item={item} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="aside-block">
                <h3 className="aside-title">Video</h3>
                <div className="video-post">
                  <a
                    target="_blank"
                    href="https://youtu.be/gAnaa3DnsLU?si=-eAnemx45a5m0ZoS"
                    className="link-video"
                  >
                    <span className="bi-play-fill"></span>
                    <Image
                      src={land}
                      alt=""
                      width={0}
                      height={0}
                      className="img-fluid"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PostItem;
