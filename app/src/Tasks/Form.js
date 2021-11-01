import React, { useState } from "react";

function Form({ Post, addPost }) {
  const [color_name, setColor_name] = useState("");
  const [release_year, setRelease_year] = useState("");
  const [image_url, setImage_url] = useState("");
  const [image_description, setImage_description] = useState("");
  const [instagram_handle, setInstagram_handle] = useState("");

  const handleColor_name = (e) => {
    setColor_name(e.target.value);
  };

  const handleRelease_year = (e) => {
    setRelease_year(e.target.value);
  };

  const handleImage_url = (e) => {
    setImage_url(e.target.value);
  };

  const handleImage_description = (e) => {
    setImage_description(e.target.value);
  };

  const handleInstagram_handle = (e) => {
    setInstagram_handle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({
      color_name: color_name,
      release_year: release_year,
      image_url: image_url,
      image_description: image_description,
      instagram_handle: instagram_handle,
    });
  };

  return (
    <div className="form-wrapper">
      <br />
      <form className="pride_form">
        <h3 id="form-title">Show Your Pantone Pride!</h3>
        <label>
          Color Name:{" "}
          <input
            type="text"
            name="color_name"
            value={color_name}
            // onSubmit={handleSubmit}
            onChange={handleColor_name}
          />
        </label>{" "}
        <br />
        <label>
          Release Year:{" "}
          <input
            type="text"
            name="release_year"
            value={release_year}
            // onSubmit={handleSubmit}
            onChange={handleRelease_year}
          />
        </label>{" "}
        <br />
        <label>
          Image URL:{" "}
          <input
            type="text"
            name=" image_url"
            value={image_url}
            // onSubmit={handleSubmit}
            onChange={handleImage_url}
          />
        </label>{" "}
        <br />
        <label>
          Image Description:{" "}
          <input
            type="text"
            name="image_description"
            value={image_description}
            // onSubmit={handleSubmit}
            onChange={handleImage_description}
          />
        </label>{" "}
        <br />
        <label>
          Instagram Handle:{" "}
          <input
            type="text"
            name="instagram_handle"
            value={instagram_handle}
            // onSubmit={handleSubmit}
            onChange={handleInstagram_handle}
          />
        </label>{" "}
        <br />
        <br />
        <button id="form-submit" onClick={handleSubmit}>
          SUBMIT
        </button>
      </form>
    </div>
  );
}
export { Form };
