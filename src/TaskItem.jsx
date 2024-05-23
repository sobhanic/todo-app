import { Delete } from "@mui/icons-material";
import {
  Checkbox,
  FormControlLabel,
  IconButton,
  Typography,
} from "@mui/material";

function TaskItem({ task, onDelete, onToggle }) {
  return (
    <li>
      <FormControlLabel
        control={
          <Checkbox value={task.checked} onChange={() => onToggle(task.id)} />
        }
        label={
          <Typography
            sx={{
              fontSize: 20,
              textDecoration: task.checked ? "line-through" : "none",
            }}
          >
            {task.taskName}
          </Typography>
        }
      />
      <IconButton
        aria-label='delete'
        color='error'
        onClick={() => onDelete(task.id)}
      >
        <Delete />
      </IconButton>
    </li>
  );
}

export default TaskItem;
