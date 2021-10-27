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
        <form className="pride_form">
          <AddPride {...{ addPride }} />
        </form>
      </section>
    </>
  );
};

const AddPride = ({ addPride }) => {
  return <Form />;
};

export default Tasks;
