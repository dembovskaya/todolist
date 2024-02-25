import React from "react";
import { ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box";
import { theme } from "../theme";
import { store } from "../store";
import AddTaskFormContainer from "../store/containers/AddTaskFormContainer";
import TaskListContainer from "../store/containers/TaskListContainer";
import { Provider } from "react-redux";
// @ts-ignore
import banner from "./Banner.png";

const App = () => {
  // добавить роуты
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Box
          sx={{
            height: "100vh",
            backgroundImage: `url(${banner})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            alignItems: "center",
            justifyContent: "center",
            margin: 0,
            overflow: "hidden",
          }}
        >
          <AddTaskFormContainer />
          <TaskListContainer />
        </Box>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
