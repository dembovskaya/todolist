import React, { FC, FormEvent, useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

interface AddTaskProps {
  onAdd: (text: string) => void;
}

const AddTaskForm: FC<AddTaskProps> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");

    const storedTasks = localStorage.getItem("tasks");
    const tasks: string[] = storedTasks ? JSON.parse(storedTasks) : [];
    localStorage.setItem("tasks", JSON.stringify([...tasks, text]));
  };

  return (
    <Container
      component="form"
      onSubmit={handleSubmit}
      sx={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))`,
      }}
    >
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          pt: 20,
        }}
      >
        <TextField
          label="Task"
          variant="outlined"
          size="small"
          color="secondary"
          sx={{
            mr: 2,
            width: "50%",
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "text.secondary",
            },
          }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button type="submit" variant="contained" color="secondary">
          Add Task
        </Button>
      </Grid>
    </Container>
  );
};

export default AddTaskForm;
