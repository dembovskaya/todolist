import React, { FC } from "react";
import { Task } from "../../store/types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface TaskItemProps {
  task: Task;
  onDelete: (id: string) => void;
}

const TaskItem: FC<TaskItemProps> = ({ task, onDelete }) => {
  return (
    <Box>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            mr: 2,
            width: "50%",
            color: "text.secondary",
            maxWidth: "100%",
            overflowWrap: "break-word",
          }}
        >
          {task.text}
        </Typography>
        <Button onClick={() => onDelete(task.id)}>Delete</Button>
      </Grid>
    </Box>
  );
};

export default TaskItem;
