import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function DeletePopUp() {
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
            هل أنت متأكد من رغبتك في حذف المهمة؟
          </Typography>
          <Typography variant="h6" fontWeight={400} sx={{ color: 'text.secondary', py: 1 }}>
           لا يمكننك التراجع عن الحذف في اختيارك زر: (حذف)
          </Typography>
        </CardContent>
        <CardActions dir="ltr">
          <Button size="medium" color="text.secondary">
            نعم، قم بالحذف
          </Button>
          <Button size="medium" color="text.secondary">
            إغلاق
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
