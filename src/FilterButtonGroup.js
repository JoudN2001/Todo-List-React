import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import { grey } from "@mui/material/colors";

import { useContext } from "react";
import { IsDoneContext } from "./Context/IsDoneContext";

export default function FilterButtonGroup() {
  const {filter, setFilter} = useContext(IsDoneContext);

  const buttons = [
    <Button
      sx={{
        border: "1px solid #38383848",
        color: filter === "isNotDone" ? "text.primary" : "text.secondary",
        bgcolor: filter === "isNotDone" ? grey[300] : "",
        fontWeight: 600,
      }}
      onClick={(_) => {
        setFilter("isNotDone");
      }}
      key="isNotDone"
    >
      غير منجز
    </Button>,
    <Button
      sx={{
        border: "1px solid #38383848",
        color: filter === "isDone" ? "text.primary" : "text.secondary",
        bgcolor: filter === "isDone" ? grey[300] : "",
        fontWeight: 600,
      }}
      onClick={(_) => {
        setFilter("isDone");
      }}
      key="isDone"
    >
      منجز
    </Button>,
    <Button
      sx={{
        border: "1px solid #38383848",
        color: filter === "all" ? "text.primary" : "text.secondary",
        bgcolor: filter === "all" ? grey[300] : "",
        fontWeight: 600,
      }}
      onClick={(_) => {
        setFilter("all");
      }}
      key="all"
    >
      الكل
    </Button>,
  ];
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
