//Component
import ToDoCard from "./ToDoCard";

//Context
import { useContext } from "react";
import { IsDoneContext } from "./Context/IsDoneContext";
import { ToDoListContext } from "./Context/ToDoListContext";

export default function TaskList() {
  const { filter } = useContext(IsDoneContext);
  const { tasks } = useContext(ToDoListContext);

  // Complete Tasks
  const toDoCardIsDone = tasks
  .filter((card) => {
    return card.isDone;
  })
  .map((card) => {
    return <ToDoCard key={card.id} myTasks={card} />;
  });
  
  // Not Complete Tasks
  const toDoCardIsNotDone = tasks
  .filter((card) => {
    return !card.isDone;
  })
  .map((card) => {
    return <ToDoCard key={card.id} myTasks={card} />;
  });
  
  // All Tasks
  const allToDoCard = tasks.map((card) => {
    return <ToDoCard key={card.id} myTasks={card} />;
  });

  // Filter Buttons
  if (filter === "isNotDone") {
    return <>{toDoCardIsNotDone}</>;
  } else if (filter === "isDone") {
    return <>{toDoCardIsDone}</>;
  } else {
    return <>{allToDoCard}</>;
  }
}
