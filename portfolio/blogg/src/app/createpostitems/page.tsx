"use client";
import React from "react";
import { useEffect, useState } from "react";
 
export  const initialState = {
    title: "",
    img: "",
    category: "",
    author: "",
    brief: "",
    validate: "",
  };

export default function CreateItem() {
  

  const [text, setText] = useState(initialState);

  const handleTextChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value, validate: "" });
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // simple form validation
    if (
      text.title === "" ||
      text.img === "" ||
      text.category === "" ||
      text.brief === ""
    ) {
      setText({ ...text, validate: "incomplete" });
      return;
    }

    //send the post request
    try {
      const response = await fetch(`/api/postitems`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(text),
      });

      setText({
        ...text,
        validate: "laoding",
      });
      const result = response.status;
      if (result === 201) {
        setText({ ...text, validate: "Success" });
        console.log({ Success: result });
      }
    } catch (error) {
      setText({ ...text, validate: "Error" });
      console.log(error);
    }
  };

  return (
    <main id="main">
      <div className="create-post-content">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-10">
              <div className="row d-flex justify-content-center mt-5">
                <div className="col-lg-12">
                  <div className="row">
                    <div className="col-lg-12 text-center mb-5">
                      <h1 className="page-title">Create New Post</h1>
                    </div>
                  </div>
                  <form onSubmit={handleFormSubmit}>
                    <div className="row">
                      <div className="col-lg-6 mb-3">
                        <label htmlFor="">Title</label>
                        <input
                          type="text"
                          name="title"
                          value={text.title}
                          onChange={handleTextChange}
                          className="form-control"
                          placeholder="Enter title"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label htmlFor="">Image Url</label>
                        <input
                          type="text"
                          name="img"
                          value={text.img}
                          onChange={handleTextChange}
                          className="form-control"
                          placeholder="Enter Image url"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label htmlFor="">Category</label>
                        <input
                          type="text"
                          name="category"
                          value={text.category}
                          onChange={handleTextChange}
                          className="form-control"
                          placeholder="Enter category"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <label htmlFor="">Author</label>
                        <input
                          type="text"
                          name="author"
                          value={text.author}
                          onChange={handleTextChange}
                          className="form-control"
                          placeholder="Enter author's name"
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <label htmlFor="brief">Brief</label>
                        <textarea
                          className="form-control"
                          name="brief"
                          value={text.brief}
                          onChange={handleTextChange}
                          cols={30}
                          rows={10}
                        ></textarea>
                      </div>
                      <div className="mb-3">
                        {text.validate === "loading" && (
                          <div className="loading">Sending Post.</div>
                        )}
                        {text.validate === "incomplete" && (
                          <div className="error-message">
                            Please fill all above details.
                          </div>
                        )}
                        {text.validate === "success" && (
                          <div className="sent-message">
                            your news was posted successful. Thank you!.
                          </div>
                        )}
                        {text.validate === "error" && (
                          <div className="error-message">Server Error.</div>
                        )}
                      </div>

                      <div className="col-12 d-flex justify-content-center">
                        <input
                          type="submit"
                          className="btn btn-primary"
                          value={"Post Item"}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias inventore, optio magni porro quod cum deserunt sequi facilis placeat doloribus ea incidunt nesciunt rem voluptates ut voluptas perferendis blanditiis hic adipisci nemo! Nihil accusamus repudiandae enim aliquam recusandae ducimus autem possimus reprehenderit placeat optio, et sit modi quo culpa laudantium iusto sunt eius itaque tempore, voluptate nesciunt ipsa? Laudantium, voluptatibus est nemo harum tempore necessitatibus exercitationem ut quae veniam fugiat, laborum excepturi! Esse sapiente numquam porro atque fugit, obcaecati ad dignissimos nihil quod et, saepe laboriosam magni ipsam consectetur dolor beatae incidunt quo nisi soluta, eos quis architecto quibusdam animi? */}
    </main>
  );
}
