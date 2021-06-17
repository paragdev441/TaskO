import { styled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Fab } from "@material-ui/core";

const CreateButton = styled(Button)({
  background: "linear-gradient(45deg, #2de2e2 30%, #0f88f1 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
  fontWeight: "600",
});

const ViewButton = styled(Button)({
  background: "linear-gradient(45deg, #78ec16 30%, #23a014 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
  fontWeight: "600",
});

const ProgressButton = styled(Button)({
  background: "linear-gradient(45deg, #0ab2f3 30%, #0f88f1 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
});

const AddButton = styled(Fab)({
  background: "linear-gradient(45deg, #0ab2f3 30%, #0f88f1 90%)",
  border: 0,
  borderRadius: "38px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "26px",
  fontWeight: "600",
});

const DeleteButton = styled(Fab)({
  background: "linear-gradient(45deg, #ff7507 30%, #dc0929 90%)",
  border: 0,
  borderRadius: "38px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  fontWeight: "600",
  color: "white",
  height: 48,
  padding: "26px",
});

export { CreateButton, ViewButton, ProgressButton, AddButton, DeleteButton };
