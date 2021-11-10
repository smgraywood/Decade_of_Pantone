import * as React from "react";

import Twitter from "twitter-lite";

import * as apiClient from "../apiClient";

import Cards from "./Cards";
import Carousel2 from "./Carousel2";
import Form from "./Form";

import "./index.css";

const Posts = () => {
  const [bgColor, setBgColor] = React.useState("");
  console.log(bgColor);
  const [posts, setPosts] = React.useState([]);

  const loadPosts = async () => setPosts(await apiClient.getPosts());
  const addPost = (data) => {
    apiClient.addPost(data).then(loadPosts);
    //place holder function to send data to API
    console.log(data);
  };

  // two params => Hashtag -> "Taco" url=
  const fetchTweets = () => {
    let hashTag = "greenery";
    const client = new Twitter({
      consumer_key: process.env.API_KEY, // from Twitter.//Api key
      consumer_secret: process.env.API_KEY_SECRET, // from Twitter.
      access_token_key: process.env.BEARER, //twitterAPI.accessTokenKey, // from your User (oauth_token)
      access_token_secret: process.env.API_KEY_SECRET, //twitterAPI.accessTokenSecret// from your User (oauth_token_secret)
    });
    let twitterUrl = `search/tweets`;

    client
      .get(twitterUrl, { q: hashTag })
      .then((results) => {
        console.log("results", results);
      })
      .catch(console.error);
  };

  const [showForm, setShowForm] = React.useState(false);
  const openForm = () => {
    setShowForm(true);
  };
  const closeForm = () => {
    setShowForm(false);
  };

  React.useEffect(() => {
    loadPosts();
  }, []);

  React.useEffect(() => {
    if (posts) {
      console.log(posts);
    }
  }, [posts]);

  return (
    <div style={{ backgroundColor: bgColor }}>
      <h1 className="title">A Decade of Pantone</h1>
      {/* <button onClick={() => fetchTweets()}> TACO</button> */}
      <section>
        <Cards bgColor={bgColor} setBgColor={setBgColor} />
        <JoinConvo openForm={openForm} />
        {showForm ? (
          <form className="pride_form">
            <AddPrideForm
              // addPride={addPride} // Find out what you this to do
              addPost={addPost} //This function will add a post to our BE
              closeForm={closeForm} // will change the form value to open and close =>Function
            />
          </form>
        ) : null}
        {posts && <Carousel2 carouselData={posts} />}
      </section>
    </div>
  );
};
const JoinConvo = ({ openForm }) => {
  return (
    <>
      <div className="convo-wrapper">
        <h3 id="convo-title">Join the Conversation!</h3>
        <p id="convo-paragraph">
          How has the Pantone Color of the Year shown up in your closet? Click
          here to upload a photo of your flat lay with a description and the
          year the item was purchased to show your Pantone Pride!
        </p>
        <button id="convo-button" onClick={openForm}>
          I Want to Show my Pantone Pride!
        </button>
      </div>
    </>
  );
};
const AddPrideForm = ({ addPost, closeForm }) => {
  return <Form closeForm={closeForm} addPost={addPost} />;
};

export default Posts;

//onClicks
//onClick to change the background color
//onClick to trigger the API dropdown
//onClick to dropdown the react form
//open data carousel
