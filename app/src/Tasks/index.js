import * as React from "react";

import * as apiClient from "../apiClient";

import { Cards } from "./Cards";
import { Form } from "./Form";
import "./index.css";

const Tasks = () => {
  const [tasks, setTasks] = React.useState([]);

  const loadTasks = async () => setTasks(await apiClient.getTasks());
  const addPride = (task) => apiClient.addTask(task).then(loadTasks);

  React.useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <h1 className="title">A Decade of Pantone</h1>
      <section>
        <Cards />
        <JoinConvo />
        <form className="pride_form">
          <AddPride {...{ addPride }} />
        </form>
      </section>
    </>
  );
};
const JoinConvo = () => {
  return (
    <>
      <div className="convo-wrapper">
        <h3 id="convo-title">Join the Conversation!</h3>
        <p id="convo-paragraph">
          How has the Pantone Color of the Year shown up in your closet? Click
          here to upload a photo of your flat lay with a description and the
          year the item was purchased to show your Pantone Pride!
        </p>
        <button id="convo-button">I Want to Show my Pantone Pride!</button>
      </div>
    </>
  );
};
const AddPride = ({ addPride }) => {
  return <Form />;
};

export default Tasks;
