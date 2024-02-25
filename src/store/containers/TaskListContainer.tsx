import { connect } from "react-redux";
import { RootState } from "../index";
import { deleteTask } from "../actions";
import TaskList from "../../components/TaskList";

const mapStateToProps = (state: RootState) => ({
  tasks: state,
});

const mapDispatchToProps = {
  onDelete: deleteTask,
};

const TaskListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskList);

export default TaskListContainer;
