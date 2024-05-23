import { Box, Button, IconButton, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";

function InputForm() {
  return (
    <Box
      component='form'
      sx={{
        "& .MuiTextField-root": { m: 0.5, width: "30ch" },
        bgcolor: "#D2D4C8",
        p: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
      noValidate
      autoComplete='off'
    >
      <TextField
        id='outlined-multiline-flexible'
        label='Task'
        multiline
        maxRows={4}
        inputProps={{ style: { fontSize: 25 } }}
      />
      <Button
        variant='contained'
        color='secondary'
        startIcon={<Add />}
        sx={{
          fontWeight: 600,
          py: "0.8rem",
          px: 3,
        }}
      >
        Add
      </Button>
    </Box>
  );
}

export default InputForm;
