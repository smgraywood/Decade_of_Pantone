import * as React from "react";

import * as apiClient from "../apiClient";

import Cards from "./Cards";
import Carousel2 from "./Carousel2";
import ColorCard from "./ColorCard";
import Form from "./Form";

import "./index.css";

const Posts = () => {
  const [bgColor, setBgColor] = React.useState("");
  const [posts, setPosts] = React.useState([]);
  const [colorCardData, setColorCardData] = React.useState([]);

  const loadPosts = async () => setPosts(await apiClient.getPosts());
  const addPost = (data) => {
    apiClient.addPost(data).then(loadPosts);
    //place holder function to send data to API
    // console.log(data);
  };

  // let APIData = async () => (await apiClient.fetchColorData());
  const getColorData = async () => {
    setColorCardData(await apiClient.fetchColorData());
    console.log(colorCardData);
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
        <br />
        <br />
        <div>
          {" "}
          <div className="API-instruction">
            <span className="emojis" role="img" aria-label="hand pointing up">
              👇🏻👇🏼👇🏽👇🏾👇🏿
            </span>
            <br />
            <p>
              &nbsp;Click here to display a color pallette from the&nbsp;
              <a href="http://colormind.io/" target="_blank">
                Colormind API
              </a>
            </p>
            <br />
            <span className="emojis" role="img" aria-label="hand pointing up">
              👇🏻👇🏼👇🏽👇🏾👇🏿
            </span>{" "}
            <br />
          </div>
          <button className="fetch-API-button" onClick={() => getColorData()}>
            I Need More Color!
          </button>
        </div>
        <ColorCard colorCardData={colorCardData} />
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
