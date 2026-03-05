// Components
import EditPopUp from "./EditPopUp";
import DeletePopUp from "./DeletePopUp.js";
import AlertOnEvent from "./AlertOnEvent";

// Context and Hooks
import { useContext } from "react";
import { ToDoListContext } from "./Context/ToDoListContext";
import { useState } from "react";
import { createPortal } from "react-dom";

// Icons
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CheckIcon from "@mui/icons-material/Check";

// Others Library
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { green, grey } from "@mui/material/colors";

export default function ToDoCard({ myTasks }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertAction, setAlertAction] = useState("");
  const { tasks, setTasks } = useContext(ToDoListContext);

  // Handel Events
  function triggerAlert(actionName) {
    setAlertAction(actionName);
    setShowAlert(true);
  }

  function handelCompleteEvent() {
    const updatedTasks = tasks.map((task) => {
      if (task.id === myTasks.id) return { ...task, isDone: !task.isDone };
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    if (!myTasks.isDone) {
      triggerAlert("إنجاز");
    }
  }

  function handelDelete() {
    const updatedTasks = tasks.filter((task) => {
      return task.id !== myTasks.id;
    });
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setShowDeleteModal(false);
    triggerAlert("حذف");
  }

  function handelEdit(title, details) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === myTasks.id)
        return { ...task, title: title, subTitle: details };
      return task;
    });
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setShowEditModal(false);
    triggerAlert("تعديل");
  }

  return (
    <Card className="toDoCard">
      <CardContent
        sx={{
          "&:last-child": { paddingBottom: "16px" },
        }}
      >
        <Grid
          container
          direction="row"
          sx={{
            justifyContent: "flex-start",
            alignItems: "center",
            textAlign: "right",
          }}
        >
          {/* Titile Task */}
          <Grid size={8}>
            <Typography variant="h4">{myTasks.title}</Typography>
            <Typography variant="h6">{myTasks.subTitle}</Typography>
            {/* === Titile Task === */}
          </Grid>
          {/* Icons Group */}
          <Grid
            size={4}
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Box style={{ textAlign: "left" }}>
              {/* Complete Button */}
              <IconButton
                sx={{
                  bgcolor: myTasks.isDone ? green[800] : "#fff",
                  color: myTasks.isDone ? "#fff" : green[800],
                  border: myTasks.isDone ? "3px solid #fff" : "3px solid green",
                  cursor: "pointer",
                  mx: 0.5,
                  "&:hover": {
                    bgcolor: myTasks.isDone ? green[900] : grey[200],
                    boxShadow: "0px 7px 7px rgba(0,0,0,0.4)",
                  },
                }}
                onClick={handelCompleteEvent}
              >
                <CheckIcon />
              </IconButton>
              {/* Edit Button */}
              <IconButton
                sx={{
                  bgcolor: "#fff",
                  color: "purple",
                  border: "3px solid purple",
                  cursor: "pointer",
                  mx: 0.5,
                  "&:hover": {
                    bgcolor: grey[200],
                    boxShadow: "0px 7px 7px rgba(0,0,0,0.4)",
                  },
                }}
                onClick={() => {
                  setShowEditModal(true);
                }}
              >
                <EditOutlinedIcon />
              </IconButton>
              {/* Modal On Edit */}
              {showEditModal &&
                createPortal(
                  <EditPopUp
                    onClose={() => setShowEditModal(false)}
                    handelEdit={handelEdit}
                    currentTitle={myTasks.title}
                    CurrentSubTitle={myTasks.subTitle}
                  />,
                  document.body,
                )}
              {/* Delete Button */}
              <IconButton
                sx={{
                  bgcolor: "#fff",
                  color: "red",
                  border: "3px solid red",
                  cursor: "pointer",
                  mx: 0.5,
                  "&:hover": {
                    bgcolor: grey[200],
                    boxShadow: "0px 7px 7px rgba(0,0,0,0.4)",
                  },
                }}
                onClick={() => setShowDeleteModal(true)}
              >
                <DeleteOutlinedIcon />
              </IconButton>
              {/* Confirm Modal On Delete */}
              {showDeleteModal &&
                createPortal(
                  <DeletePopUp
                    onClose={() => setShowDeleteModal(false)}
                    handelDelete={handelDelete}
                  />,
                  document.body,
                )}
            </Box>
          </Grid>
          {/* === Icons Group === */}
        </Grid>
      </CardContent>
      {showAlert && (
        <AlertOnEvent
          action={alertAction}
          onClose={() => setShowAlert(false)}
        />
      )}
    </Card>
  );
}
