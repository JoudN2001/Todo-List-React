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
import { grey } from "@mui/material/colors";
import { useContext } from "react";
import { ToDoListContext } from "./Context/ToDoListContext";

export default function ToDoCard({
  title = "عنوان المهمة",
  subTitle = "تفاصيل المهمة",
  isDone = false,
}) {
  const {tasks, setTasks} = useContext(ToDoListContext)
  function doneBtn() {
    tasks.map(task => {

    })
    // setTasks(tasks.filter(t => t.id !== task.id))
  }
  function deleteBtn() {}
  function editBtn() {}
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
                  bgcolor: "#fff",
                  color: "green",
                  border: "3px solid green",
                  cursor: "pointer",
                  mx: 0.5,
                  "&:hover": {
                    bgcolor: grey[200],
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
