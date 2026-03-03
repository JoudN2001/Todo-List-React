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
        <ToDoCard
          id={card.id}
          key={card.id}
          title={card.title}
          subTitle={card.subTitle}
          isDone={card.isDone}
        />
      );
    });

  const toDoCardIsNotDone = tasks
    .filter((card) => {
      return !card.isDone;
    })
    .map((card) => {
      return (
        <ToDoCard
          id={card.id}
          key={card.id}
          title={card.title}
          subTitle={card.subTitle}
          isDone={card.isDone}
        />
      );
    });

  const allToDoCard = tasks.map((card) => {
    return (
      <ToDoCard
        id={card.id}
        key={card.id}
        title={card.title}
        subTitle={card.subTitle}
        isDone={card.isDone}
      />
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
