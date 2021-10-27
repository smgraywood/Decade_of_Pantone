import * as React from "react";

import * as apiClient from "../apiClient";

import { Cards } from "./Cards";
import { Form } from "./Form";
import "./index.css";
import styles from "./styles.module.scss";

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
        {/* <TaskList {...{ tasks }} /> */}
        <form className="pride_form">
          <AddPride {...{ addPride }} />
        </form>
      </section>
    </>
  );
};

const TaskList = ({ tasks }) => (
  <ul className={styles.list}>
    {tasks.map(({ id, name }) => (
      <li key={id}>{name}</li>
    ))}
  </ul>
);

const AddPride = ({ addPride }) => {
  const [task, setTask] = React.useState("");

  const canAdd = task !== "";

  const onSubmit = (e) => {
    e.preventDefault();
    if (canAdd) {
      addPride(task);
      setTask("");
    }
  };

  return (
    // <form {...{ onSubmit }}>
    //   <label>
    //     New task:{" "}
    //     <input onChange={(e) => setTask(e.currentTarget.value)} value={task} />
    //   </label>
    //   <button disabled={!canAdd} className={styles.button}>
    //     Add
    //   </button>
    // </form>
    <Form />
  );
};

export default Tasks;
