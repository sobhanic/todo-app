import { Delete } from "@mui/icons-material";
import {
  Checkbox,
  FormControlLabel,
  IconButton,
  Typography,
} from "@mui/material";

function TaskItem({ item }) {
  return (
    <li>
      <FormControlLabel
        control={<Checkbox />}
        label={<Typography sx={{ fontSize: 20 }}>task {item}</Typography>}
      />
      <IconButton aria-label='delete' color='error'>
        <Delete />
      </IconButton>
    </li>
  );
}

export default TaskItem;
