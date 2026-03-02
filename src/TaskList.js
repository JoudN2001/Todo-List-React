import ToDoCard from "./ToDoCard";
import { useContext } from "react";
import { IsDoneContext } from "./Context/IsDoneContext";
import { ToDoListContext } from "./Context/ToDoListContext";

export default function TaskList() {
  const { filter } = useContext(IsDoneContext);
  const { tasks } = useContext(ToDoListContext);
  const toDoCardIsDone = tasks
    .filter((card) => {
      return card.isDone;
    })
    .map((card) => {
      return (
        <ToDoCard key={card.id} title={card.title} subTitle={card.subTitle} />
      );
    });

  const toDoCardIsNotDone = tasks
    .filter((card) => {
      return !card.isDone;
    })
    .map((card) => {
      return (
        <ToDoCard key={card.id} title={card.title} subTitle={card.subTitle} />
      );
    });

  const allToDoCard = tasks.map((card) => {
    return (
      <ToDoCard key={card.id} title={card.title} subTitle={card.subTitle} />
    );
  });

  if (filter === "isNotDone") {
    return <>{toDoCardIsNotDone}</>;
  } else if (filter === "isDone") {
    return <>{toDoCardIsDone}</>;
  } else {
    return <>{allToDoCard}</>;
  }
}
