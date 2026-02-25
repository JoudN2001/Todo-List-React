import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import { grey } from "@mui/material/colors";

const buttons = [
  <Button
    // variant="contained"
    sx={{
      border: "1px solid #38383848",
      color: "text.secondary",
      font: "bold 16px system-ui",
    }}
    key="one"
  >
    غير منجز
  </Button>,
  <Button
    sx={{
      border: "1px solid #38383848",
      color: "text.secondary",
      font: "bold 16px system-ui",
    }}
    key="two"
  >
    منجز
  </Button>,
  <Button
    sx={{
      border: `1px solid #38383848`,
      color: "text.primary",
      font: "bold 16px system-ui",
      bgcolor: grey[300],
      "&:active" : {}
    }}
    key="three"
  >
    الكل
  </Button>,
];

export default function FilterButtonGroup() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        "& > *": {
          m: 1,
        },
      }}
    >
      <ButtonGroup dir="ltr">{buttons}</ButtonGroup>
    </Box>
  );
}
