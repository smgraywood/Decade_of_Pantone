import * as React from "react";

import * as apiClient from "../apiClient";

import { Cards } from "./Cards";
import Form from "./Form";
import "./index.css";

const Tasks = () => {
  const [tasks, setTasks] = React.useState([]);

  const loadTasks = async () => setTasks(await apiClient.getTasks());
  const addPride = (task) => apiClient.addTask(task).then(loadTasks);
  const addPost = (data) => {
    //place holder function to send data to API
    console.log(data);
  };

  const [showForm, setShowForm] = React.useState(false);
  const openForm = () => {
    setShowForm(true);
  };
  const closeForm = () => {
    setShowForm(false);
  };

  React.useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <h1 className="title">A Decade of Pantone</h1>
      <section>
        <Cards />
        <JoinConvo openForm={openForm} />
        {showForm ? (
          <form className="pride_form">
            <AddPrideForm
              addPride={addPride} // Find out what you this to do
              addPost={addPost} //This function will add a post to our BE
              closeForm={closeForm} // will change the form value to open and close =>Function
            />
          </form>
        ) : null}
      </section>
    </>
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
const AddPrideForm = ({ addPride, addPost, closeForm }) => {
  return <Form closeForm={closeForm} addPost={addPost} />;
};

export default Tasks;

//onClicks
//onClick to change the background color
//onClick to trigger the API dropdown
//onClick to dropdown the react form
//open data carousel
