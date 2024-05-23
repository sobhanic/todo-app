import { ChecklistRounded, ChecklistRtlRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";

function Header() {
  return (
    <Typography
      variant='h1'
      sx={{
        display: "flex",
        gap: 1,
        justifyContent: "center",
        alignItems: "center",
        fontSize: "2rem",
        bgcolor: "#2E3532",
        color: "#E0E2DB",
        p: 4,
        fontWeight: 600,
      }}
    >
      <ChecklistRounded sx={{ fontSize: "2rem" }} />
      Todo App
      <ChecklistRtlRounded sx={{ fontSize: "2rem" }} />
    </Typography>
  );
}

export default Header;
