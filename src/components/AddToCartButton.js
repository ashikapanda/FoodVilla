import { addItem, removeItem } from "../ReduxStore/slices/cartSlice";
import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import { useDispatch } from "react-redux";

const AddToCartButton = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <ButtonGroup size="large" aria-label="large outlined button group">
      <Button
        onClick={() => {
          dispatch(addItem(item));
        }}
      >
        +
      </Button>
      {<Button>{item?.count}</Button>}
      {
        <Button
          onClick={() => {
            dispatch(removeItem(item));
          }}
        >
          -
        </Button>
      }
    </ButtonGroup>
  );
};

export default AddToCartButton;
