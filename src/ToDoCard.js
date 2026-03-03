import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

// Icons
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import CheckIcon from "@mui/icons-material/Check";
import { green, grey } from "@mui/material/colors";
import { useContext } from "react";
import { ToDoListContext } from "./Context/ToDoListContext";
import EditPopUp from "./EditPopUp";
import AlertOnEvent from "./AlertOnEvent";

export default function ToDoCard({
  id,
  title = "عنوان المهمة",
  subTitle = "تفاصيل المهمة",
  isDone = false,
}) {
  
  const { tasks, setTasks } = useContext(ToDoListContext);

  function doneBtn() {
    const UpdatedTasks = tasks.map((task) => {
      if (task.id === id) return { ...task, isDone: !task.isDone };
      return task;
    });
    setTasks(UpdatedTasks);
    const updateMsg = setTimeout(()=>{return <AlertOnEvent action="إنجاز"/>},1000)
    clearTimeout(updateMsg)
  }
  
  
  function deleteBtn() {
    const UpdatedTasks = tasks.filter((task) => {
      return !(task.id === id);
    });
    setTasks(UpdatedTasks);
    const updateMsg = setTimeout(()=>{return <AlertOnEvent action="حذف"/>},1000)
  }
  
  function editBtn() {
    console.log("test")
    const updateMsg = setTimeout(()=>{return <AlertOnEvent action="تعديل"/>},1000)
    return <EditPopUp/>
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
          <Grid size={8}>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="h6">{subTitle}</Typography>
          </Grid>
          <Grid
            size={4}
            display={"flex"}
            justifyContent={"space-around"}
            alignItems={"center"}
          >
            <Box style={{ textAlign: "left" }}>
              <IconButton
                sx={{
                  bgcolor: isDone ? green[800] : "#fff",
                  color: isDone ? "#fff" : green[800],
                  border: isDone ? "3px solid #fff" : "3px solid green",
                  cursor: "pointer",
                  mx: 0.5,
                  "&:hover": {
                    bgcolor: isDone ? green[900] : grey[200],
                    boxShadow: "0px 7px 7px rgba(0,0,0,0.4)",
                  },
                }}
                onClick={doneBtn}
              >
                <CheckIcon />
              </IconButton>
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
                onClick={editBtn}
              >
                <EditOutlinedIcon />
              </IconButton>
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
                onClick={deleteBtn}
              >
                <DeleteOutlinedIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
