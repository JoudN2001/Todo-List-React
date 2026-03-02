import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function AlertOnEvent() {
  return (
    <Stack sx={{position: "absolute", bottom: 0, left: 0,  zIndex: 1, p: 3 }}>
      <Alert variant="filled" severity="success">
        تم التعديل بنجاح
      </Alert>
    </Stack>
  );
}