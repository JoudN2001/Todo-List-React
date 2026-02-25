import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import Stack from "@mui/material/Stack";

export default function AddTask() {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        justifyContent: "space-between",
        alignItems: "stretch",
        my: 2,
        mx: 1,
        width: "100%",
      }}
    >
      <TextField
        dir="rtl"
        label="عنوان المهمة"
        variant="outlined"
        style={{ width: "75%" }}
      />
      <Button variant="contained" style={{ width: "20%", fontSize: 18 }}>
        إضافة <AddIcon sx={{ mx: 0.3 }} />
      </Button>
    </Stack>
  );
}
