import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";

export default function EditPopUp({
  onClose,
  handelEdit,
  currentTitle,
  CurrentSubTitle,
}) {
  const [editTitle, setEditTitle] = useState(currentTitle);
  const [editSubTitle, setEditSubTitle] = useState(CurrentSubTitle);

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
      onClick={onClose}
    >
      <Card
        dir="rtl"
        sx={{
          padding: "10px",
          width: "50%",
        }}
        onClick={(e) => e.stopPropagation()}
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
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <TextField
            label="تفاصيل المهمة"
            variant="standard"
            sx={{ mb: 1, width: "100%" }}
            value={editSubTitle}
            onChange={(e) => setEditSubTitle(e.target.value)}
          />
        </CardContent>
        <CardActions dir="ltr">
          <Button
            size="medium"
            color="text.secondary"
            onClick={() => handelEdit(editTitle, editSubTitle)}
          >
            تعديل
          </Button>
          <Button size="medium" color="text.secondary" onClick={onClose}>
            إلغاء
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
