import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";
import { createPortal } from "react-dom";
export default function AlertOnEvent({ action = "التعديل", onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 3000);
    return () => clearTimeout(timer);
  }, [onClose]);
  return createPortal(
    <Stack sx={{ position: "fixed", bottom: 0, left: 0, zIndex: 1, p: 3 }}>
      <Alert variant="filled" severity="success">
        تم {action} المهمة بنجاح
      </Alert>
    </Stack>,
    document.body,
  );
}
