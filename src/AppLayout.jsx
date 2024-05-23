import { Box, Container, Paper } from "@mui/material";

function AppLayout({ children }) {
  return (
    <Box sx={{ bgcolor: "#8B2635", width: "100vw", height: "100vh", pt: 10 }}>
      <Container maxWidth='md'>
        <Paper
          elevation={6}
          sx={{
            height: "80vh",
            bgcolor: "#E0E2DB",
            overflow: "hidden",
            borderRadius: 5,
          }}
        >
          {children}
        </Paper>
      </Container>
    </Box>
  );
}

export default AppLayout;
