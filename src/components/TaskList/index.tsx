import React, { FC } from "react";
import { Task } from "../../store/types";
import TaskItem from "../TaskItem";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: string) => void;
}

const TaskList: FC<TaskListProps> = ({ tasks, onDelete }) => {
  return (
    <Container
      sx={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))`,
        height: "100%",
      }}
    >
      <Grid
        sx={{
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          pt: 20,
        }}
      >
        {tasks.map((task) => (
          <TaskItem key={task.id} task={task} onDelete={onDelete} />
        ))}
      </Grid>
    </Container>
  );
};

export default TaskList;
