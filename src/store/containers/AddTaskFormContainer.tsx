import { connect } from "react-redux";
import { addTask } from "../actions";
import AddTaskForm from "../../components/AddTaskForm";

const mapDispatchToProps = {
  onAdd: addTask,
};

const AddTaskFormContainer = connect(null, mapDispatchToProps)(AddTaskForm);

export default AddTaskFormContainer;
