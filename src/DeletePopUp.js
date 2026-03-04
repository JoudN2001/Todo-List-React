import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function DeletePopUp({ onClose, handelDelete }) {
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
            هل أنت متأكد من رغبتك في حذف المهمة؟
          </Typography>
          <Typography
            variant="h6"
            fontWeight={400}
            sx={{ color: "text.secondary", py: 1 }}
          >
            لا يمكننك التراجع عن الحذف في اختيارك زر: (حذف)
          </Typography>
        </CardContent>
        <CardActions dir="ltr">
          <Button size="medium" color="text.secondary" onClick={handelDelete}>
            نعم، قم بالحذف
          </Button>
          <Button size="medium" color="text.secondary" onClick={onClose}>
            إغلاق
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
