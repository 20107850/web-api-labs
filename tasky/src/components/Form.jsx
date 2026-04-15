import React from "react";

const AddTaskForm = (props) => {
let priorityClass = "";

if (props.priority === "Low") {
  priorityClass = "priority low";
} else if (props.priority === "Medium") {
  priorityClass = "priority medium";
} else if (props.priority === "High") {
  priorityClass = "priority high";
}

  return (
    <div>
          <form onSubmit={props.submit}>

            <label>
        Task title:
        <input type="text" name="title" required onChange={(event) => props.change(event)} />
    </label>
    <br />
    <label>
        Due date:
        <input type="date" name="deadline" required onChange={(event) => props.change(event)} />
    </label>
    <br />
    <label>
        Details:
        <input type="text" name="description" onChange={(event) => props.change(event)} />
    </label>
    <br />
    <label>
    Priority:
        <input type="text" name="priority" onChange={(event) => props.change(event)} />
    </label>
    <br />

    <input type="submit" value="Submit" />
        </form>
    </div>
  )
};

export default AddTaskForm;
