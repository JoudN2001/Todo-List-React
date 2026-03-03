import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function EditPopUp() {
  const [editTitle, setEditTitle] = useState("");
  const [editSubTitle, setEditSubTitle] = useState("");

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        zIndex: 2,
        background: "rgba(0,0,0,0.4)",
        minWidth: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card
        dir="rtl"
        sx={{
          padding: "10px",
          width: "50%",
        }}
      >
        <CardContent>
          <Typography variant="h5" fontWeight={500} sx={{ py: 1 }}>
            تعديل المهمة
          </Typography>
          <TextField
            label="عنوان المهمة"
            variant="standard"
            sx={{ mb: 2, width: "100%" }}
            value={editTitle}
            onChange={setEditTitle}
          />
          <TextField
            label="تفاصيل المهمة"
            variant="standard"
            sx={{ mb: 1, width: "100%" }}
            value={editSubTitle}
            onChange={setEditSubTitle}
          />
        </CardContent>
        <CardActions dir="ltr">
          <Button size="medium" color="text.secondary">
            تعديل
          </Button>
          <Button size="medium" color="text.secondary" onChange={(_) => {}}>
            إلغاء
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
