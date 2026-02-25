import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

//Component
import FilterButtonGroup from "./FilterButtonGroup";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

export default function ToDoWindow() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ bgcolor: "#fff", borderRadius: 3 }}>
        {/* Header */}
        <Typography variant="h1" style={{ fontWeight: "normal" }}>
          مهامي
        </Typography>
        <Divider sx={{ mb: 7 }} />
        {/* === Header === */}

        {/* Filter Button Group */}
        <FilterButtonGroup />
        {/* === Filter Button Group === */}

        {/* Tasks Card */}
        <TaskList />
        {/* === Tasks Card === */}

        {/* Add Task */}
        <AddTask />
        {/* === Add Task === */}
      </Container>
    </>
  );
}
