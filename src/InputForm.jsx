import { Box, Button, TextField } from "@mui/material";
import { Add, FilterList } from "@mui/icons-material";
import { useState } from "react";

function InputForm({ onAdd, onSortList }) {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!task) return;

    const newTask = { taskName: task, checked: false, id: Date.now() };
    onAdd(newTask);
    setTask("");
  }

  return (
    <Box
      component='form'
      sx={{
        "& .MuiTextField-root": { m: 0.5, width: "30ch" },
        bgcolor: "#D2D4C8",
        p: 2,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: 2,
      }}
      noValidate
      autoComplete='off'
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <TextField
          id='filled-basic'
          label='Task'
          variant='filled'
          inputProps={{ style: { fontSize: 20 } }}
          InputLabelProps={{ style: { fontSize: 20 } }}
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        {/* <TextField
        id='outlined-multiline-flexible'
        label='Task'
        maxRows={1}
        inputProps={{ style: { fontSize: 25 } }}
        value={task}
        onChange={(e) => setTask(e.target.value)}
      /> */}
        <Button
          type='submit'
          variant='contained'
          color='secondary'
          startIcon={<Add />}
          sx={{
            fontWeight: 600,
            py: "0.8rem",
            px: 3,
          }}
          onClick={handleSubmit}
        >
          Add
        </Button>
      </div>
      <Button
        variant='contained'
        color='yellow'
        sx={{ p: 3, borderRadius: 100 }}
        onClick={onSortList}
      >
        <FilterList fontSize='medium' />
      </Button>
    </Box>
  );
}

export default InputForm;
